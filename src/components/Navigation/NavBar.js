import { NavContent } from './NavContent'
import {
	StyledNav,
	StyledNavMobile
} from '../styled/StyledNav'
import NavOpener from './NavOpener';
import NavLogo from './NavLogo'

export const NavBar = (props) => {
	return (
		<StyledNav>
			<NavOpener content='Menu' />
			<NavLogo to='/' content='Latif' />
			<span className="main-nav">
				<NavContent />
			</span>
			{props.children}
		</StyledNav>
	);
}

export const NavBarMobile = (props) => {
	return (
		<StyledNavMobile>
			<NavContent />
			{props.children}
		</StyledNavMobile>
	);
}