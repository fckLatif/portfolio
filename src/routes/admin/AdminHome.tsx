import { Link } from 'react-router-dom';
import { StyledPageTitle } from '../../components/styled/StyledH2';

const AdminHome = () => {
	return (
		<>
			<div>
				<StyledPageTitle>admin panel</StyledPageTitle>
				<Link to='create/'>create database entry</Link>
			</div>
		</>
	);
}

export default AdminHome