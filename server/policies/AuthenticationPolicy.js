const Joi = require('@hapi/joi')

module.exports = {
	register(req, res, next) {

		// create request schema for validation
		const schema = Joi.object().keys({
				email: Joi.string().required().email(),
				password: Joi.string().required().pattern(
					new RegExp('^[a-zA-Z0-9]{6,32}$')
				),
				confirm_password: Joi.ref('password')
			})
			.with('password', 'confirm_password');

		//validate the request schema
		const {
			error
		} = schema.validate(req.body)

		// if validation fails send error message
		if (error) {
			switch (error.details[0].context.key) {
				case 'email':
					return res.json({
						status: false,
						error: 'Please provide a valid email address',
						data: null
					})
					break
				case 'password':
					return res.json({
						status: false,
						error: 'The password should be atleast 6 characters and not greater than 32 characters ',
						data: null
					})
					break
				case 'confirm_password':
					return res.json({
						status: false,
						error: 'Password and confirm password do not match',
						data: null
					})
					break
				default:
					return res.json({
						status: false,
						error: 'Invalid registration information',
						data: null
					})
			}
		} else {

			// everything is good and proceed
			next()
		}
	},
	login(req, res, next) {

		// create request schema for validation
		const schema = Joi.object({
			email: Joi.string().required(),
			password: Joi.string().required(),

		})

		//validate the request schema
		const {
			error
		} = schema.validate(req.body)

		// if validation fails send error message
		if (error) {
			switch (error.details[0].context.key) {
				case 'email':
					return res.json({
						status: false,
						error: 'Email is required',
						data: null
					})
					break
				case 'password':
					return res.json({
						status: false,
						error: 'Password is required',
						data: null
					})
					break
				default:
					return res.json({
						status: false,
						error: 'Email and password are required',
						data: null
					})
			}
		} else {
			// everything is good and proceed
			next()
		}

	},
}