var mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const db = require('../config/db')



function hashPassword(password) {
	const saltRounds = 8;
	const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(password, salt);
	return hash;
}

function jwtSignUser(user) {
	const expires = 60 * 60 * 24 * 7 // 7 days
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: expires
	})
}


module.exports = {

	register(req, res) {

		const email = req.body.email

		//check if email already exists
		db.query(`SELECT * FROM users WHERE email='${email}' LIMIT 1`, function (error, result) {
			if (error) throw error;

			if (result.length > 0) {

				//email is taken
				return res.json({
					status: false,
					error: 'This email is already registered',
					data: null
				});

			} else {

				//hash the password for storing in db
				const password = hashPassword(req.body.password)

				var CURRENT_TIMESTAMP = {
					toSqlString: function () {
						return 'CURRENT_TIMESTAMP()';
					}
				};
				//create the user
				db.query('INSERT INTO users SET ?', {
					email: email,
					password: password,
					created_at: CURRENT_TIMESTAMP,
					updated_at: CURRENT_TIMESTAMP,
				}, function (error, result2) {
					if (error) throw error;

					//get the registered user id
					const last_insert_id = result2.insertId

					//get the registered user info and generate jwt token for user
					db.query(`SELECT id,email FROM users WHERE id=${last_insert_id} LIMIT 1`, function (error, result3) {
						if (error) throw error;
						const user_object = {
							id: result3[0].id,
							email: result3[0].email,
						}

						return res.json({
							status: true,
							error: null,
							data: result3,
							token: jwtSignUser(user_object)
						})

					})
				})
			}

		});




	},

}