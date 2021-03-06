import React, {
	FC,
	useContext
} from "react";
import { authContext } from '../../context'

import NavItem from './NavItem';

const NavAuth: FC = () => {
	const { isAuth } = useContext(authContext);

	if (!isAuth) {
		return (
			<span className="nav-auth">
				<NavItem to='/signin' content='sign in' icon="fingerprint" />
			</span>
		);
	} else {
		return (
			<span className="nav-auth">
				<NavItem to='/signout' content='sign øut' icon="door-open" />
				<NavItem to='/admin' content='admin panel' icon="user-astronaut" />
			</span>
		);
	}
}

export default NavAuth;