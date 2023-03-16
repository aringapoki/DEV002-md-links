const process = require('process');
const { pathValidate } = require("./functions/utils")
const { mdLinks } = require('./index');

// console.log(process.argv)

const entryPath = process.argv[2]
const firstOpt = process.argv[3]
const secondOpt = process.argv[4]

if (entryPath === undefined || pathValidate(entryPath) === false) {
    throw new Error('el path ingresado no es válido')
} else {    
    if (!firstOpt && !secondOpt) {
        console.log('aca debería devolver array de promesas sin request de axios')
        mdLinks(entryPath).then(resp=>console.log(resp))
    }
    else if (firstOpt === '--stats' && !secondOpt) {
        console.log('acá debería devolver el array de promesas con stats')
        mdLinks(entryPath, true, false ).then(resp=>console.log(resp))
    }
    else if (firstOpt === '--validate' && !secondOpt) {
        console.log('acá debería devolver el array de promesas con validate')
        mdLinks(entryPath, true, false ).then(resp=>console.log(resp))        
    }
    else if (firstOpt === '--stats' && secondOpt === '--validate' || firstOpt === '--validate' && secondOpt === '--stats') {
        console.log('array con stats y validate')
        mdLinks(entryPath, true, true ).then(resp=>console.log(resp))    
    }
    else if ((firstOpt !== '--options' && firstOpt !== '--validate') || (secondOpt !== '--options' && secondOpt !== '--validate')) {
        console.log('algún parámetro no es válido)')
    }
}


module.exports = {

};