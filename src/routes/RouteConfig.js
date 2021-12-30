import Home from './Home';
import Contact from './Contact';
import About from './About';

let RouteConfig = [
	{
		path: "/",
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "/about",
				element: <About />
			},
			{
				path: "/contact",
				element: <Contact />
			}
		]
	}
];

export default RouteConfig