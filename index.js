const mdLinks = (entryPath, options) => {  
  //crear promesa que retorna la función mdLinks
  return new Promise((resolve, reject)=>{    
    //identificar si la ruta existe
    //si no existe la ruta, rechaza la promesa
    //reject con mensaje de "la ruta no existe"
    resolve(entryPath)
  })
}

const testMdLinks = mdLinks('C:\Users\Usuario\Desktop\Laboratoria\DEV002-md-links\files\first-file.md');
testMdLinks.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});

module.exports = {
  mdLinks
};
