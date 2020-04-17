const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const config = require('./config/config')


const app = express()
app.use(express.json())
app.use(cors())

require('./routes')(app)

// check if environment is production
if (process.env.NODE_ENV === 'production') {

	app.use(express.static(__dirname + '/public/'));

	// this line is needed for handling single page application
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.listen(config.port, () => {
	console.log(`Server is running on port ${config.port}`)
})