import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import routes from './routes/index'
import VueRouter from 'vue-router'
import store from '@/store/store'

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: 'history'
})


new Vue({
	vuetify,
	router: router,
	store,
	render: h => h(App)
}).$mount('#app')