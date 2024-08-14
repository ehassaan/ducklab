
import { RollupOptions } from "rollup";
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import typescript from '@rollup/plugin-typescript';
import copy from "rollup-plugin-copy";
import del from 'rollup-plugin-delete';


const config = [
    {
        plugins: [
            del({ targets: 'dist/*' }),
            typescript({ declaration: true, declarationDir: 'typings', exclude: ['rollup.config.ts'] }),
        ],
        input: 'src/main.ts',
        output: {
            name: 'dlab.core',
            file: 'dist/index.js',
            format: 'umd',
        },
    },
    {
        plugins: [dts()],
        input: 'dist/typings/main.d.ts',
        output: {
            format: 'es',
            file: 'dist/index.d.ts',
        },
    },
] as RollupOptions;
export default config;
