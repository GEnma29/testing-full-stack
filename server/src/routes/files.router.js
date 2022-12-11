const express = require('express')

const FilesServices = require('./../services/files.services')

const router = express.Router()
const service = new FilesServices()

router.get('/data', async (req, res) => {
  const { fileName } = req.query
  const files = await service.find({ fileName })
  res.json(files)
})

module.exports = router
