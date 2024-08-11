
/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    input: 'src/main.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'umd'
    }
};
export default config;