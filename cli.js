const process = require('process');
const { mdLinks } = require('./index2');

// console.log(process.argv)

const entryPath = process.argv[2]
//console.log('entry path', entryPath)

if (entryPath === undefined) {
    throw new Error('ingresa un path')
} else {
    if (!process.argv[3] && !process[4]) {
        console.log('aca debería devolver array de promesas sin request de axios')
        mdLinks(entryPath)
    }
    if (process.argv[3] === '--options' && !process.argv[4]) {
        console.log('acá debería devolver el array de promesas con options')
    }
    if (process.argv[3] === '--validate' && !process.argv[4]) {
        console.log('acá debería devolver el array de promesas con validate')
    }
    if (process.argv[3] === '--options' && process.argv[4] === '--validate' || process.argv[4] === '--options' && process.argv[3] === '--validate') {
        console.log('array con options y validate')
    }
    if ((process.argv[3] !== '--options' && process.argv[3] !== '--validate') || (process.argv[4] !== '--options' && process.argv[4] !== '--validate')) {
        console.log('reject(algún parámetro no es válido)')
    }
    //falta agregar si algún parámetro no es válido
}


module.exports = {

};