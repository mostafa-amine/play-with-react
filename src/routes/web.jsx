import { Routes, Route } from "react-router-dom";
import Users from "../components/Users";
import Home from "../components/Home";
import Apps from "../components/Apps";


function Web() {
    return (

        <Routes>
            <Route path="/home" element={<Home />}>
                <Route path="apps" element={<Apps />}>
                    <Route path="users" element={<Users />} />
                </Route>
            </Route>

            <Route path="/stagiaire" element={<Users />} />
        </Routes>
    )
}


export default Web;