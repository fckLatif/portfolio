import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledNavItem } from '../styled/StyledA';

export const ThemeSwitcher = (props) => {
	const isDark = props.theme === 'dark';

	const ThemeIcon = () => {
		return isDark
			? <FontAwesomeIcon icon={props.lightIcon} />
			: <FontAwesomeIcon icon={props.darkIcon} />;
	};

	return (
		<StyledNavItem href="#" darkTheme={isDark} onClick={props.toggleTheme}>
			<ThemeIcon />
		</StyledNavItem>
	);
};

export default ThemeSwitcher;