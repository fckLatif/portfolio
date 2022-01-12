import React, {
	useContext,
	FC
} from 'react'
import { themeContext } from '../../context'

import NavItem from './NavItem';
import '../../fontawesome';
import NavAuth from './NavAuth';
import { ThemeSwitcher } from '../Themes/ThemeSwitcher'

interface NavContentProps {
	buttons: boolean;
}

const NavContent: FC<NavContentProps> = (props) => {
	const { theme, toggleTheme } = useContext(themeContext);

	if (props.buttons) {
		return (
			<>
				<NavAuth />
				<ThemeSwitcher
					theme={theme}
					toggleTheme={toggleTheme}
					altIcon="vial"
					mainIcon="snowflake"
					content='Themify'
				/>
			</>
		);
	} else {
		return (
			<>
				<NavItem to='/' content='høme' icon="home" />
				<NavItem to='/about' content='abøut' icon="user-secret" />
				<NavItem to='/projects' content='prøjects' icon="project-diagram" />
				<NavItem to='/contact' content='cøntact' icon="address-card" />
				<NavAuth />
				<ThemeSwitcher
					theme={theme}
					toggleTheme={toggleTheme}
					altIcon="vial"
					mainIcon="snowflake"
					content='Themify'
				/>
			</>
		);
	};
};

export default NavContent