import { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom"
const Register = () => {
    const list = {
        firstname: "",
        lastname: "",
        email: "",
        ussername: "",
        passwords: ""
    }
    const h=()=>{

    }
    const [forms, setForm] = useState(list)
    const { firstname, lastname, email, ussername, passwords } = forms
    return (
        <div className="login">
            <div className="titile">
                <h1>ĐĂNG NHẬP</h1>
            </div>
            <div className="login-froms">
                <form action="" method="post">
                    <div className="form-group">
                        <label htmlFor="firstname">Nhập họ tên của bạn</label>
                        <input type="text" name="firstname" className="form-control" value={firstname} onChange={h } placeholder="Vui lòng nhập họ tên" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Nhập tên của bạn</label>
                        <input type="text" name="lastname" className="form-control" value={lastname} onChange={h } placeholder="Vui lòng nhập tên của bạn" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Nhập email đăng ký</label>
                        <input type="text" name="email" className="form-control" value={email} onChange={h } placeholder="Vui lòng nhập họ tên" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ussername">Nhập tên đăng nhập</label>
                        <input type="text" name="ussername" className="form-control" value={ussername} onChange={h } placeholder="Vui lòng nhập tên đăng nhập" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwords">Nhập mật khẩu đăng nhập</label>
                        <input type="text" placeholder="Vui lòng nhập mật khẩu" name="passwords" className="form-control" value={passwords} onChange={h } />
                    </div>
                    <input type="submit"  value="Login" />
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