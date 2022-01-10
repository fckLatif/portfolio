import React, {
	FC
} from 'react';

import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

interface NavLogoProps {
	content: string;
	to: string;
}

const NavLogo: FC<NavLogoProps> = (props) => {
	return (
		<Link to={props.to} className='nav-item nav-logo'>
			<span className='nav-content'>
				<Logo content={props.content} />
			</span>
		</Link>
	);
}

export default NavLogo