import React from "react";
import {Redirect} from 'react-router-dom'
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { BrowserRouter, Route, Routes, Link, redirect } from "react-router-dom"
import { AuthContext } from "../context/authContetex";
const Login = () => {
    const list = {
        ussername: "",
        passwords: ""
    }
    const navigation=useNavigate()
    const [forms, setForm] = useState(list)
    
    const {curent}=AuthContext
    console.log(curent);
    const layussername = (e) => {
        const { name, value } = e.target
        setForm({ ...forms, [name]: value })
    }
    const postDL = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/login", forms)
            .then(res => {
                localStorage.setItem("user",JSON.stringify(list))
                setTimeout(() => {
                    toast("Đăng nhập thành công nhé...!!")
                }, 3000);
                navigation("/home")
            })
            .catch(err => {
                console.log(err);
            })
    }

    const { ussername, passwords } = forms
    return (
        <div className="container-fluid">
            <form action="" method="post">
                <div className="form-group">
                    <label htmlFor="ussername">Nhập tên đăng nhập</label>
                    <input type="text" name="ussername" value={ussername} onChange={layussername} placeholder="Vui long nhap ten tai khoan" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="passwords">Nhập tên mat khau</label>
                    <input type="password" name="passwords" value={passwords} onChange={layussername} placeholder="Vui long nhap mat khau" className="form-control" />
                </div>
                <input type="submit" value="Login" onClick={postDL} />
            </form>
        </div>
    )
}
export default Login