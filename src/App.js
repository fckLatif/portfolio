import React, {
	useState
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import useThemeSwitch from './hooks/useThemeSwitch'
import { useRoutes } from 'react-router-dom';

import RouteConfig from './routes/RouteConfig';

import {
	mainTheme,
	altTheme
} from './components/Themes/Theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styled/GlobalStyle';
import NavBar from './components/Navigation/NavBar.js'
import { StyledSection } from "./components/styled/StyledSection";
import './fontawesome';

import {
	themeContext,
	authContext
} from './context';

const App = () => {
	const [theme, toggleTheme, componentMounted] = useThemeSwitch();
	const themeMode = theme === 'main' ? mainTheme : altTheme;
	const [user, setUser] = useState({});
	let isAuth = false;

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	if (!user?.email) {
		isAuth = false;
	} else if (user?.email) {
		isAuth = true;
	};

	const routing = useRoutes(RouteConfig({ isAuth }));

	return !componentMounted
		? <div />
		: (
			<>
				<themeContext.Provider value={{ theme, toggleTheme }}>
					<ThemeProvider theme={themeMode}>
						<authContext.Provider value={{ isAuth }}>
							<GlobalStyle />
							<StyledSection>
								<NavBar mobile={false} />
								{routing}
							</StyledSection>
							<NavBar mobile={true} />
						</authContext.Provider>
					</ThemeProvider>
				</themeContext.Provider>
			</>
		);
}

export default App;