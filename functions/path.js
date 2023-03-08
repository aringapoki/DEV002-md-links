const path = require('path')
const fs = require('fs')

let route = path.resolve('./files')
console.log('route: ', route)

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
