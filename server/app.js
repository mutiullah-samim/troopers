const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')


const app = express()
app.use(express.json())

require('./routes')(app)

app.listen(config.port, () => {
	console.log(`Server is running on port ${config.port}`)
})