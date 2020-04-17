import Api from './Api'

export default {
	updateProfile(credentials) {
		return Api().post('/update-profile', credentials)
	},
	profile() {
		return Api().get('/profile')
	},
	users() {
		return Api().get('/users')
	},

}