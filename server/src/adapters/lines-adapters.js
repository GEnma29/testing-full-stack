const createElement = require('./create-element-line')

const adapterLines = (string) => {
  const splitData = string.split('\n')
  const deleteFirstElement = splitData.slice(1, splitData.length)
  return deleteFirstElement.map((element) => {
    const arrayElement = element.split(',')
    return arrayElement.length > 3 ? createElement(arrayElement) : null
  })
}
module.exports = adapterLines
