import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = (props) => {
	const LeftIcon = () => {
		return !props.icon
		? null
		: <span><FontAwesomeIcon className='nav-icon' icon={props.icon} /></span>
	}

	return (
		<Link to={props.to} className='nav-item'>
			<LeftIcon icon={props.icon}/>
			<span className='nav-content'>{props.content}</span>
		</Link>
	);
}

export default NavItem