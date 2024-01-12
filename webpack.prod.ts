import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { AbsolutePathPlugin } from './configs/webpack/absolute-path';
import { PreloadFontsPlugin } from './configs/webpack/preload-fonts-plugin';
import { ModernBuildPlugin } from './configs/webpack/modern-build-plugin';
// import { HtmlBeautifyPlugin } from './configs/webpack/html-beautify-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
import { generateHtmlPlugins } from './configs/webpack/get-templates';
import getTemplatesCritical from './configs/webpack/get-templates-critical';

const isModern: boolean = process.env.BROWSERS_ENV === 'modern';
const babelConfig = isModern
	? [
			'@babel/preset-env',
			{
				targets: {
					esmodules: true,
				},
			},
	  ]
	: [
			'@babel/preset-env',
			{
				corejs: { version: 3 },
				useBuiltIns: 'entry',
				targets: {
					edge: '17',
					firefox: '60',
					chrome: '67',
					safari: '11.1',
					ie: '10',
				},
			},
	  ];

const config: WebpackConfiguration = {
	mode: 'production',
	entry: isModern
		? {
				index: [
					__dirname + '/configs/webpack/public-path/public-path',
					__dirname + '/src/assets/entry.ts',
				],
		  }
		: {
				index: [
					__dirname + '/configs/webpack/public-path/public-path',
					// __dirname + '/src/assets/polyfills.ts',
					// __dirname + '/src/assets/scripts/app.ts',
				],
		  },
	output: {
		filename: isModern ? '[name].js' : 'legacy/[name].js',
		chunkFilename: isModern
			? '[name].chunk.[contenthash].js'
			: 'legacy/[name].chunk.[contenthash].js',
		path: path.resolve(__dirname, 'dist/build'),
		publicPath: '/build',
		assetModuleFilename: '[name].[contenthash][ext]',
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@helpers': path.resolve(__dirname, 'src/assets/scripts/helpers/'),
			'@modules': path.resolve(__dirname, 'src/assets/scripts/modules/'),
		},
		modules: ['node_modules', './src/assets', './src/assets/scripts'],
	},
	// target: ['web', 'es5'],
	// devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				// exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [babelConfig],
						},
					},
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
							configFile: isModern ? 'tsconfig.json' : 'tsconfig.es5.json',
						},
					},
				],
			},
			{
				test: /\.js(x)?$/,
				// exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [babelConfig],
						},
					},
				],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: './',
						},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: false,
							importLoaders: 1,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: {
									'postcss-preset-env': {
										browsers: 'last 5 versions',
										autoprefixer: { grid: false },
									},
								},
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: false,
						},
					},
				],
			},
			{
				test: /\.woff(2)?$|\.ttf$|\.eot$|\.svg$|\.png|\.webp|\.jp(e)?g|\.gif$|\.mp4$|\.mp3$|\.webm$/,
				type: 'asset/resource',
			},
		],
	},

	plugins: isModern
		? [
				new CleanWebpackPlugin({
					verbose: false,
				}),
				new MiniCssExtractPlugin({
					filename: 'styles.css',
				}),
				...generateHtmlPlugins({
					templates: path.resolve(__dirname, 'src/templates'),
					dist: '../',
					options: {
						inject: 'body',
					},
				}),
				...generateHtmlPlugins({
					templates: path.resolve(__dirname, 'src/popups'),
					dist: '../popups/',
					options: {
						inject: false,
					},
				}),
				...generateHtmlPlugins({
					templates: path.resolve(__dirname, 'src/chunks'),
					dist: '../chunks/',
					options: {
						inject: false,
					},
				}),
				new PreloadFontsPlugin({
					path: path.resolve(__dirname, 'dist/build'),
					publicPath: 'build/',
				}),
				new ModernBuildPlugin({
					path: path.resolve(__dirname, 'dist/build'),
					publicPath: 'build/',
				}),
				new AbsolutePathPlugin({
					dirname: __dirname,
				}),
				...getTemplatesCritical({
					base: path.resolve(__dirname, 'dist'),
				}),
				// new HtmlBeautifyPlugin(),
		  ]
		: [],

	optimization: {
		// removeAvailableModules: false,
		// removeEmptyChunks: false,
		// splitChunks: false,
		minimize: true,
		minimizer: isModern
			? [
					// new BundleAnalyzerPlugin(),
					new TerserWebpackPlugin({
						parallel: true,
						terserOptions: {
							compress: {
								drop_console: true,
							},
						},
						extractComments: false,
					}),
					new CssMinimizerPlugin({
						parallel: true,
					}),
			  ]
			: [
					new TerserWebpackPlugin({
						parallel: true,
						terserOptions: {
							compress: {
								drop_console: true,
							},
						},
						extractComments: false,
					}),
			  ],
	},
};

export default config;
