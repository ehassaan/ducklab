import { exec, spawn } from 'child_process';
import { IKernelSpec } from './IKernelSpec';
import { PythonConnection } from './connection';
import { PythonKernel } from "./PythonKernel";
import { IRunningKernel, KernelStatus } from '../IRunningKernel';


export class KernelManager {

    kernels: { [id: string]: IRunningKernel; } = {};
    requiredPackages = ["ipykernel", "duckdb"];

    async runCommand(kernel: IKernelSpec, cmd: string) {
        let promise = new Promise<string>((resolve, reject) => {
            exec(`${kernel.path} ${cmd}`, (err, stdout, stderr) => {
                if (err) {
                    return reject(stderr);
                }
                resolve(stdout);
            });
        });
        return promise;
    }

    private runProcess(kernel: IKernelSpec, args: string[]) {
        let process = spawn(kernel.path, args, { stdio: "pipe" });
        return process;
    }

    async listDeps(kernel: IKernelSpec) {
        let pipList = await this.runCommand(kernel, "-m pip list");
        let lines = pipList.replaceAll("\r\n", "\n").split("\n");
        if (lines.length <= 2) return [];

        let packages = {};

        lines.slice(2).map(line => {
            let parts = line.replace(new RegExp("\\s+"), ":").split(":");
            packages[parts[0].toLowerCase()] = parts[1];
        });
        return packages;
    }

    async installRequiredDeps(kernel: IKernelSpec, packages: { [name: string]: string; }) {
        console.log("Required packages: ", this.requiredPackages);

        for (const pkg of this.requiredPackages) {
            if (!(pkg.toLowerCase() in packages)) {
                let res = await this.runCommand(kernel, `-m pip install ${pkg}`);
                console.log(`Package response: ${pkg} - ${res}`);
            }
            else {
                console.log(`Package found ${pkg}==${packages[pkg]}`);
            }
        }

        for (const pkg of this.requiredPackages) {
        }
    }

    get(id: string) {
        if (id in this.kernels) {
            return this.kernels[id];
        }
        return null;
    }

    async launchKernel(spec: IKernelSpec) {
        let packages = await this.listDeps(spec);
        console.log("Installed Packages: ", packages);
        console.log("Installing required packages...");
        await this.installRequiredDeps(spec, packages);
        let conn = await PythonConnection.create();
        let process = this.runProcess(spec, ["-m", "ipykernel_launcher", "-f", conn.connectionFile, "--ident", conn.id, "--user", "ducklab"]);
        let kernel = new PythonKernel(
            spec,
            conn,
            process,
        );
        console.log("Kernel Run Res: ", kernel);
        this.kernels[kernel.id] = kernel;
        return kernel;
    }

    kill(kernelId: string) {
        if (kernelId in this.kernels) {
            if (this.kernels[kernelId].status !== KernelStatus.Killed) {
                this.kernels[kernelId].dispose();
            }
            delete this.kernels[kernelId];
        }
    }

    dispose() {
        Object.values(this.kernels).map(k => {
            try {
                k.dispose();
            }
            catch (e) {
                console.error("Failed to dispose kernel: ", k);
            }
        });
    }
}
