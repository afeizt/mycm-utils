import serve from 'rollup-plugin-serve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
console.log(process.env.ENV)
export default {
	input: './src/index.js',

	output: {
		name: 'mycmUtils',
		file: process.env.ENV == 'production' ? './dist/mycm-utils.min.js' : './dist/mycm-utils.js',
		format: "umd",
		sourcemap: process.env.ENV == 'production' ? true : false,

	},
	plugins: [
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