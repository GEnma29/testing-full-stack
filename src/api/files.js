const axios = require('axios')

const ExternalApi = axios.create({
  baseURL: 'https://echo-serv.tbxnet.com/v1/',
  timeout: 5000,
  headers: {
    'X-Custom-Header': 'foobar',
    authorization: 'Bearer aSuperSecretKey'
  }
})

module.exports = { ExternalApi }
