import {
	useContext,
	useEffect
} from 'react';
import {
	collection,
	getDocs,
	query,
	orderBy
} from 'firebase/firestore';
import { db } from '../../firebase';
import { projectsContext } from '../../context'

import ChildSection from '../../components/Section/ChildSection';

import ProjectsAssembly from './ProjectsAssembly';

const ProjectsContent = () => {
	const { setProjects } = useContext(projectsContext);
	const projectsCollectionRef = query(collection(db, 'projects'), orderBy('timestamp', 'desc'));

	const getProjects = async () => {
		const data = await getDocs(projectsCollectionRef);
		setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	};

	useEffect(() => {
		getProjects()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<ChildSection>
				<ProjectsAssembly />
			</ChildSection>
		</>
	)
}

export default ProjectsContent