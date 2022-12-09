const { getLines } = require('../models/files.models')
const { deleteEmpetyElement } = require('../utils/clean-array.utils')
const adapterLines = require('./lines-adapters')

const adarterFileInfo = async (file) => {
  const data = await getLines(file)
  const linesElements = adapterLines(data?.data || '')
  return {
    file,
    lines: deleteEmpetyElement(linesElements)
  }
}
module.exports = adarterFileInfo
