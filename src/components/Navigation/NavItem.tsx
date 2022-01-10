import React, {
	FC
} from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface NavItemProps {
	content: string;
	to: string;
	icon: IconProp;
}

interface LeftIconProps {
	icon: IconProp;
}

const NavItem: FC<NavItemProps> = (props) => {
	const LeftIcon: FC<LeftIconProps> = (props) => {
		return !props.icon
			? null
			: <span><FontAwesomeIcon className='nav-icon' icon={props.icon} /></span>
	}

	return (
		<Link to={props.to} className='nav-item'>
			<LeftIcon icon={props.icon} />
			<span className='nav-content'>{props.content}</span>
		</Link>
	);
}

export default NavItem