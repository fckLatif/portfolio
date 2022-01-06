import React from 'react';

import useThemeSwitch from './hooks/useThemeSwitch'
import { useRoutes } from 'react-router-dom';

import RouteConfig from './routes/RouteConfig';

import {
	mainTheme,
	altTheme
} from './components/Themes/Theme';
import { ThemeProvider } from 'styled-components';
import ThemeSwitcher from './components/Themes/ThemeSwitcher';
import GlobalStyle from './components/styled/GlobalStyle';
import {
	NavBar,
	NavBarMobile
} from './components/Navigation/NavBar.js'
import { StyledSection } from "./components/styled/StyledSection";


import {
	faSun as Sun,
	faMoon as Moon,
} from '@fortawesome/free-solid-svg-icons';

const App = () => {
	const [theme, toggleTheme, componentMounted] = useThemeSwitch();
	const themeMode = theme === 'main' ? mainTheme : altTheme;

	let routing = useRoutes(RouteConfig);

	return !componentMounted
		? <div />
		: (
			<ThemeProvider theme={themeMode}>
				<GlobalStyle />
				<StyledSection>
					<NavBar>
						<ThemeSwitcher
							theme={theme}
							toggleTheme={toggleTheme}
							altIcon={Moon}
							mainIcon={Sun}
							content='Themify'
						/>
					</NavBar>
					{routing}
				</StyledSection>
				<NavBarMobile>
					<ThemeSwitcher
						theme={theme}
						toggleTheme={toggleTheme}
						altIcon={Moon}
						mainIcon={Sun}
						content='Themify'
					/>
				</NavBarMobile>
			</ThemeProvider>
		);
}

export default App;