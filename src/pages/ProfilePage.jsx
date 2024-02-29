import React, { useContext } from "react";
import { AuthContext } from "../components/AuthProvider.jsx";
import { useNavigate } from 'react-router-dom';
import useUser from "../hooks/use-user";
import PageLayout from "../components/PageLayout";
import '../index.css'

function ProfilePage() {
    const { auth } = useContext(AuthContext);
    const { user, isLoading, error } = useUser(auth.user_id); 
    const navigate = useNavigate();

    if (isLoading) {
        return <p>Loading... Please Wait...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }


    return (
        <PageLayout>
            <div className="px-10 flex flex-col items-center">
                <div className="w-full bg-white border-t border-b p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                    <h1 className="text-3xl font-bold text-slate-800 underline text-center mb-7">Profile Page</h1>
                </div>

                <div className="flex flex-row items-center w-full justify-center gap-10">
                    <div className="flex-initial w-96 h-96 rounded-full overflow-hidden border-2" style={{ borderColor: '#00bcd4' }}>
                            <img src={user.profile_img} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow max-w-2xl">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="bg-white border border-gray-300 rounded-md p-2">
                                <span className="font-bold text-lg">Username:</span> {user.username}
                            </div>
                            <div className="bg-white border border-gray-300 rounded-md p-2">
                                <span className="font-bold text-lg">First Name:</span> {user.first_name}
                            </div>
                            <div className="bg-white border border-gray-300 rounded-md p-2">
                                <span className="font-bold text-lg">Last Name:</span> {user.last_name}
                            </div>
                            <div className="bg-white border border-gray-300 rounded-md p-2">
                                <span className="font-bold text-lg">Bio:</span> {user.user_desc}
                            </div>
                            <div className="bg-white border border-gray-300 rounded-md p-2">
                                <span className="font-bold text-lg">Date Joined:</span> {new Date(user.date_joined).toLocaleDateString('en-GB')}
                            </div>
                    </div>
                </div>
                </div>
    
                <button 
                    onClick={() => navigate('/edit-profile')}
                    style={{ backgroundColor: '#00bcd4' }}
                    className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Edit Details
                </button>
            </div>
        </PageLayout>
    );
}

export default ProfilePage;
