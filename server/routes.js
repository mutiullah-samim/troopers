const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const UserController = require('./controllers/UserController')
const UserControllerPolicy = require('./policies/UserControllerPolicy')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
	app.post('/register',
		AuthenticationPolicy.register,
		AuthenticationController.register)
	app.post('/login',
		AuthenticationPolicy.login,
		AuthenticationController.login)
	app.post('/update-profile',
		[isAuthenticated, UserControllerPolicy.updateProfile],
		UserController.updateProfile)
	app.get('/profile',
		isAuthenticated,
		UserController.profile)
	app.get('/users',
		isAuthenticated,
		UserController.getUsers)



}