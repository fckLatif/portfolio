import { StyledPageTitle } from "../../components/styled/StyledH2";
import ProjectsContent from "./ProjectsContent";

const Projects = () => {
	return (
		<>
			<StyledPageTitle>prøjects</StyledPageTitle>
			<div className="project-page">
				<ProjectsContent />
			</div>
		</>
	);
}

export default Projects