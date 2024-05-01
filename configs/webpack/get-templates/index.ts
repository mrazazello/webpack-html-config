const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getFiles = require('../get-files');

interface IOptions {
    inject?: boolean | "body";
    minify?: boolean;
    scriptLoading?: 'defer';

}

const defaultOptions: IOptions = {
    inject: true,
    minify: false,
    scriptLoading: 'defer',
};

interface IGenerateHtmlPluginsProps {
    templates: string;
    dist?: string;
    options?: IOptions;
}

export const generateHtmlPlugins = ({ templates, dist = '', options = {} }: IGenerateHtmlPluginsProps) => {
    options = Object.assign(defaultOptions, options);

    const paths: string[] = getFiles(templates, []);

    return getTemplates(
        paths
            .filter(item => !!item.split('.')[1])
            .map(item => item.replace(templates + '/', '')),
        templates, dist, options);
};

const getTemplates = (files: string[], templates: string, dist: string, options: IOptions) => {
    return files.map(file => {
        let [name, ext] = file.split('.');

        return new HtmlWebpackPlugin({
            filename: `${dist}${file}`,
            template: path.resolve(__dirname, `${templates}/${name}.${ext}`),
            ...options
        });
    });
};
