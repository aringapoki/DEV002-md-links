const { getFiles, getArrayLinks, httpRequest } = require("./functions/utils");

const mdLinks = (entryPath, options) => {

    const arrayFiles = getFiles(entryPath);
    const arrayLinks = []


    return new Promise((resolve, reject) => {
        if (arrayFiles.length === 0) {
            reject('empty')
        }

        const arrayFilesPromises = arrayFiles.map((element) => getArrayLinks(element))
        //console.log(arrayFilesPromises)
        Promise.all(arrayFilesPromises).then(response => {
            response.forEach(element => {
                //console.log(element)
                arrayLinks.push(...element)
            })
            const promisesArray = arrayLinks.map(element => {
                return httpRequest(element.link)
            })
            //concatenar
            //almacenar las promesas que se están creando con Promise.all -> juntar ambas respuestas
            //console.log(promisesArray)
            Promise.all(promisesArray).then(res => {
                return res.forEach((element, i) => {
                    console.log({
                        statusCode: element.status,
                        statusText: element.statusText,
                        link: element.request.res.responseUrl
                    })
                })
            })
            console.log(arrayLinks)
        })


        //resolve(httpRequest('http://webcode.me'))
    })
}

// const testMdLinks = mdLinks('./DEV002-md-links/files/first-file.md');
// testMdLinks.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});

mdLinks('./files')
module.exports = {
    mdLinks
};