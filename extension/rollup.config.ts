
import { RollupOptions } from "rollup";
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";
import copy from "rollup-plugin-copy";
import { builtinModules } from 'module';

const config = [
    {
        plugins: [
            del({ targets: 'dist/*' }),
            typescript(),
            json(),
            nodeResolve({ preferBuiltins: false }),
            commonjs(),
            copy({
                hook: "buildEnd",
                targets: [{
                    src: "package.json",
                    dest: "dist/"
                },
                {
                    src: ".vscodeignore",
                    dest: "dist/"
                },
                {
                    src: 'LICENSE',
                    dest: 'dist/'
                },
                {
                    src: 'README.md',
                    dest: 'dist/'
                },
                {
                    src: 'logo.png',
                    dest: 'dist/'
                },
                ]
            })
        ],
        external: [
            ...builtinModules,
            "vscode",
            "duckdb-async"
        ],
        input: 'src/index.ts',
        output: {
            file: 'dist/build/index.cjs',
            format: 'cjs',
        },
    },
] as RollupOptions;
export default config;
