const { getFiles, getArrayLinks, httpRequest, pathValidate, getStats } = require("./functions/utils");

const mdLinks = (entryPath, showStats = false, shouldValidate = false) => {
   const existsPath = pathValidate(entryPath)
   const arrayLinks = []

   return new Promise((resolve, reject) => {
      if (existsPath === false) {
         console.log('el path ingresado no es válido')
      }
      else {
         const arrayFiles = getFiles(entryPath);
         if (arrayFiles.length === 0) {
            reject('empty')
         } else {
            const arrayFilesPromises = arrayFiles.map((element) => getArrayLinks(element))

            Promise.all(arrayFilesPromises).then(response => {
               response.forEach(element => {
                  arrayLinks.push(...element)
               })

               if (shouldValidate) {
                  const validatedLinksArray = []
                  const promisesArray = arrayLinks.map(element => {
                     return httpRequest(element.link)
                  })

                  Promise.all(promisesArray).then(res => {
                     return res.forEach((element, i) => {
                        validatedLinksArray.push({
                           ...arrayLinks[i],
                           statusCode: element.status,
                           statusText: element.statusText,
                           link: element.request.res.responseUrl
                        })
                        resolve(validatedLinksArray)
                        if(showStats){

                        }
                     })
                  })

               } else {
                  resolve(arrayLinks)
               }

            })
         }
      }
   })
}

module.exports = {
   mdLinks
};