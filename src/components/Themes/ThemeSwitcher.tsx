import {
	FC
} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ThemeSwitcherProps {
	theme: string;
	mainIcon: IconProp;
	altIcon: IconProp;
	toggleTheme: (() => void);
	content: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
	const isMain: boolean = props.theme === 'main';

	const ThemeIcon = () => {
		return isMain
			? <FontAwesomeIcon className='nav-icon slanted' icon={props.mainIcon} />
			: <FontAwesomeIcon className='nav-icon' icon={props.altIcon} />;
	};

	return (
		<>
			<button className='nav-item theme-switcher' tabIndex={0} onClick={props.toggleTheme}>
				<ThemeIcon />
				<span className='nav-content'>{props.content}</span>
			</button>
		</>

	);
};

export default ThemeSwitcher;