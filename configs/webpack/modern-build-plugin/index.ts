const HtmlWebpackPlugin = require('html-webpack-plugin');

interface IOtions {
    path: string;
    publicPath: string;
}

const defaultOptions: IOtions = {
    path: '/',
    publicPath: '/',
};
const safariFix = '!function(){var t,e=document,n=e.createElement("script");!("noModule"in n)&&"onbeforeload"in n&&(t=!1,e.addEventListener("beforeload",function(e){if(e.target===n)t=!0;else if(!e.target.hasAttribute("nomodule")||!t)return;e.preventDefault()},!0),n.type="module",n.src=".",e.head.appendChild(n),n.remove())}();';

export class ModernBuildPlugin {
    options: IOtions;

    constructor (options: IOtions) {
        this.options = Object.assign({}, defaultOptions, options);
    }
    apply(compiler: any) {
        const pluginName = 'modern-build-plugin';

        compiler.hooks.compilation.tap(pluginName, (compilation: any) => {
            HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync(pluginName, (data: any, cb: () => void) => {
                let src: string | undefined;

                data.bodyTags.forEach((tag: any) => {
                    if (tag.tagName === 'script' && tag.attributes) {
                        tag.attributes.type = 'module';
                        tag.attributes.defer = 'defer';
                        src = tag.attributes.src;
                    }
                });

                data.bodyTags.push({
                    tagName: 'script',
                    closeTag: true,
                    innerHTML: safariFix,
                });

                if (src) {
                    data.bodyTags.push({
                        tagName: 'script',
                        closeTag: true,
                        attributes: {
                            src: src.replace('index.js', 'legacy/index.js'),
                            nomodule: true,
                            defer: true,
                        },
                    });
                }

                cb();
            });
        });
    }
}
