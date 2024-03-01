import { Link } from "react-router-dom";

function ProjectCard(props) {
    const { projectData } = props;
    const projectLink = `/project/${projectData.id}`;

    return (
        <div className="w-full flex flex-col items-center">
            <Link to={projectLink} className="block text-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border" 
                     style={{ borderColor: '#00bcd4', boxShadow: `0 4px 6px -1px rgba(0, 188, 212, 0.5), 0 2px 4px -2px rgba(0, 188, 212, 0.5)` }}>
                    <img 
                        src={projectData.image} 
                        alt={projectData.title} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-lg font-semibold mt-4">{projectData.title}</h3>
            </Link>
        </div>
    );
}

export default ProjectCard;
