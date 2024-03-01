import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postNewProject from "../api/post-newProject.js";
import PageLayout from "../components/PageLayout.jsx";

function NewProjectForm() {

    const navigate = useNavigate();

    const [NewProject, setNewProject] = useState({
        title: "",
        pet_name: "",
        description: "",
        goal: "",
        needed_by: "",
        image: "",
        is_open: true,
        date_created: new Date().toISOString(),
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setNewProject((prevNewProject) => ({
            ...prevNewProject,
            [id] : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
                await postNewProject(NewProject);
                navigate("/");
            } catch (error) {
                console.error("Error creating project", error.message);
            }
    };

    return (
        <PageLayout>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center py-8">
                <div className="w-2/3 mb-4">
                    <label htmlFor="title" className="block text-md font-medium text-gray-700">Project: </label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Title for your project"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>

                <div className="w-2/3 mb-4">
                    <label htmlFor="pet_name" className="block text-md font-medium text-gray-700">Pet Name: </label>
                    <input
                        type="text"
                        id="pet_name"
                        placeholder="Who's this little cutie?!"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>

                <div className="w-2/3 mb-4">
                    <label htmlFor="description" className="block text-md font-medium text-gray-700">Description: </label>
                    <textarea
                        id="description"
                        placeholder="What do you need help funding?"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>

                <div className="w-2/3 mb-4">
                    <label htmlFor="goal" className="block text-md font-medium text-gray-700">Goal Amount: </label>
                    <input
                        type="number"
                        id="goal"
                        placeholder="How much to aim for?"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>

                <div className="w-2/3 mb-4">
                    <label htmlFor="needed_by" className="block text-md font-medium text-gray-700">Aim to fund by: </label>
                    <input
                        type="date"
                        id="needed_by"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>

                <div className="w-2/3 mb-4">
                    <label htmlFor="image" className="block text-md font-medium text-gray-700">Project Img URL:</label>
                    <input
                        type="text"
                        id="image"
                        placeholder="Enter image URL"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>

                <button 
                    type="submit" style={{ backgroundColor: '#00bcd4' }} className="mt-3 w-2/3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Create Project
                </button>
            </form>
        </PageLayout>
    );
}

export default NewProjectForm;