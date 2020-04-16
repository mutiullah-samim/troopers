var mysql = require('mysql');
const bcrypt = require('bcrypt');
const db = require('../config/db')



function hashPassword(password) {
	const saltRounds = 8;
	const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(password, salt);
	return hash;
}



module.exports = {

	register(req, res) {

		const email = req.body.email

		//check if email already exists
		db.query(`SELECT * FROM users WHERE email='${email}' LIMIT 1`, function (error, results) {
			if (error) throw error;

			if (results.length > 0) {

				//email is taken
				return res.json({
					status: false,
					error: 'This email is already registered',
					data: null
				});

			} else {

				//hash the password for storing in db
				const password = hashPassword(req.body.password)

				//create the user
				db.query('INSERT INTO users SET ?', {
					email: email,
					password: password
				}, function (error, results) {
					if (error) throw error;
					res.json({
						status: true,
						error: null,
						data: null
					})
				})
			}

		});




	},

}