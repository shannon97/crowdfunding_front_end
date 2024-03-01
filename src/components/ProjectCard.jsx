import { Link } from "react-router-dom";

function ProjectCard(props) {
    const { projectData } = props;
    const projectLink = `/project/${projectData.id}`;

    return (
            <div className="flex flex-col items-center p-2 md:p-4 max-w-xs w-full">
                <Link to={projectLink} className="block text-center">
                    <div className="w-64 h-64 rounded-full overflow-hidden border" 
                        style={{ borderColor: '#00bcd4', boxShadow: `0 4px 6px -1px rgba(0, 188, 212, 0.5), 0 2px 4px -2px rgba(0, 188, 212, 0.5)` }}>
                        <img 
                            src={projectData.image}
                            className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-lg font-semibold mt-4">{projectData.title}</h3>
                    <h3 className="text-lg font-semibold">{new Date(projectData.date_created).toLocaleDateString('en-GB')}</h3>
                </Link>
            </div>
    );
}

export default ProjectCard;
