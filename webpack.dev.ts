import path from 'path';
import webpack from 'webpack';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import { AbsolutePathPlugin } from './configs/webpack/absolute-path';
import { generateHtmlPlugins } from './configs/webpack/get-templates';

interface Configuration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
	mode: 'development',
	entry: {
		index: __dirname + '/src/assets/entry.ts',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		// assetModuleFilename: '[name].[hash].[ext]',
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@helpers': path.resolve(__dirname, 'src', 'assets', 'scripts', 'helpers'),
			'@modules': path.resolve(__dirname, 'src', 'assets', 'scripts', 'modules'),
		},
		modules: ['node_modules', './src/assets', './src/assets/scripts']
	},
	watchOptions: {
		aggregateTimeout: 100,
		ignored: ['node_modules/**'],
	},
	devtool: 'inline-source-map',
	devServer: {
		host: '0.0.0.0',
		port: 8030,
		hot: true,
		open: true,
		compress: false,
		static: {
			directory: path.join(__dirname, 'dist'),
			publicPath: '',
			// watch: true,
		},
		onBeforeSetupMiddleware: (devServer) => {
			if (!devServer) return;

			let resources = [
				'/json/forhas-error.json',
				'/json/form-success.json',
				'/json/form-success-error.json',
				'/json/form-recaptcha.json',
				'/json/catalog.json',
				'/json/account-personal.json',
				'/json/checkout-update.json',
			];

			setTimeout(() => {
				for (let i = 0; i < resources.length; i++) {
					devServer?.app &&
						devServer.app.post(resources[i], (req: any, res: any) => {
							res.redirect(resources[i]);
						});
				}
			}, 1200);
		},
	},

	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						// options: {
						//     transpileOnly: true
						// }
					},
				],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 1,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
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

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		...generateHtmlPlugins({
			templates: path.resolve(__dirname, 'src', 'templates'),
		}),
		new AbsolutePathPlugin({
			dirname: __dirname,
		}),
	],
};

export default config;
