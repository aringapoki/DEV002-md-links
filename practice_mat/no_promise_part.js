const { pathValidate, isAnAbsolutePath, pathResolve, getAbsolutePath, isDirectory, isFile, readDir, getExtFile, getFiles } = require("../functions/utils");
const { getArrayLinks } = require('../practice_mat/regEx.js')


const mdLinks = (entryPath, options) => {
    //crear promesa que retorna la función mdLinks
    const pathExists = pathValidate(entryPath);
    const isAbsolute = isAnAbsolutePath(entryPath);
    const relativeToAbs = pathResolve(entryPath);
    const isADirectory = isDirectory(entryPath);
    //const readDirectory = readDir(entryPath)
    const isAFile = isFile(entryPath);
    const isMd = getExtFile(entryPath);
    //const readMdFile = readFile(entryPath);
    const getAbsPath = getAbsolutePath(entryPath);

    const arrayFiles = getFiles(entryPath);
    
    if(arrayFiles){
    console.log('arrayFiles: ', arrayFiles)   
    //const linksArray = [] 
    arrayFiles.forEach(file => {
        console.log('funciona')
        // linksArray.push(getArrayLinks(file))
        // console.log('linksArray: ', linksArray)
    });    
    }

    
    //función que valida el path y devuelve un array archivos
    // const arrayFiles = (entryPath) => {
    //     if (pathExists(entryPath) == false) {
    //         return console.log('not a valid path')
    //     } else {
    //         const absPath = getAbsPath(entryPath);
    //         const arrayFiles = []

    //         if (isADirectory(absPath) == true) {
    //             arrayFiles.push(readDirectory(absPath))
    //         }
    //         else if (isAFile(absPath) == true) {
    //             arrayFiles.push(isMd(absPath));
    //         }
    //         else {
    //             return console.log(error)
    //         }
    //         return arrayFiles
    //     }
    // }
    // console.log(arrayFiles)

    // return new Promise((resolve, reject) => {
    //     if (pathExists(entryPath) == false) {
    //         reject('not a valid path')
    //     } else {
    //         getAbsPath(entryPath)
    //     }
    //     //identificar si la ruta existe
    //     //si no existe la ruta, rechaza la promesa
    //     //reject con mensaje de "la ruta no existe"
    //     resolve(entryPath)
    // })
}

//mdLinks('./files/first-file.md');
mdLinks('./files')
// const testMdLinks = mdLinks('./DEV002-md-links/files/first-file.md');
// testMdLinks.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});

module.exports = {
    mdLinks
};
