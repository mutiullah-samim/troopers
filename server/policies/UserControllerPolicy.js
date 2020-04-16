const Joi = require('@hapi/joi')

module.exports = {
	updateProfile(req, res, next) {

		// create request schema for validation
		const schema = Joi.object({
			first_name: Joi.string().required(),
			last_name: Joi.string().required(),
			dob: Joi.string().required(),
			phone: Joi.string().required(),
			address: Joi.string().required(),
		})

		//validate the request schema
		const {
			error
		} = schema.validate(req.body)

		// if validation fails send error message
		if (error) {
			return res.json({
				status: false,
				error: 'All fields are required',
				data: null
			})
		} else {
			// everything is good and proceed
			next()
		}
	},

}