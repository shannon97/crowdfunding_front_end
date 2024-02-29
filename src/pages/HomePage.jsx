import useProjects from "../hooks/use-projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import '../index.css'

function HomePage() {
    const { projects } = useProjects();

    return (
        <div id="project-list" className="ml-64 p-4">
            <h1 className="text-3xl font-bold text-slate-800 underline text-center">This is the Projects page</h1>
            <br/>
            <div className="grid grid-cols-3 gap-4">
                {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
            </div>
        </div>
    );
};

export default HomePage;