async function postNewProject(title, description, goal, image) {
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const token = window.localStorage.getItem("token");
    const response = await fetch (url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify({
            "title": title,
            "pet_name": pet_name,
            "description": description,
            "goal": goal,
            "needed_by": needed_by,
            "image": image,
        }),
    });

    if (!response.ok) {
        const fallbackError = `Error trying to create project`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default postNewProject;