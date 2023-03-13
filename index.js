const { pathValidate, isAnAbsolutePath, pathResolve, isDirectory, isFile, readDir, getExtFile, readFile } = require("./functions/utils");

const mdLinks = (entryPath, options) => {  
  //crear promesa que retorna la función mdLinks
  const pathExists = pathValidate(entryPath);
  const isAbsolute = isAnAbsolutePath(entryPath);
  const relativeToAbs = pathResolve(entryPath);
  const isADirectory = isDirectory(entryPath);
  const readDirectory = readDir(entryPath)
  const isAFile = isFile(entryPath);
  const isMd = getExtFile(entryPath);
  const readMdFile = readFile(entryPath);  
  
  return new Promise((resolve, reject)=>{    
    // if (pathExists(entryPath) === false){
    //   reject('not a valid path')      
    // }
    // else if (isAbsolute(entryPath) == true){
    //   return entryPath
    // }
    // else if (isAbsolute(entryPath) == false) {
    //   const absPath = relativeToAbs(entryPath)
    //   return absPath
    // }
    //identificar si la ruta existe
    //si no existe la ruta, rechaza la promesa
    //reject con mensaje de "la ruta no existe"
    resolve(entryPath)
  })
}

const testMdLinks = mdLinks('./DEV002-md-links/files/first-file.md');
testMdLinks.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});

module.exports = {
  mdLinks
};
