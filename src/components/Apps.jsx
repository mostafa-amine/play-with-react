import { Outlet, Link } from "react-router-dom";

function Apps() {
    return (
        <div className="container mt-5">
            <h2 className="text-center">This is Apps Component With in the home component </h2>
            <div className="text-center mt-5 text-black mb-5">
                <Link to="users" className="">Users</Link>
            </div>
            <Outlet />
        </div >
    )
}

export default Apps;