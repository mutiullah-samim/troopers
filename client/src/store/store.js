import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		token: null,
		isLoggedIn: false
	},
	mutations: {
		setToken(state, token) {
			state.token = token
			state.isLoggedIn = state.token !== null ? true : false
		},
	},
	actions: {
		setToken({
			commit
		}, token) {
			commit('setToken', token)
		}
	}
})