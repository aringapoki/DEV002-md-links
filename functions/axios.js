const axios = require('axios')
const { httpRequest } = require('./utils')



// httpRequest = (url) => {axios.get(url).then(resp => {
//     const arrayLinks = []
//     arrayLinks.push({
//         status: resp.status,
//         ok: resp.statusText
//     })    
//     console.log(arrayLinks)
// });
// }

const httpRequest = (url) => axios.get(url)
// const httpRequest = (url) => axios.get(url).then(resp => resp )

httpRequest('http://webcode.me')