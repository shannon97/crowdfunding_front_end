import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import updateUserDetails from '../api/put-editProfile';
import getUser from '../api/get-user';
import PageLayout from "../components/PageLayout.jsx";

function EditProfile() {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [profileDetails, setProfileDetails] = useState({
        first_name: '',
        last_name: '',
        profile_img: '',
        user_desc: '',
    });

    useEffect(() => {
        if (auth.user_id) {
            getUser(auth.user_id)
                .then((data) => {
                    setProfileDetails({
                        first_name: data.first_name ?? '',
                        last_name: data.last_name ?? '',
                        profile_img: data.profile_img ?? '',
                        user_desc: data.user_desc ?? '',
                    });
                })
                .catch((error) => {
                    console.error("Failed to load user details:", error);
                });
        }
    }, [auth.user_id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfileDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updated = await updateUserDetails(auth.user_id, profileDetails);
        if (updated) {
            navigate('/profile');
        } else {
            console.error('Failed to update profile');
        }
    };

    return (
        <PageLayout>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center py-8 mt-10">
                    <div className="w-1/3 mb-4">
                        <label htmlFor="first_name" className="block text-md font-medium text-gray-700">First Name:
                            <input 
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={profileDetails.first_name}
                            onChange={handleChange} 
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </label>
                    </div>
                    <div className="w-1/3 mb-4">
                        <label htmlFor="last_name" className="block text-md font-medium text-gray-700">Last Name:
                            <input 
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={profileDetails.last_name}
                            onChange={handleChange} 
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </label>
                    </div>
                    <div className="w-1/3 mb-4">
                        <label htmlFor="profile_img" className="block text-md font-medium text-gray-700">Profile Image URL:
                            <input 
                            type="text"
                            id="profile_img"
                            name="profile_img"
                            value={profileDetails.profile_img}
                            onChange={handleChange} 
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </label>
                    </div>
                    <div className="w-1/3 mb-4">
                        <label htmlFor="user_desc" className="block text-md font-medium text-gray-700">Bio:
                            <textarea name="user_desc"
                            value={profileDetails.user_desc}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            </textarea>
                        </label>
                    </div>
                    <button type="submit" style={{ backgroundColor: '#00bcd4' }} className="mt-3 w-1/3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Update Profile
                    </button>
                </form>
        </PageLayout>
    );
}

export default EditProfile;
