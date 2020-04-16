module.exports = {

	db: {
		database: 'troopers_assesment',
		user: 'root',
		password: '',
	},
	port: process.env.PORT || 3000,
	authentication: {
		jwtSecret: 'troopers123'
	}

}