import React, {
	useContext,
	FC
} from 'react';
import { projectsContext } from '../../context'

const ProjectsAssembly: FC = () => {
	const { projects } = useContext(projectsContext);

	console.log(projects)
	return (
		<>
			{projects.map((project: any) => {
				const RepositoryLink = () => {
					if (project.repository_link) {
						return <a href={project.repository_link} target='_blank' rel="noreferrer">repository</a>;
					} else {
						return null;
					};
				};

				const SiteLink = () => {
					if (project.website) {
						return <a href={project.website} target='_blank' rel="noreferrer">visit website</a>;
					} else {
						return null;
					};
				};

				const CaseStudy = () => {
					if (project.case_study) {
						return <a href={`projects/${project.id}`}>case study</a>;
					} else {
						return null;
					};
				};

				if (project.visible) {
					return (
						<div tabIndex={1} className={'project'} key={project.id}>
							<h4>{project.title}</h4>
							<p>{project.description}</p>
							<div className='project-buttons'>
								<RepositoryLink />
								<SiteLink />
								<CaseStudy />
							</div>
	
						</div>
					);
				} else {
					return null;
				};
			})}
		</>
	)
}

export default ProjectsAssembly