import NewProjectForm from "../components/NewProjectForm";
import PageLayout from "../components/PageLayout";

function NewProjectPage() {
    return (
        <div>
            <PageLayout>
                <div className="w-full bg-white border-t border-b p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                    <h1 className="text-4xl font-bold text-slate-800 underline text-center mb-5">CREATE A NEW PROJECT</h1>
                </div>
            </PageLayout>
            
            <div >
                <NewProjectForm />
            </div>
        </div>
    );
}

export default NewProjectPage;