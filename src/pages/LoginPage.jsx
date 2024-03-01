import LoginForm from "../components/LoginForm";
import PageLayout from "../components/PageLayout";

function LoginPage() {
    return (
        <div>
            <PageLayout>
                <div className="w-full bg-white border-t border-b p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                    <h1 className="text-4xl font-bold text-slate-800 underline text-center mb-5">Login</h1>
                </div>
            </PageLayout>
            
            <div >
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;