const path = require('path');

interface IOptions {
    dirname?: string;
}

export class AbsolutePathPlugin {
    options: IOptions;

    constructor(options: IOptions) {
        this.options = options;
        if (!options.dirname) {
            console.error('"dirname" is undefined');
        }
    }

    override(data: any) {
        return Object.assign({}, data, {
            request: path.join(this.options.dirname, data.request),
            dependencies: data.dependencies.map((d: any) => {
                return Object.assign({}, d, {
                    request: path.join(this.options.dirname, d.request),
                    userRequest: path.join(this.options.dirname, d.userRequest),
                });
            }),
        });
    }

    apply(compiler: any) {
        compiler.hooks.run.tap('normal-module-factory', (moduleFactory: any) => {
            moduleFactory.hooks.run.tap('before-resolve', (data: any, callback: (...args: any) => void) => {
                if (
                    data.request.indexOf('/node_modules/') === 0 ||
                    data.request.indexOf('/src/') === 0 ||
                    data.request.indexOf('/dist/') === 0
                ) {
                    callback(null, this.override(data));
                } else {
                    callback(null, data);
                }
            });
        });
    }
};