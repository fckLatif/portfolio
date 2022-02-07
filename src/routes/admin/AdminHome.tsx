import React, {
	useContext,
	useEffect
} from 'react';

import {
	collection,
	getDocs,
	doc,
	deleteDoc,
	orderBy,
	query,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { projectsContext } from '../../context';

import { StyledTable } from '../../components/styled/StyledTable';
import { Link } from 'react-router-dom';
import { StyledPageTitle } from '../../components/styled/StyledH2';

export const str2bool = (value: string) => {
	if (value && typeof value === "string") {
		if (value.toLowerCase() === "true") return true;
		if (value.toLowerCase() === "false") return false;
	}
	return value;
}

const AdminHome = () => {
	const { projects, setProjects } = useContext(projectsContext);
	const projectsCollectionRef = query(collection(db, 'projects'), orderBy('timestamp', 'desc'));
	const [refresh, setRefresh] = React.useState(false);

	const deleteProject = async (id: string) => {
		const data = doc(db, "projects", id);
		await deleteDoc(data);

		setRefresh(!refresh);
	};

	useEffect(() => {
		const getProjects = async () => {
			const data = await getDocs(projectsCollectionRef);
			setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getProjects()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refresh]);

	return (
		<>
			<div>
				<StyledPageTitle>admin panel</StyledPageTitle>
				<Link to='create/'>create database entry</Link>
				<StyledTable>
					<thead>
						<tr>
							<th colSpan={5} className='table-title'>prøjects</th>
						</tr>
						<tr>
							<th>title</th>
							<th>descriptiøn</th>
							<th>visible</th>
							<th colSpan={2} className='modifications'>mødify</th>
						</tr>
					</thead>
					<tbody>
						{projects.map((project: any) => {
							return (
								<tr key={project.id}>
									<td>{project.title}</td>
									<td>{project.description}</td>
									<td>{project.visible.toString()}</td>
									<td><Link to={`edit/${project.id}`}>Edit</Link></td>
									{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
									<td><button onClick={() => { deleteProject(project.id) }}>Delete</button></td>
								</tr>
							);
						})}
					</tbody>
				</StyledTable>
			</div>
		</>
	);
}

export default AdminHome