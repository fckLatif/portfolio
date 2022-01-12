import React, {
	FC
} from 'react';

import NavContent from './NavContent'
import {
	StyledNav,
	StyledNavMobile
} from '../styled/StyledNav'
import NavOpener from './NavOpener';
import NavLogo from './NavLogo';

interface NavBarProps {
	mobile: boolean;
}

const NavBar: FC<NavBarProps> = (props) => {
	if (props.mobile) {
		return (
			<StyledNavMobile>
				<NavContent buttons={false} />
			</StyledNavMobile>
		);
	} else {
		return (
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
}

export default NavBar