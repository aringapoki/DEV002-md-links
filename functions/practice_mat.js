const path = require('path')
const fs = require('fs')

// const fileRoute = path.resolve('./files/first-file.md')
// console.log('file route: ', fileRoute)

// const readFile = (entryPath) => fs.readFileSync(entryPath, 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('contenido archivo readFile: ', data)
//     return data
// })

// const gettingLinks = (entryPath) => {
//     readFile(entryPath)
//         .then((data) => {
//             const regExp = /\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+[a-zA-Z0-9!-_$]+)\)/gi;
//             const regExpMatch = regExp.exec(data)
//             console.log('regExp Match: ', regExpMatch)
//         })
//         .catch(err) 
//     // console.log('expresión regular: ', typeof regExp);
//     // console.log('regExp Match: ', regExpMatch)
//    // console.log('md content: ', mdContent)
// }

// console.log('getting links: ', gettingLinks(fileRoute))

const regExp = /\[([^\[]+)\](\(.*\))/gm;
//const regExp = /^\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/gm
const file = path.resolve('./files/first-file.md')
const content = fs.readFileSync(file, 'utf8').toString()
// console.log({content})
const getLinks = content.match(regExp);
const arrayContent = [];

if (getLinks !== null){        
    getLinks.forEach(element => {
        //console.log({element})
        // const links = regExp.exec(element)
        // console.log('links: ', links)       
        arrayContent.push(element)        
        // return arrayContent
        
    });
    // console.log('getLinks: ', getLinks)
     console.log('array content:', arrayContent)     
    
};



