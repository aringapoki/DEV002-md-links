const axios = require('axios');

const httpRequest = (url) => axios.get(url)

httpRequest('https://es.wikipedia.org/wiki/Markdown').status

