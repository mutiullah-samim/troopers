const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = function (req, res, next) {

	const authHeader = req.get('authorization')

	if (authHeader) {
		const token = authHeader.split(' ')[1];
		jwt.verify(token, config.authentication.jwtSecret, function (err, decoded) {
			if (err) {
				return res.status(403).json({
					status: false,
					error: 'Access denied',
					data: null
				});
			} else {
				req.user = decoded;
				next();
			}
		});
	} else {
		return res.status(401).json({
			status: false,
			error: 'Authorization token is required',
			data: null
		});
	}

}