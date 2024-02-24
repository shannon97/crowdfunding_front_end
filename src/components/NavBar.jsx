import { Link, Outlet } from "react-router-dom";

import { useAuth } from "../hooks/use-auth";

function NavBar() {

    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    console.log(auth)

    return (
        <div>
            <nav>
                <Link to="/">Home | </Link>
                <Link to="/about">About | </Link>
                <Link to="/contact">Contact Us | </Link>
                {auth.token ? (
                    <>
                        <Link to="/newproject">Create Project | </Link>
                        <Link to="/profile">Profile | </Link>
                        <Link to="/" onClick={handleLogout}>Log Out</Link>
                    </>
                ) : (
                    <>
                        <Link to="/newacc">Create Account | </Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </nav>
            <Outlet />
            <footer>[footer stuff here]</footer>
        </div>
    );
}

export default NavBar;