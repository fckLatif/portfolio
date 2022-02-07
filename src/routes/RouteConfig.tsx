import Home from './Home';
import Contact from './contact/Contact';
import About from './About';
import PageNotFound from './PageNotFound';
import SignIn from './SignIn';
import AdminHome from './admin/AdminHome';
import SignOut from './SignOut';
import AdminCreate from './admin/AdminCreate';
import ProjectsOverview from './projects/ProjectsOverview';
import AdminEdit from './admin/AdminEdit'

import { Navigate } from 'react-router-dom';

const RouteConfig = ({ isAuth }: {
	isAuth: any;
}) => [
		{
			path: '/',
			element: <Home />
		},
		{
			path: '/about',
			element: <About />
		},
		{
			path: '/projects',
			children: [
				{
					index: true,
					element: <ProjectsOverview />
				},
				{
					path: ':id',
				}
			]
		},
		{
			path: '/contact',
			element: <Contact />
		},
		{
			path: '/signin',
			element: isAuth ? <Navigate to='/admin' /> : <SignIn />
		},
		{
			path: '/signout',
			element: isAuth ? <SignOut /> : <Navigate to='/signin' />
		},
		{
			path: '*',
			element: <PageNotFound />
		},
		{
			path: '/admin/',
			children: [
				{
					index: true,
					element: isAuth ? <AdminHome /> : <Navigate to='/signin' />
				},
				{
					path: 'create',
					element: isAuth ? <AdminCreate /> : <Navigate to='/signin' />
				},
				{
					path: 'edit/:id',
					element: isAuth ? <AdminEdit /> : <Navigate to='/signin' />
				}
			]
		}
	];

export default RouteConfig