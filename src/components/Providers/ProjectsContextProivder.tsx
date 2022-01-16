import React, {
	FC
} from 'react';
import {
	projectsContext
} from '../../context';

interface ProjectsContextProviderProps {
	value: any;
}

const ProjectsContextProvider: FC<ProjectsContextProviderProps> = (props) => {
	return (
		<>
			<projectsContext.Provider value={props.value}>
				{props.children}
			</projectsContext.Provider>
		</>
	);
}

export default ProjectsContextProvider