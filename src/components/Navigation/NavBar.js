import React from 'react';

import NavContent from './NavContent'
import {
	StyledNav,
	StyledNavMobile
} from '../styled/StyledNav'
import NavOpener from './NavOpener';
import NavLogo from './NavLogo';

const NavBar = (props) => {
	return props.mobile
		? (
			<StyledNavMobile>
				<NavContent />
			</StyledNavMobile>
		)
		: (
			<StyledNav>
				<NavOpener content='Menu' />
				<NavLogo to='/' content='Latif' />
				<span className="main-nav">
					<NavContent buttons={false} />
				</span>
				<span className='nav-buttons'>
					<NavContent buttons={true} />
				</span>
			</StyledNav>
		);
}

export default NavBar