// const path = require('path')
// const fs = require('fs')

// // //transformando ruta relativa a absoluta
// // let route = path.resolve('./files')
// // console.log('route: ', route)

// // //función para validar path
// // const pathValidate = (entryPath) => fs.existsSync(entryPath)
// // console.log('pathValidate: ', pathValidate('./files'))

// //guardar ruta de archivo
// let fileRoute = path.resolve('./files/first-file.md')

// // //leyendo directorio
// // console.log('readdirSync:', fs.readdirSync(route, 'utf8'))


// //leyendo contenido de archivo
// const fileContent = (entryPath) => fs.readFile(entryPath, 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log('contenido archivo readFile: ', data)
// })

// const mdContent = (entryPath) => fileContent(fileRoute)

// //console.log(mdContent)
// // const readFile = (entryPath) => {
// //     console.log('entryPath: ', entryPath)
// // }

// // readFile(route);

// // const regExp = /\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+[a-zA-Z0-9!-_$]+)\)/gi;
// // console.log('expresión regular: ', typeof regExp);
// // console.log('regExp método: ', regExp.exec(mdContent))