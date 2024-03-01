import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

function NavBar() {
    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    return (
        <div className="flex">
            <div className="flex flex-col w-64 md:w-48 lg:w-64 h-full fixed bg-white shadow-md px-1 justify-between">
                <div>
                    <div className="pt-4 pb-2 px-6 text-center">
                        <img src="imgs/logo.png" alt="Logo" className="w-auto" />
                    </div>
                    <nav className="flex flex-col items-center justify-center mt-10">
                        <Link to="/" className="py-2 text-sm text-gray-700 hover:bg-gray-100">Home</Link>
                        <Link to="/about" className="py-2 text-sm text-gray-700 hover:bg-gray-100">About</Link>
                        <Link to="/contact" className="py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</Link>
                        {auth.token ? (
                            <>
                                <Link to="/newproject" className="py-2 text-sm text-gray-700 hover:bg-gray-100">Create Project</Link>
                                <Link to="/profile" className="py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                                <Link to="/" onClick={handleLogout} className="py-2 text-sm text-gray-700 hover:bg-gray-100">Log Out</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/newacc" className="py-2 text-sm text-gray-700 hover:bg-gray-100">Create Account</Link>
                                <Link to="/login" className="py-2 text-sm text-gray-700 hover:bg-gray-100">Login</Link>
                            </>
                        )}
                    </nav>
                </div>
                <div className="py-4 text-center text-xs" style={{ color: '#00bcd4' }}>
                    Shannon Oliver | She Codes 2024
                </div>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}

export default NavBar;
