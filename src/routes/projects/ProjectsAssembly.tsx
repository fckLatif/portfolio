import React, {
	useContext,
	FC
} from 'react';
import { projectsContext } from '../../context'

const ProjectsAssembly: FC = () => {
	const { projects } = useContext(projectsContext);

	return (
		<>
			{projects.map((project: any) => {
				const RepositoryLink = () => {
					if (project.repository_link) {
						return <a href={project.repository_link} target='_blank' rel="noreferrer">repository</a>;
					} else {
						return null;
					}
				}

				const CaseStudy = () => {
					if (project.case_study) {
						return <a href={`projects/${project.id}`}>case study</a>;
					} else {
						return null;
					}
				}

				return (
					<div tabIndex={1} className='project' key={project.id}>
						<h4>{project.title}</h4>
						<p>{project.description}</p>
						<div className='project-buttons'>
							<RepositoryLink />
							<CaseStudy />
						</div>

					</div>
				);
			})}
		</>
	)
}

export default ProjectsAssembly