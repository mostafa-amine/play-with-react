import { Outlet } from "react-router-dom"

function Home() {

    return (
        <div className="Home container mt-5">
            <h1 className='text-center'>Home Page</h1>
            <Outlet />
        </div>
    )
}

export default Home
