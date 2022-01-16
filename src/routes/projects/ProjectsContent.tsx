import {
	useState,
	useEffect
} from 'react';
import {
	collection,
	getDocs,
} from 'firebase/firestore';
import { db } from '../../firebase';

import ChildSection from '../../components/Section/ChildSection';

import ProjectsAssembly from './ProjectsAssembly';
import ProjectsContextProvider from '../../components/Providers/ProjectsContextProivder';

const ProjectsContent = () => {
	const [projects, setProjects] = useState<any[]>([]);
	const projectsCollectionRef = collection(db, 'projects');

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
			<ProjectsContextProvider value={{ projects }}>
				<ChildSection>
					<ProjectsAssembly />
				</ChildSection>
			</ProjectsContextProvider>
		</>
	)
}

export default ProjectsContent