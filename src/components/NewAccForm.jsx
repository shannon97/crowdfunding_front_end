import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postNewAcc from "../api/post-newAcc.js";
import { useAuth } from "../hooks/use-auth.js";

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
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id= "username"
                    placeholder="Enter username"
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id= "email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="profile_img">Profile Img URL (Optional):</label>
                <input
                    type="text"
                    id="profile_img"
                    placeholder="Enter image URL"
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label htmlFor="user_desc">Profile Bio (Optional):</label>
                <textarea
                    id="user_desc"
                    placeholder="Tell us about you/your pets!"
                    onChange={handleChange}
                    />
            </div>
            <button type="submit" onClick={handleSubmit}>Create Account</button>
        </form>
    );
}

export default NewAccForm;