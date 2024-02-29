import useProjects from "../hooks/use-projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import PageLayout from "../components/PageLayout";
import '../index.css'

function HomePage() {
    const { projects } = useProjects();

    return (
        <PageLayout>
            <div id="project-list" className="px-10 items-center">
                <div className="w-full bg-white border-t border-b p-4 shadow-sm fixed" style={{ borderColor: '#00bcd4' }}>
                    <h1 className="text-4xl font-bold text-slate-800 underline text-center mb-2">PROJECTS TO FUND</h1>
                </div>
                <br/>
                <div className="grid grid-cols-3 gap-4 mt-20">
                    {projects.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
                </div>
            </div>
        </PageLayout>
    );
};

export default HomePage;