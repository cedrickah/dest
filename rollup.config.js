const commonjs = require("@rollup/plugin-commonjs");
const { dts } = require("rollup-plugin-dts");

module.exports = [
    {
        input: "build/index.js",
        output: { dir: "dist", format: "cjs", exports: "named" },
        plugins: [commonjs()],
    },
    {
        input: "build/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "cjs" }],
        plugins: [dts()],
    },
];
