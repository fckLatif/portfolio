import NavItem from './NavItem';
import {
	faHome as Home,
	faUserSecret as UserSecret,
	faAddressCard as AddressCard,
	faProjectDiagram as ProjectDiagram
} from '@fortawesome/free-solid-svg-icons';

export const NavContent = () => {
	return (
		<>
			<NavItem to='/' content='høme' leftIcon={Home} />
			<NavItem to='/about' content='abøut' leftIcon={UserSecret} />
			<NavItem to='/projects' content='prøjects' leftIcon={ProjectDiagram} />
			<NavItem to='/contact' content='cøntact' leftIcon={AddressCard} />
		</>
	);
}