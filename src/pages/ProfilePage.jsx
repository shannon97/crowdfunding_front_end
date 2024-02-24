import { useEffect } from "react";
import useUser from "../hooks/use-user";
import { useAuth } from "../hooks/use-auth";

function ProfilePage() {
    const auth = useAuth();
    const { user, isLoading, error } = useUser(auth.user ? auth.user.id : null);

    useEffect(() => {
        if (auth.user) {
            getUserData(auth.user.id);
        }
    }, [auth.user]);

return (
    <div>
        {isLoading && <p>Loading... Please wait...</p>}
        {error && <p>{error.message}</p>}
        {user && (
            <div>
                <h2>Profile Page</h2>
                <p>Profile Img: {user.profile_img}</p>
                <p>Username: {user.username}</p>
                <p>Bio: {user.user_desc}</p>
            </div>
        )}
    </div>
);
}

export default ProfilePage;