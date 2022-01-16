import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

setTimeout(() =>
	ReactDOM.render(
		<React.StrictMode>
			<Router>
				<App />
			</Router>
		</React.StrictMode>,
		document.getElementById('root')
	), 1250
);