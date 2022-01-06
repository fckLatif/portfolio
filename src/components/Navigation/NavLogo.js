import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

const NavLogo = (props) => {
	return (
		<NavLink to={props.to} className='nav-item nav-logo'>
			<span className='nav-content'>
				<Logo content={props.content} />
			</span>
		</NavLink>
	);
}

export default NavLogo