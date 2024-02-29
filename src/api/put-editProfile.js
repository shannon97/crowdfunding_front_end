async function updateUserDetails(userId, details) {
    const url = `${import.meta.env.VITE_API_URL}/users/${userId}/`;
    const token = window.localStorage.getItem("token");
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`,
        },
        body: JSON.stringify(details),
    });

    if (!response.ok) {
        const fallbackError = `Error updating profile details`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default updateUserDetails;