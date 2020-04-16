import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
import Login from '@/components/Login'
export default [{
		path: '/register',
		name: 'register',
		component: Register
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '*',
		component: NotFound
	}
]