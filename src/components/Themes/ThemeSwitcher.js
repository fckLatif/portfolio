import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ThemeSwitcher = (props) => {
	const isMain = props.theme === 'main';

	const ThemeIcon = () => {
		return isMain
			? <FontAwesomeIcon className='nav-icon' icon={props.altIcon} />
			: <FontAwesomeIcon className='nav-icon' icon={props.mainIcon} />;
	};

	return (
		<span className='nav-item' tabIndex={0} onClick={props.toggleTheme}>
			<ThemeIcon />
			<span className='nav-content'>{props.content}</span>
		</span>
	);
};

export default ThemeSwitcher;