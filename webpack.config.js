const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
	resolve: {
		extensions: ['.vue', '.js'],
		alias: {
			'~': path.resolve(__dirname, 'src'), // 경로 별칭
		},
	},
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: 'helloVue.js',
		publicPath : '/'
	},
	module: {
		rules: [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				use : 'babel-loader'
			},
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.s?css$/,
				use: [
					'vue-style-loader', 
					'css-loader', 
					'postcss-loader',
					{
						loader : 'sass-loader',
						options : {
							additionalData : `
								@use "sass:color";
								@use "sass:list";
								@use "sass:map";
								@use "sass:math";
								@use "sass:meta";
								@use "sass:selector";
								@use "sass:string";
								@import "~/scss/_variables";
							`
						}
					}
				], // 뒤에서 앞으로 해석
			},
		],
	},
	plugins: [
		new Dotenv(),
		new VueLoaderPlugin(),
		new HtmlPlugin({
			template: './src/index.html',
		}),
		new CopyPlugin({
			patterns: [{ from: 'static' }],
		}),
	],
	devServer : {
		port : 8079,
		historyApiFallback : true
	},
}
