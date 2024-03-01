import EditProfileForm from "../components/EditProfileForm";
import PageLayout from "../components/PageLayout";

function EditProfilePage() {
    return (
        <div>
            <PageLayout>
                <div className="w-full bg-white border-t border-b p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                    <h1 className="text-4xl font-bold text-slate-800 underline text-center mb-5">Edit Your Details</h1>
                </div>
            </PageLayout>

            <div>
                <EditProfileForm />
            </div>
        </div>
    );
}

export default EditProfilePage;