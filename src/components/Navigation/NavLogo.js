import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

const NavLogo = (props) => {
	return (
		<Link to={props.to} className='nav-item nav-logo'>
			<span className='nav-content'>
				<Logo content={props.content} />
			</span>
		</Link>
	);
}

export default NavLogo