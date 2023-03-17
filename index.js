const {
  getFiles,
  getArrayLinks,
  httpRequest,
  getStats,
} = require("./functions/utils");
const process = require("process");

const firstOptStr = process.argv[3];
const secondOptStr = process.argv[4];

const mdLinks = (entryPath, firstOpt = undefined, secondOpt = undefined) => {
  const arrayLinks = [];

  return new Promise((resolve, reject) => {
    const arrayFiles = getFiles(entryPath);

    if (arrayFiles.length === 0) {
      throw new Error("no se encontraron archivos md");
    } else {
      const arrayFilesPromises = arrayFiles.map((element) =>
        getArrayLinks(element)
      );

      Promise.all(arrayFilesPromises).then((response) => {
        response.forEach((element) => {
          arrayLinks.push(...element);
        });

        const promisesArray = arrayLinks.map((element) => {
          return httpRequest(element.link);
        });

        //console.log('promises array: ', promisesArray)
        
          const validatedLinksArray = [];



          if (firstOpt === "--validate" && !secondOpt) {
            Promise.all(promisesArray).then((res) => {
              res.forEach((element, i) => {
                  validatedLinksArray.push({
                  ...arrayLinks[i],
                  statusCode: element.status,
                  statusText: element.statusText,
                  link: element.request.res.responseUrl,
                });
              });
              resolve(validatedLinksArray)
            });
            
          } else if (firstOpt === "--stats" && !secondOpt) {
            Promise.all(promisesArray).then((res) => {
              res.forEach((element, i) => {
                  validatedLinksArray.push({
                  ...arrayLinks[i],
                  statusCode: element.status,
                  statusText: element.statusText,
                  link: element.request.res.responseUrl,
                });
              });
              resolve(getStats(validatedLinksArray))
            });
            
          } else if (firstOpt === "--validate" && secondOpt === "--stats") {
            Promise.all(promisesArray).then((res) => {
              res.forEach((element, i) => {
                  validatedLinksArray.push({
                  ...arrayLinks[i],
                  statusCode: element.status,
                  statusText: element.statusText,
                  link: element.request.res.responseUrl,
                });
              });
              resolve(getStats(validatedLinksArray, true));
            });            
          }
         else {
          resolve(arrayLinks);
        }
      });
    }
  });
};

module.exports = {
  mdLinks,
};
