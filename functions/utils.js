const path = require('path')
const fs = require('fs')

const isAnAbsolutePath = (entryPath) => path.isAbsolute(entryPath);
if(isAnAbsolutePath('./files')){
    console.log('es un path absoluto')
}
else {
    //ejecutar función para hacerla absoluta
    console.log('es un path relativo')
}
