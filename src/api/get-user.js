async function getUser(userId) {
    const url = `${import.meta.env.VITE_API_URL}/users/${userId}/`;
    const token = window.localStorage.getItem("token");
    
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Token ${token}`
        }
     });

    if (!response.ok) {
        const fallbackError = `Error fetching user with ID ${userId}`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export async function getUsernameById(userId) {
    try {
        const userData = await getUser(userId);
        return userData.username;
    } catch (error) {
        console.error(`Error fetching username for user ID ${userId}:`, error);
        return null;
    }
}

export default getUser;