import {
	useState,
	useEffect
} from 'react';
import {
	collection,
	getDocs,
	query,
	orderBy
} from 'firebase/firestore';
import { db } from '../../firebase';

import ChildSection from '../../components/Section/ChildSection';

import ProjectsAssembly from './ProjectsAssembly';
import ProjectsContextProvider from '../../components/Providers/ProjectsContextProivder';

const ProjectsContent = () => {
	const [projects, setProjects] = useState<any[]>([]);
	const projectsCollectionRef = query(collection(db, 'projects'), orderBy('timestamp'));

	const getProjects = async () => {
		const data = await getDocs(projectsCollectionRef);
		setProjects(data.docs.reverse().map((doc) => ({ ...doc.data(), id: doc.id })));
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