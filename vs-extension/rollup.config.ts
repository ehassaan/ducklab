
import { RollupOptions, Plugin, ObjectHook } from "rollup";
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";
import copy from "rollup-plugin-copy";
import { builtinModules } from 'module';
import { readFileSync, writeFileSync } from 'fs';

function updatePackageJson(path: string, keyValue: { [k: string]: any; }) {

    return {
        buildEnd: {
            handler: (context, err) => {
                if (err) return;
                let pkg = JSON.parse(readFileSync(path).toString());
                pkg = { ...pkg, ...keyValue };
                writeFileSync(path, JSON.stringify(pkg, null, 2));
            },
            sequential: true,
            order: "post"
        }
    } as Plugin;
}

const config = [
    {
        plugins: [
            del({ targets: 'out/*', hook: 'buildStart' }),
            typescript(),
            json(),
            nodeResolve({ preferBuiltins: true }),
            commonjs({
                ignoreDynamicRequires: true
                // dynamicRequireTargets: [
                //     "./prebuilds/**/*.node",
                //     "./lib/**/*.node",
                // ]
            }),
            copy({
                hook: "buildEnd",
                targets: [
                    {
                        src: "node_modules/duckdb/lib/*",
                        dest: "lib/"
                    },
                    {
                        src: "assets/*",
                        dest: "out/assets/"
                    },
                ]
            }),
        ],
        external: [
            ...builtinModules,
            "vscode",
            // "duckdb-async",
            // "zeromq",
            // "nock",
            // "aws-sdk",
            // "aws-s3"
        ],
        input: 'src/index.ts',
        output: {
            file: 'out/index.js',
            format: 'cjs',
        },
    },
] as RollupOptions;
export default config;
