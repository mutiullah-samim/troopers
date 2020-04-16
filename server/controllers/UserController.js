var mysql = require('mysql');
const db = require('../config/db')

module.exports = {

	updateProfile(req, res) {

		const user = req.user

		const firstName = req.body.first_name
		const lastName = req.body.last_name
		const dob = req.body.dob
		const phone = req.body.phone
		const address = req.body.address

		//check if user has a profile
		db.query(`SELECT * FROM user_profile WHERE user_id=${user.id} LIMIT 1`, function (error, result) {
			if (error) throw error;

			if (result.length > 0) {
				//user already have profile, so update the user profile
				db.query('UPDATE user_profile SET first_name = ?, last_name = ?, dob = ?, phone= ?, address= ?  WHERE user_id = ?', [firstName, lastName, dob, phone, address, user.id], function (error, result2) {
					if (error) throw error;
					return res.json({
						status: true,
						error: null,
						message: 'Profile updated',
						data: null
					});

				});

			} else {
				// create profile for user
				db.query('INSERT INTO user_profile SET ?', {
					user_id: user.id,
					first_name: firstName,
					last_name: lastName,
					dob: dob,
					phone: phone,
					address: address,
				}, function (error, result2) {
					if (error) throw error;
					return res.json({
						status: true,
						error: null,
						message: 'Profile created',
						data: null
					});
				})
			}

		})
	}

}