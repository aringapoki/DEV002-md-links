const path = require('path')
const fs = require('fs')

//acá debería desarrollar las funciones, manejar condicionales y errores

//función para validar que existe el path, devuelve true o false
const pathValidate = (entryPath) => fs.existsSync(entryPath)
//console.log('pathValidate: ', pathValidate('./files'))

//función para saber si la ruta es absoluta, devuelve true o false
const isAnAbsolutePath = (entryPath) => path.isAbsolute(entryPath);
//console.log('isAnAbsolutePath: ', isAnAbsolutePath('./files'))

//función para hacer absoluta una ruta relativa
const pathResolve = (entryPath) => path.resolve(entryPath)
//console.log('pathResolve: ', pathResolve('./files'))
const getAbsolutePath = (entryPath) => {
    if(isAnAbsolutePath(entryPath) == true){
        return entryPath
    } else {
        return pathResolve(entryPath)
    }
}
//función para saber si es un directorio, devuelve true o false
const isDirectory = (entryPath) => {
    const stats = fs.statSync(entryPath);
    return stats.isDirectory()
}
//console.log('isDirectory: ', isDirectory('./files/first-file.md'))

//función para saber si es un archivo, devuelve true o false
const isFile = (entryPath) => {
    const stats = fs.statSync(entryPath);
    return stats.isFile()
}
//console.log('isFile: ', isFile('./files/first-file.md'))

//función para obtener la extensión
const getExtFile = (entryPath) => path.extname(entryPath)
//console.log('getExtFile: ', getExtFile('./files/first-file.md'))

//función para leer un directorio, devuelve un array de archivos
const readDir = (entryPath) => fs.readdirSync(entryPath, 'utf8')
//console.log('readDir: ', readDir('./files') )

const getFiles = (entryPath) => {
    if (pathValidate(entryPath) == false) {
        return console.log('not a valid path')
    } else {
        const absPath = getAbsolutePath(entryPath);
        const arrayFiles = []

        if (isDirectory(absPath) == true) {            
            arrayFiles.push(readDir(absPath))
        }
        else if (isFile(absPath) == true) {
            if(getExtFile(absPath) === '.md')
            arrayFiles.push(path.basename(absPath));
        }
        else {
            return console.log('error')
        }
        return arrayFiles
    }
}


// función para leer el contenido del archivo
//const readFile = (entryPath) => fs.readFile(entryPath, 'utf8', (err, data) => {
//     if(err) throw err;
// //     console.log('contenido archivo readFile: ', data)
// })
//console.log('readFile: ', readFile('./files/first-file.md'));

module.exports = {
    pathValidate,
    isAnAbsolutePath,
    getAbsolutePath,
    pathResolve,
    isDirectory,
    isFile,
    readDir,    
    getExtFile,
    // readFile,
    getFiles
  };

// if(isAnAbsolutePath('./files')){
//     console.log('es un path absoluto')
// }
// else {
//     pathResolve('./files')
//     console.log('es un path relativo')
// }
