const axios = require('axios')
//const { httpRequest } = require('./utils')



// httpRequest = (url) => {axios.get(url).then(resp => {
//     const arrayLinks = []
//     arrayLinks.push({
//         status: resp.status,
//         ok: resp.statusText
//     })    
//     console.log(arrayLinks)
// });
// }

//const httpRequest = (url) => axios.get(url)

//pasar otro parámetro que refiera al objeto de links ya creado, para poder modificarlo o recrearlo
//ese objeto es el primer array de promesas
//vaciar arrayLinks y reemplazar por el objeto recreado, retornar el nuevo array
const httpRequest = (url) => axios.get(url).then(resp => resp )

console.log(httpRequest('http://webcode.me'))