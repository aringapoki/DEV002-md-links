const { getFiles, getArrayLinks } = require("./functions/utils");

const mdLinks = (entryPath, options) => {

  const arrayFiles = getFiles(entryPath);

  if (arrayFiles) {    
    arrayFiles.forEach(file => {
      const arrayLinks = getArrayLinks(file)
      console.log('array links: ', arrayLinks)
    });
  }


  // return new Promise((resolve, reject)=>{    
  //   // if (pathExists(entryPath) === false){
  //   //   reject('not a valid path')      
  //   // }
  //   // else if (isAbsolute(entryPath) == true){
  //   //   return entryPath
  //   // }
  //   // else if (isAbsolute(entryPath) == false) {
  //   //   const absPath = relativeToAbs(entryPath)
  //   //   return absPath
  //   // }
  //   //identificar si la ruta existe
  //   //si no existe la ruta, rechaza la promesa
  //   //reject con mensaje de "la ruta no existe"
  //   resolve(arrayLinks)
  // })
}

// const testMdLinks = mdLinks('./DEV002-md-links/files/first-file.md');
// testMdLinks.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});

mdLinks('./files')
module.exports = {
  mdLinks
};
