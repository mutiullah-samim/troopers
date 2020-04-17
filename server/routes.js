const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const UserController = require('./controllers/UserController')
const UserControllerPolicy = require('./policies/UserControllerPolicy')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
	app.post('/api/register',
		AuthenticationPolicy.register,
		AuthenticationController.register)
	app.post('/api/login',
		AuthenticationPolicy.login,
		AuthenticationController.login)
	app.post('/api/update-profile',
		[isAuthenticated, UserControllerPolicy.updateProfile],
		UserController.updateProfile)
	app.get('/api/profile',
		isAuthenticated,
		UserController.profile)
	app.get('/api/users',
		isAuthenticated,
		UserController.getUsers)



}