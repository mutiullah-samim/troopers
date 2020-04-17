import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	plugins: [createPersistedState()],
	state: {
		token: null,
		isLoggedIn: false,
		registerRedirect: false
	},
	mutations: {
		setToken(state, token) {
			state.token = token
			state.isLoggedIn = state.token !== null ? true : false
		},
		setRegisterRedirect(state, registerRedirect) {
			state.registerRedirect = registerRedirect
		}
	},
	actions: {
		setToken({
			commit
		}, token) {
			commit('setToken', token)
		},
		setRegisterRedirect({
			commit
		}, registerRedirect) {
			commit('setRegisterRedirect', registerRedirect)
		}
	}
})