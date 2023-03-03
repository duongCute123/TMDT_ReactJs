import React, { useContext } from "react";
import { BrowserRouter, Route, Router, Routes, Link } from "react-router-dom";
import Login from "../auth/login";
import NavNar from "../menu/menu";
import HomePage from "../home/homepage";
import AddProduct from "../product/addproduct";
import EditProduct from "../product/editproduct";
import { AuthContext } from "../context/authContetex";
const Menu = () => {
    const { curent } = useContext(AuthContext)
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <NavNar />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/themsp" element={<AddProduct />} />
                    <Route path="/editproduct/:id" element={<EditProduct />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Menu