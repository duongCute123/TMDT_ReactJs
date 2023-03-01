import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom"
const Register = () => {
    const list = {
        first_name: "",
        last_name: "",
        email: "",
        ussername: "",
        passwords: ""
    }

    const navigation=useNavigate()
    const layussername = (e) => {
        const { name, value } = e.target
        setForm({ ...forms, [name]: value })
    }
    const postDL = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/addUser", forms)
            .then(res => {
                navigation("/home")
            })
            .catch(err => {
                console.log(err);
            })
    }
    const [forms, setForm] = useState(list)
    const { first_name, last_name, email, ussername, passwords } = forms
    return (
        <div className="login">
            <div className="titile">
                <h1>ĐĂNG NHẬP</h1>
            </div>
            <div className="login-froms">
                <form action="" method="post">
                    <div className="form-group">
                        <label htmlFor="firstname">Nhập họ tên của bạn</label>
                        <input type="text" name="first_name" className="form-control" value={first_name} onChange={layussername} placeholder="Vui lòng nhập họ tên" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Nhập tên của bạn</label>
                        <input type="text" name="last_name" className="form-control" value={last_name} onChange={layussername} placeholder="Vui lòng nhập tên của bạn" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Nhập email đăng ký</label>
                        <input type="text" name="email" className="form-control" value={email} onChange={layussername} placeholder="Vui lòng nhập họ tên" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ussername">Nhập tên đăng nhập</label>
                        <input type="text" name="ussername" className="form-control" value={ussername} onChange={layussername} placeholder="Vui lòng nhập tên đăng nhập" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwords">Nhập mật khẩu đăng nhập</label>
                        <input type="text" placeholder="Vui lòng nhập mật khẩu" name="passwords" className="form-control" value={passwords} onChange={layussername} />
                    </div>
                    <input type="submit" onClick={postDL} value="Login" />
                    <input type="button"  value="Cancel" />
                </form>
                <div className="page-register">
                    <span>Bạn đã có tài khoản ? Đăng nhập nó <Link to={"/login"}>Register</Link></span>
                </div>
            </div>
        </div>
    )
}
export default Register