import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = (props) => {
	let leftIcon = !props.leftIcon
		? <span></span>
		: <span><FontAwesomeIcon className='nav-icon' icon={props.leftIcon} /></span>

	let rightIcon = !props.rightIcon
		? <span></span>
		: <span><FontAwesomeIcon className='nav-icon' icon={props.rightIcon} /></span>

	return (
		<NavLink to={props.to} className='nav-item'>
			{leftIcon}
			<span className='nav-content'>{props.content}</span>
			{rightIcon}
		</NavLink>
	);
}

export default NavItem