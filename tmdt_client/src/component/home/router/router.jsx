import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import Login from "../../auth/login/login"
import Register from "../../auth/register/register"
import DetailPage from "../../detailpage/detailpage"
import FooterPage from "../../footerpage/footerpage"
import News from "../../newpage/new"
import Product from "../../product/product"
import HomePage from "../homepage/homepage"
import HeaderPage from "../menu/headermenu/headermenu"
import NavBar from "../menu/menu"
import ShoppingCarrt from "../../cart/addproduct"
const Routers = () => {
    return (
        <div className="router">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/detailproduct/:id" element={<DetailPage />} />
                    <Route path="/new" element={<News/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/shopingcart" element={<ShoppingCarrt/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routers