import NewProjectForm from "../components/NewProjectForm";
import PageLayout from "../components/PageLayout";

function NewProjectPage() {
    return (
        <div>
            <PageLayout>
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 underline text-center">Create a New Project</h1>
                </div>
            </PageLayout>
            
            <div >
                <NewProjectForm />
            </div>
        </div>
    );
}

export default NewProjectPage;