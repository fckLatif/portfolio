import Home from './Home';
import Contact from './Contact';
import About from './About';
import Projects from './Projects'
import PageNotFound from './PageNotFound';

let RouteConfig = [
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
			}
		],
	},
	{
		path: '*',
		element: <PageNotFound />
	}
];

export default RouteConfig