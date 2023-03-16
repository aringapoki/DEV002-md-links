const { getFiles, getArrayLinks, httpRequest, pathValidate, getStats } = require("./functions/utils");

const mdLinks = (entryPath, firstOpt = false, secondOpt = false) => {
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

            //guardar este promise all en una variable y ejecutar después dentro de if(shoulValidate/showStats)
            Promise.all(arrayFilesPromises).then(response => {
               response.forEach(element => {
                  arrayLinks.push(...element)
               })
               
               if (shouldValidate) {                                    
                  const promisesArray = arrayLinks.map(element => {
                     return httpRequest(element.link)
                  })
                  const validatedLinksArray = []

                  Promise.all(promisesArray).then(res => {                     
                     res.forEach((element, i) => {
                        validatedLinksArray.push({
                           ...arrayLinks[i],
                           statusCode: element.status,
                           statusText: element.statusText,
                           link: element.request.res.responseUrl
                        })
                     })
                     return validatedLinksArray
                     // if (showStats) {
                     //    resolve(getStats(validatedLinksArray))
                     // }
                  })

               } else {
                  //este resolve es para opt1 y opt2 false
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