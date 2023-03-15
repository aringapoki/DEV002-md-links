const { getFiles, getArrayLinks, httpRequest, pathValidate } = require("./functions/utils");
const { results } = require('./cli')

const mdLinks = (entryPath, options) => {

    //const entryPath = process.argv[2]
    //console.log('entry path', entryPath)    
    const existsPath = pathValidate(entryPath)
    // console.log(existsPath)
    const arrayLinks = []

    return new Promise((resolve, reject) => {

        if (existsPath === false) {
            console.log('el path ingresado no es válido')
        }
        else {
            const arrayFiles = getFiles(entryPath);
            if (arrayFiles.length === 0) {
                console.log('empty')
            } else {
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
                    //almacenar las promesas que se están creando con Promise.all -> juntar ambas
                    console.log(promisesArray)
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
            }
        }
        //resolve(httpRequest('http://webcode.me'))
    })
}

// const testMdLinks = mdLinks('./DEV002-md-links/files/first-file.md');
// testMdLinks.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});

//mdLinks('./functions')
module.exports = {
    mdLinks
};