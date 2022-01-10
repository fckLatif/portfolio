import Home from './Home';
import Contact from './Contact';
import About from './About';
import Projects from './Projects'
import PageNotFound from './PageNotFound';
import SignIn from './SignIn';
import Admin from './Admin';
import SignOut from './SignOut';

import { Navigate } from 'react-router-dom';

const RouteConfig = ({ isAuth }: {
	isAuth: boolean;
}) => [
		{
			path: '/',
			children: [
				{
					index: true,
					element: <Home />
				},
				{
					path: '/about',
					element: <About />
				},
				{
					path: '/projects',
					element: <Projects />
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
			],
		},
		{
			path: '*',
			element: <PageNotFound />
		},
		{
			path: 'admin',
			children: [
				{
					index: true,
					element: isAuth ? <Admin /> : <Navigate to='/signin' />,
				}
			]
		}
	];

export default RouteConfig