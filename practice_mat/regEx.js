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
//const getArrayLinks = (file) => {
const regExp = /\[([^\[]+)\](\(.*\))/gm;
//const regExp = /^\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/gm
const file = path.resolve('./files/first-file.md')
console.log('file: ', file)
const content = fs.readFileSync(file, 'utf8').toString()
// console.log({content})
const getLinks = content.match(regExp);
//const arrayContent = [];
const linksArray = []

if (getLinks !== null) {
    getLinks.forEach(element => {
        const links = element.split(']')
        //console.log(element)
        // links = regExp.exec(element)
        // const urls = links[0]        
        linksArray.push({
            href: links[1],
            text: links[0]
        })
        //console.log(links)
        // return arrayContent        
    });
    // console.log('array content:', arrayContent)
    console.log('links array: ', linksArray)

};
//}
// const markdownText = 'Este es un [enlace](https://www.ejemplo.com) en un archivo Markdown.';

// const regex = /\[(.*?)\]\((.*?)\)/g;

// let match;
// while (match = regex.exec(markdownText)) {
//   const linkText = match[1];
//   const linkUrl = match[2];

//   console.log(`Encontrado enlace: ${linkText} -> ${linkUrl}`);
// }

// const gettingLinks = (file) => {
//     const regExp = /\[([^\[]+)\](\(.*\))/gm;
//     const filePath = path.resolve(file)
//     const content = fs.readFileSync(filePath, 'utf8').toString()
//     const getLinks = content.match(regExp)
//     const linksArray = []

//     if (getLinks !== null) {
//         getLinks.forEach(element => {
//             const links = element.split(']')
//             linksArray.push({
//                 href: links[1],
//                 text: links[0]
//             })
//         })
//         console.log(linksArray)
//     }
//     return linksArray
// }

// gettingLinks('first-file.md')

module.exports = {
    //getArrayLinks
}