import React, { useContext, useEffect } from "react";
import { AuthContext } from "../components/AuthProvider.jsx";
import { useNavigate } from 'react-router-dom';
import useUser from "../hooks/use-user";

function ProfilePage() {
    const { auth } = useContext(AuthContext);
    const { user, isLoading, error } = useUser(auth.user_id, auth.token); 
    const navigate = useNavigate();

    if (isLoading) {
        return <p>Loading... Please Wait...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }


    return (
        <div>
            <h2>Profile Page</h2>
            {user && (
                <>
                    <p>Profile Img: <img src={user.profile_img} alt="Profile" /></p>
                    <p>Username: {user.username}</p>
                    <p>First Name: {user.first_name}</p>
                    <p>Last Name: {user.last_name}</p>
                    <p>Bio: {user.user_desc}</p>
                    <p>Date Joined: {user.date_joined}</p>
                    <button onClick={() => navigate('/edit-profile')}>Edit Details </button>
                </>
            )}
        </div>
    );
}

export default ProfilePage;
