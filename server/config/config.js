module.exports = {

	db: {
		host: 'sql7.freemysqlhosting.net',
		database: 'sql7334087',
		user: 'sql7334087',
		password: 'Pn6v7c5khr',
		port: 3306
	},
	port: process.env.PORT || 3000,
	authentication: {
		jwtSecret: 'troopers123'
	}

}