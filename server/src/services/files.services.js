const { getFiles } = require('../models/files.models')
const adarterFileInfo = require('../adapters/info-file.adapters')
const { deleteEmpetyLinesElement, filterByFileName } = require('../utils/clean-array.utils')

class FilesServices {
  constructor () {
    this.listOfFiles = []
  }

  async find ({ fileName }) {
    this.listOfFiles = []
    const { data: res } = await getFiles()
    const files = res?.files
    for (const file of files) {
      this.listOfFiles.push(await adarterFileInfo(file))
    }
    return filterByFileName(deleteEmpetyLinesElement(this.listOfFiles), files, fileName)
  }
}
module.exports = FilesServices
