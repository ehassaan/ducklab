
import { RollupOptions } from "rollup";
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";


const config = [
    {
        plugins: [
            del({ targets: 'dist/*' }),
            typescript(),
            json(),
            commonjs(),
            nodeResolve(),
        ],
        input: 'src/index.ts',
        output: {
            file: 'dist/index.cjs',
            format: 'cjs',
        },
    },
] as RollupOptions;
export default config;
