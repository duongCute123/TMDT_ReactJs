import {BrowserRouter,Routes,Route,Link,NavLink} from "react-router-dom"
import Login from "../../auth/login/login"
import Register from "../../auth/register/register"
import FooterPage from "../../footerpage/footerpage"
import HomePage from "../homepage/homepage"
import HeaderPage from "../menu/headermenu/headermenu"
import NavBar from "../menu/menu"
const Routers=()=>{
    return(
        <div className="router">
            <BrowserRouter>
                <NavBar/>
                <HeaderPage/>
                <HomePage/>
                <FooterPage/>
                <Routes>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}   
export default Routers