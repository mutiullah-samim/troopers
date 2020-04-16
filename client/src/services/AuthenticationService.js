import Api from './Api'

export default {
	register(credentials) {
		return Api().post('/register', credentials)
	},
	login(credentials) {
		return Api().post('/login', credentials)
	},
	updateProfile(credentials) {
		return Api().post('/update-profile', credentials)
	},

}