const deleteEmpetyElement = (array) => {
  return array.filter(el => el != null)
}
const deleteEmpetyLinesElement = (array) => {
  return array.filter(el => el.lines.length !== 0)
}
const filterByFileName = (array, files, fileName) => {
  console.log(files)
  console.log(fileName)
  const filteredFiles =
    !files.includes(fileName)
      ? array
      : array.filter((file) => file.file === fileName)

  return filteredFiles
}
module.exports = { deleteEmpetyElement, deleteEmpetyLinesElement, filterByFileName }
