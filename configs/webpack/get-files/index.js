const fs = require('fs');

const getFiles = (path, files = []) => {
  fs
      .readdirSync(path)
      .filter(item =>
          !(/(^|\/)\.[^\/.]/g).test(item) &&
          item !== 'html'
      )
      .forEach(file => {
        let subPath = path + '/' + file;

        if (fs.lstatSync(subPath).isDirectory()) {
          getFiles(subPath, files);
        }
        else {
          files.push(path + '/' + file);
        }
      });
    return files;
};

module.exports = getFiles;