import {
	Link,
	NavLink,
} from "react-router-dom";

const NavBar = (props) => {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
				<NavLink to="/about" activeclassname="active" >About</NavLink>
				<NavLink to="/contact" activeclassname="active" >Contact</NavLink>
				{props.children}
			</nav>
		</div>

	);
}

export default NavBar