import { StyledPageTitle } from "../../components/styled/StyledH2";
import ProjectsContent from "./ProjectsContent";

const ProjectsOverview = () => {
	return (
		<>
			<StyledPageTitle>prøjects</StyledPageTitle>
			<div className="project-page">
				<ProjectsContent />
			</div>
		</>
	);
}

export default ProjectsOverview