import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom"
const Login = () => {
    const list = {
        ussername: "",
        passwords: ""
    }
    const [forms, setForm] = useState(list)
    const { ussername, passwords } = forms
    const navigation=useNavigate()
    const layussername = (e) => {
        const { name, value } = e.target
        setForm({ ...forms, [name]: value })
    }
    const postDL = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/login", forms)
            .then(res => {
                navigation("/home")
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="login">
            <div className="titile" style={{
                textAlign: "center"
            }}>
                <h1 style={{
                    color: "red",
                }}>ĐĂNG NHẬP</h1>
            </div>
            <div className="login-froms">
                <form action="" method="post">
                    <div className="form-group">
                        <label htmlFor="ussername">Nhập tên đăng nhập</label>
                        <input type="text" name="ussername" className="form-control" value={ussername} onChange={layussername} placeholder="Vui lòng nhập tên đăng nhập" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwords">Nhập mật khẩu đăng nhập</label>
                        <input type="text" placeholder="Vui lòng nhập mật khẩu" name="passwords" className="form-control" value={passwords} onChange={layussername} />
                    </div>
                    <input type="submit" onClick={postDL} value="Login" />
                    <input type="button" value="Cancel" />
                </form>
                <div className="page-register">
                    <span>Bạn chưa có tài khoản ? Đăng nhập nó <Link to={"/register"}>Register</Link></span>
                </div>
            </div>
        </div>
    )
}
export default Login