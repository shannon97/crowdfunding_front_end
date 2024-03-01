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
                    <h1 className="text-4xl font-bold text-slate-800 underline text-center mb-5">ACCOUNT DETAILS</h1>
                </div>

                <div className="flex flex-row items-center w-full gap-10">
                    <div className="flex-initial w-96 h-96 rounded-full overflow-hidden border" style={{ borderColor: '#00bcd4', boxShadow: '0 4px 6px -1px rgba(0, 188, 212, 0.5), 0 2px 4px -2px rgba(0, 188, 212, 0.5)' }}>
                            <img src={user.profile_img} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow space-y-4">
                        <div className="flex flex-col space-y-4">
                            <div className="bg-white border border-gray-300 rounded-md p-2 w-2/3">
                                <span className="font-bold text-lg">Username:</span> {user.username}
                            </div>
                            <div className="bg-white border border-gray-300 rounded-md p-2 w-2/3">
                                <span className="font-bold text-lg">First Name:</span> {user.first_name}
                            </div>
                            <div className="bg-white border border-gray-300 rounded-md p-2 w-2/3">
                                <span className="font-bold text-lg">Last Name:</span> {user.last_name}
                            </div>
                            <div className="bg-white border border-gray-300 rounded-md p-2 w-2/3">
                                <span className="font-bold text-lg">Email:</span> {user.email}
                            </div>
                            <div className="bg-white border border-gray-300 rounded-md p-2 w-2/3">
                                <span className="font-bold text-lg">Bio:</span> {user.user_desc}
                            </div>
                            <div className="bg-white border border-gray-300 rounded-md p-2 w-2/3">
                                <span className="font-bold text-lg">Date Joined:</span> {new Date(user.date_joined).toLocaleDateString('en-GB')}
                            </div>
                    </div>
                </div>
                </div>
                <button 
                    onClick={() => navigate('/edit-profile')}
                    style={{ backgroundColor: '#00bcd4' }}
                    className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white w-1/3">
                    Edit Details
                </button>
            </div>
        </PageLayout>
    );
}

export default ProfilePage;
