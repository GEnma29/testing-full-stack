const express = require('express')
const cors = require('cors')
const v1FilesRouter = require('./routes/files.router')

const app = express()
const port = 3000

app.use(cors({
  origin: '*'
}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('api test v1 ')
})

app.use('/files', v1FilesRouter)

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})

module.exports = app
