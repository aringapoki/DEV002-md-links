const { getFiles, getArrayLinks, httpRequest } = require("./functions/utils");

const mdLinks = (entryPath, options) => {

    const arrayFiles = getFiles(entryPath);
    const arrayLinks = []

    // if (arrayFiles) {
    //     arrayFiles.forEach(file => {
    //         const links = getArrayLinks(file)
    //         arrayLinks.push(links)
    //     });
    // }

    //console.log('array links: ', arrayLinks)

    return new Promise((resolve, reject)=>{    
        if(arrayFiles.length === 0){
            reject('empty')
        }

        arrayFiles.forEach(file => {
            const links = getArrayLinks(file)
            arrayLinks.push(links)
        })
        const promisesArray = arrayLinks.map(element => {                        
            return httpRequest(element.link)
        })        
        console.log(promisesArray)
        const linksArray = []
        Promise.all(promisesArray).then(res => {
            return res.forEach(element => {
                console.log(element)
            })
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
