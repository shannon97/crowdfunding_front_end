import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import updateUserDetails from '../api/put-editProfile';
import getUser from '../api/get-user';

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
        <form onSubmit={handleSubmit}>
            <label>First Name:
                <input type="text"
                name="first_name"
                value={profileDetails.first_name}
                onChange={handleChange} />
            </label>
            <label>Last Name:
                <input type="text"
                name="last_name"
                value={profileDetails.last_name}
                onChange={handleChange} />
            </label>
            <label>Profile Image URL:
                <input type="text"
                name="profile_img"
                value={profileDetails.profile_img}
                onChange={handleChange} />
            </label>
            <label>Bio:
                <textarea name="user_desc"
                value={profileDetails.user_desc}
                onChange={handleChange}>
                </textarea>
            </label>
            <button type="submit">Update Profile</button>
        </form>
    );
}

export default EditProfile;
