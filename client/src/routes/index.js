import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
export default [{
		path: '/register',
		name: 'register',
		component: Register
	},

	{
		path: '*',
		component: NotFound
	}
]