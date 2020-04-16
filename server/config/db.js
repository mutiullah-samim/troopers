const mysql = require('mysql');
const config = require('./config')
const connection = mysql.createConnection(config.db)

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
});

module.exports = connection