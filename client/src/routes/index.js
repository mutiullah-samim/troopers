import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
import Login from '@/components/Login'
import UpdateProfile from '@/components/UpdateProfile'
import Profile from '@/components/Profile'
import Users from '@/components/Users'
import store from '@/store/store'

const ifNotLogedIn = (to, from, next) => {
	if (!store.state.isLoggedIn) {
		next()
		return
	}
	next('/profile')
}

const ifLogedIn = (to, from, next) => {
	if (store.state.isLoggedIn) {
		next()
		return
	}
	next('/login')
}

export default [{
		path: '/register',
		name: 'register',
		component: Register,
		beforeEnter: ifNotLogedIn,
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		beforeEnter: ifNotLogedIn,
	},
	{
		path: '/update-profile',
		name: 'update-profile',
		component: UpdateProfile,
		beforeEnter: ifLogedIn,
	},
	{
		path: '/profile',
		name: 'profile',
		component: Profile,
		beforeEnter: ifLogedIn,
	},
	{
		path: '/users',
		name: 'users',
		component: Users,
		beforeEnter: ifLogedIn,
	},
	{
		path: '*',
		component: NotFound
	}
]