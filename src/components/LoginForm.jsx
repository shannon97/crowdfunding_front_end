import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import { useAuth } from "../hooks/use-auth.js";
import PageLayout from "../components/PageLayout.jsx";

function LoginForm() {

    const navigate = useNavigate();

    const {auth, setAuth} = useAuth();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;

        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id] : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (credentials.username && credentials.password) {
            postLogin(credentials.username, credentials.password).then((response) => {
                window.localStorage.setItem("token", response.token);
                window.localStorage.setItem("user_id", response.user_id);

                setAuth({
                    token: response.token,
                    user_id:response.user_id,
                })

                navigate("/");
            }).catch((error) => {
                console.error("Login attempt failed.", error);
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
                    <label htmlFor="password" className="block text-md font-medium text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                </div>
                <button type="submit" style={{ backgroundColor: '#00bcd4' }} className="mt-3 w-1/3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Login
                </button>
            </form>
        </PageLayout>
    );
}

export default LoginForm;