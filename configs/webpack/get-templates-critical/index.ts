const getFiles = require('../get-files');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');

interface IProps {
	base: string;
}

const generateHtmlCriticalPlugins = ({ base }: IProps) => {
	let files: string[] = [];

	const paths: string[] = getFiles(base, []);

	files = paths
		.filter((item) => !!item.split('.')[1])
		.filter((item) => item.indexOf('.html') >= 0)
		.map((item) => item.replace(base + '/', ''));

	return files.map((file) => {
		return new HtmlCriticalWebpackPlugin({
			base: base,
			src: file,
			dest: file,
			inline: true,
			minify: true,
			extract: false,
			width: 2560,
			height: 2160,
			penthouse: {
				blockJSRequests: false,
			},
			// ignore: ['@font-face'],
		});
	});
};

export default generateHtmlCriticalPlugins;
