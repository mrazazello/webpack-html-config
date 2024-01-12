const HtmlWebpackPlugin = require('html-webpack-plugin');
const beautifyHtml = require('js-beautify').html;

interface IOptions {
    config: {
        indent_size: number,
        indent_with_tabs: boolean,
        html: {
            end_with_newline: boolean,
            indent_inner_html: boolean,
            preserve_newlines: boolean,
        }
    },
}

const defaultOptions: IOptions = {
    config: {
        indent_size: 4,
        indent_with_tabs: false,
        html: {
            end_with_newline: true,
            indent_inner_html: true,
            preserve_newlines: true,
        }
    },
};

export class HtmlBeautifyPlugin {
    options: IOptions;

    constructor (options?: IOptions) {
        this.options = Object.assign({}, defaultOptions, options);
    }

    apply(compiler: any) {
        const pluginName = 'html-beautify-plugin';

        compiler.hooks.compilation.tap(pluginName, (compilation: any) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(pluginName, (data: any, cb: (...args: any) => void) => {
                if (data.html) {
                    data.html = beautifyHtml(data.html, this.options);
                }

                cb();
            });
        });
    }
}
