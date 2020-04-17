import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
import Login from '@/components/Login'
import UpdateProfile from '@/components/UpdateProfile'
import Profile from '@/components/Profile'
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
		path: '/update-profile',
		name: 'update-profile',
		component: UpdateProfile
	},
	{
		path: '/profile',
		name: 'profile',
		component: Profile
	},
	{
		path: '*',
		component: NotFound
	}
]