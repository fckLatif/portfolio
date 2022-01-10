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
import NavBar from './components/Navigation/NavBar';
import { StyledSection } from "./components/styled/StyledSection";
import AuthContextProvider from './components/Providers/AuthContextProvider';
import ThemeContextProvider from './components/Providers/ThemeContextProvider';
import './fontawesome';


const App = () => {
	const [theme, toggleTheme, componentMounted] = useThemeSwitch();
	const themeMode = theme === 'main' ? mainTheme : altTheme;
	const [user, setUser] = useState({});
	let isAuth: boolean = false;

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser ?? '');
	});

	if (!user) {
		isAuth = false;
	} else if (user) {
		isAuth = true;
	};

	const routing = useRoutes(RouteConfig({ isAuth }));

	return !componentMounted
		? <div />
		: (
			<>
				<ThemeContextProvider value={{ theme, toggleTheme }}>
					<ThemeProvider theme={themeMode}>
						<AuthContextProvider value={{ isAuth }}>
							<GlobalStyle />
							<StyledSection>
								<NavBar mobile={false} />
								{routing}
							</StyledSection>
							<NavBar mobile={true} />
						</AuthContextProvider>
					</ThemeProvider>
				</ThemeContextProvider>
			</>
		);
}

export default App;