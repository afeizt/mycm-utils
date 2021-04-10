import serve from 'rollup-plugin-serve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import copy from 'rollup-plugin-copy';
console.log(process.env.ENV)
export default {
    input: './src/index.js',

    output: {
        name: 'mycmUtils',
        file: './dist/mycm-utils.js',
        format: "umd",
        browser: true,
        sourcemap: process.env.ENV == 'production' ? true : false,

    },
    plugins: [
        copy({
            targets: [
                { src: 'src/index.d.ts', dest: 'dist' }
            ]
        }),
        babel({
            exclude: "node_modules/**"
        }),
        process.env.ENV == 'production' ? uglify() : null,
        process.env.ENV == 'production' ? null : serve({
            open: true,
            openPage: "/index.html",
            port: 3000,
            contentBase: ""
        })
    ],
}