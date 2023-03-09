const path = require('path')
const fs = require('fs')

//transformando ruta relativa a absoluta
let route = path.resolve('./files')
console.log('route: ', route)

//función para validar path
const pathValidate = (entryPath) => fs.existsSync(entryPath)
console.log('pathValidate: ', pathValidate('./files'))

//guardar ruta de archivo
let fileRoute = path.resolve('./files/first-file.md')

//leyendo directorio
console.log('readdirSync:', fs.readdirSync(route, 'utf8'))


//leyendo contenido de archivo
fs.readFile(fileRoute, 'utf8', (err, data) => {
    if(err) throw err;
    console.log('contenido archivo readFile: ', data)
})

const readFile = (entryPath) => {
    console.log('entryPath: ', entryPath)
}

readFile(route);
