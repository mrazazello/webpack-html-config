let script = document.querySelector('script[src*="index"][src*=".js"]');
let source = script ? script.src : '/';
let meta = document.getElementsByName('bundle-path')[0];

let publicPath =
    meta ?
        meta.content :
        source.substr(0, source.lastIndexOf('/') + 1);

__webpack_public_path__ = publicPath;