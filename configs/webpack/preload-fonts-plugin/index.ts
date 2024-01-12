const HtmlWebpackPlugin = require('html-webpack-plugin');

interface IOptions {
    path: String;
    publicPath: String;
}

const defaultOptions: IOptions = {
    path: '/',
    publicPath: '/',
};

export class PreloadFontsPlugin {
    options: IOptions;

    constructor (options: IOptions) {
        this.options = Object.assign({}, defaultOptions, options);
    }

    apply(compiler: any) {
        const pluginName = 'preload-fonts-plugin';

        compiler.hooks.compilation.tap(pluginName, (compilation: any) => {
            HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync(pluginName, (data: any, cb: () => void) => {
                let woff2Assets =
                    compilation
                        .getAssets()
                        .filter((asset: any) => /\.woff2$/.test(asset.name));

                woff2Assets.forEach((font: any) => {
                    data.headTags.push({
                        tagName: 'link',
                        closeTag: false,
                        attributes: {
                            rel: 'preload',
                            href: this.options.publicPath + font.name,
                            as: 'font',
                            type: 'font/woff2',
                            crossorigin: 'anonymous'
                        },
                    });
                });

                cb();
            });
        });
    }
}
