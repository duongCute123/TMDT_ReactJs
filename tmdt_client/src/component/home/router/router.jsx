import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import Login from "../../auth/login/login"
import Register from "../../auth/register/register"
import DetailPage from "../../detailpage/detailpage"
import FooterPage from "../../footerpage/footerpage"
import News from "../../newpage/new"
import HomePage from "../homepage/homepage"
import HeaderPage from "../menu/headermenu/headermenu"
import NavBar from "../menu/menu"
const Routers = () => {
    return (
        <div className="router">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/detailproduct" element={<DetailPage />} />
                    <Route path="/news" element={<News/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routers