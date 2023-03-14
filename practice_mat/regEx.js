const path = require('path')
const fs = require('fs')

const getArrayLinks = (file) => {
    const regExp = /\[([^\[]+)\](\(.*\))/gm;
    const singleMatchRegex = /\[([^\[]+)\]\((.*)\)/;
    const absPath = path.resolve(file)
    const content = fs.readFileSync(file, 'utf8').toString()
    const getLinks = content.match(regExp);

    if (getLinks !== null) {
        const normalizedArray = getLinks.map((element) => {
            const elementFound = singleMatchRegex.exec(element);
            const [full, text, link] = elementFound;
            return {
              text: text,
              link: link,
              file: absPath
            };
          });
        // return normalizedArray
    };
}
getArrayLinks('./files/first-file.md')

module.exports = {
    getArrayLinks
}