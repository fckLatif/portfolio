import React, {
	useState,
	useEffect
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
import { StyledSection } from './components/styled/StyledSection';
import AuthContextProvider from './components/Providers/AuthContextProvider';
import ThemeContextProvider from './components/Providers/ThemeContextProvider';
import Header from './components/Header/Header';
import './fontawesome';

import { User } from '@firebase/auth-types';

interface UserOverride {
	uid?: string;
}

type UserType = UserOverride | User | null;

const App = () => {
	const [theme, toggleTheme, componentMounted] = useThemeSwitch();
	const themeMode = theme === 'main' ? mainTheme : altTheme;
	const [user, setUser] = useState<UserType>({});

	let isAuth: boolean = false;

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, [isAuth, user?.uid]);

	if (user?.uid) {
		isAuth = true;
	} else {
		isAuth = false;
	};

	const routing = useRoutes(RouteConfig({ isAuth }));

	if (componentMounted) {
		return (
			<>
				<ThemeContextProvider value={{ theme, toggleTheme }}>
					<ThemeProvider theme={themeMode}>
						<AuthContextProvider value={{ isAuth }}>
							<GlobalStyle />
							<StyledSection>
								<Header>
									<NavBar mobile={false} />
								</Header>
								{routing}
							</StyledSection>
							<NavBar mobile={true} />
						</AuthContextProvider>
					</ThemeProvider>
				</ThemeContextProvider>
			</>
		);
	} else {
		return <div />
	}
}

export default App;