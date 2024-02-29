import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postNewProject from "../api/post-newProject.js";
import { useAuth } from "../hooks/use-auth.js";

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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Project: </label>
                <input
                    type="text"
                    id= "title"
                    placeholder="Title for your project"
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="pet_name">Pet Name: </label>
                <input
                    type="text"
                    id= "pet_name"
                    placeholder="Who's this little cutie?!"
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="description">Description: </label>
                <textarea
                    id= "description"
                    placeholder="What do you need help funding?"
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="goal">Goal Amount: </label>
                <input
                    type="number"
                    id="goal"
                    placeholder="How much to aim for?"
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="needed_by">Aim to fund by: </label>
                <input
                    type="date"
                    id="needed_by"
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="image">Project Img URL:</label>
                <input
                    type="text"
                    id="image"
                    placeholder="Enter image URL"
                    onChange={handleChange}
                    />
            </div>
            <button type="submit" onClick={handleSubmit}>Create Project</button>
        </form>
    );
}

export default NewProjectForm;