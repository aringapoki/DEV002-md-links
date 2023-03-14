const axios = require('axios')



httpRequest = (url) => {axios.get(url).then(resp => {
    const arrayLinks = []
    arrayLinks.push({
        status: resp.status,
        ok: resp.statusText
    })    
    console.log(arrayLinks)
});
}

httpRequest('http://webcode.me')