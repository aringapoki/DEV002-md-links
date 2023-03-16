const path = require('path')
const fs = require('fs')
const axios = require('axios');

const pathValidate = (entryPath) => fs.existsSync(entryPath)

const isAnAbsolutePath = (entryPath) => path.isAbsolute(entryPath);

const pathResolve = (entryPath) => path.resolve(entryPath)

const getAbsolutePath = (entryPath) => {
    if (isAnAbsolutePath(entryPath) == true) {
        return entryPath
    } else {
        return pathResolve(entryPath)
    }
}

const isDirectory = (entryPath) => {
    const stats = fs.statSync(entryPath);
    return stats.isDirectory()
}

const isFile = (entryPath) => {
    const stats = fs.statSync(entryPath);
    return stats.isFile()
}

const getExtFile = (entryPath) => path.extname(entryPath)

const readDir = (entryPath) => fs.readdirSync(entryPath, 'utf8')

const getFiles = (entryPath) => {
    const absPath = getAbsolutePath(entryPath);
    const arrayFiles = []

    if (isDirectory(absPath) == true) {
        const files = readDir(absPath)
        files.forEach(file => {
            if (getExtFile(file) == '.md')
                arrayFiles.push(path.join(absPath, file))
        });
    }
    else if (isFile(absPath) == true) {
        if (getExtFile(absPath) === '.md')
            arrayFiles.push(absPath);
    }
    else {
        return console.log('error')
    }
    return arrayFiles
}

const getArrayLinks = (file) => {
    return new Promise((resolve, rejects) => {
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
            resolve(normalizedArray)
        } else {
            rejects("Hubo un error")
        };
    })

}

const httpRequest = (url) => axios.get(url)

const getStats = (linksArray, withValidate = false) => {
    let stats = {
        "total": linksArray.length,
        "Unique": 0,
        "Broken": 0        
    };
    
    const unique = linksArray.reduce((unique, element) => (unique.includes(element.link) ? unique : [...unique, element.link]), []);
    const broken = linksArray.filter(element => !element.statusText.includes('OK'));
    stats["Unique"] = unique.length;
    //console.log(unique)
    //return stats
    if(withValidate){
        stats["Broken"] = broken.length
        return stats
    }else{
        return stats
    }
}

// const linksArray = [{statusCode: '400', link: 'abc'}, {statusCode: '500', link: 'abc'}, {statusCode : '200', link: 'zzzz'}, {statusCode: '200', link: 'ssss'}]
// console.log(getStats(linksArray, true))

// const unique = linksArray.reduce(
//     (link, unique) => (link.includes(unique) ? link : [...link, unique]), [])
// return unique

module.exports = {
    pathValidate,
    getFiles,
    getArrayLinks,
    httpRequest,
    getStats
};