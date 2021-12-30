import React from "react";

import useThemeSwitch from './hooks/useThemeSwitch'
import {
	useRoutes
} from "react-router-dom";

import RouteConfig from './routes/RouteConfig';

import { mainTheme, lightTheme } from './components/Themes/Theme';
import { ThemeProvider } from 'styled-components';
import ThemeSwitcher from './components/Themes/ThemeSwitcher';
import GlobalStyle from './components/styled/GlobalStyle';
import NavBar from './components/Navigation/NavBar.js'

import {
	faSun as Sun,
	faMoon as Moon,
} from '@fortawesome/free-solid-svg-icons';


const App = () => {
	const [theme, toggleTheme, componentMounted] = useThemeSwitch();
	const themeMode = theme === 'dark' ? mainTheme : lightTheme;

	let routing = useRoutes(RouteConfig);

	return !componentMounted
		? <div />
		: (
			<ThemeProvider theme={themeMode}>
				<GlobalStyle />
				<NavBar>
					<ThemeSwitcher
						theme={theme}
						toggleTheme={toggleTheme}
						lightIcon={Moon}
						darkIcon={Sun}
					/>
				</NavBar>

				{routing}
			</ThemeProvider>
		);
}

export default App;