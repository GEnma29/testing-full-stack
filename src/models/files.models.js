const { ExternalApi } = require('../api/files')

const getFiles = async () => {
  try {
    return await ExternalApi.get('secret/files')
  } catch (error) {
    console.error(error)
  }
}
const getLines = async (file) => {
  try {
    return await ExternalApi.get(`secret/file/${file}`)
  } catch (error) {
    console.error(error)
  }
}
module.exports = { getFiles, getLines }
