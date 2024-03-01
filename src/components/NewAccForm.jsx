import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postNewAcc from "../api/post-newAcc.js";
import PageLayout from "../components/PageLayout.jsx";

function NewAccForm() {

    const navigate = useNavigate();

    const [NewAcc, setNewAcc] = useState({
        username: "",
        email: "",
        password: "",
        profile_img: "",
        user_desc: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setNewAcc((prevNewAcc) => ({
            ...prevNewAcc,
            [id] : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (NewAcc.username && NewAcc.email && NewAcc.password) {
            postNewAcc(NewAcc.username, NewAcc.email, NewAcc.password).then((response) => {
                navigate("/login");
            });
        }
    };

    return (
        <PageLayout>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center py-8">
                <div className="w-1/3 mb-4">
                    <label htmlFor="username" className="block text-md font-medium text-gray-700">Username:</label>
                    <input
                        type="text"
                        id= "username"
                        placeholder="Enter username"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                </div>
                <div className="w-1/3 mb-4">
                    <label htmlFor="email" className="block text-md font-medium text-gray-700">Email:</label>
                    <input
                        type="text"
                        id= "email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                </div>
                <div className="w-1/3 mb-4">
                    <label htmlFor="password" className="block text-md font-medium text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                </div>
                <div className="w-1/3 mb-4">
                    <label htmlFor="profile_img" className="block text-md font-medium text-gray-700">Profile Img URL (Optional):</label>
                    <input
                        type="text"
                        id="profile_img"
                        placeholder="Enter image URL"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                </div>
                <div className="w-1/3 mb-4">
                    <label htmlFor="user_desc" className="block text-md font-medium text-gray-700">Profile Bio (Optional):</label>
                    <textarea
                        id="user_desc"
                        placeholder="Tell us about you/your pets!"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                </div>
                <button type="submit" style={{ backgroundColor: '#00bcd4' }} className="mt-3 w-1/3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Create Account
                </button>
            </form>
        </PageLayout>
    );
}

export default NewAccForm;