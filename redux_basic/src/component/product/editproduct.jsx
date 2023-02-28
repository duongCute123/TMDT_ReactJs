import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BrowserRouter, Router, Routes, Link, NavLink } from "react-router-dom";
const list = {
    tenSp: "",
    soLuong: "",
    thongTinSp: "",
    nhaSX: "",
    giaSP: "",
    anh: ""
}
const EditProduct = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    console.log(id);
    const [forms, setForm] = useState(list)
    const { tenSp, soLuong, thongTinSp, nhaSX, giaSP, anh } = forms
    // Tìm dữ liệu
    useEffect(() => {
        axios.get(`http://localhost:8000/seachproduct/+${id}`)
            .then(res => {
                console.log({...res.data});
            })
            .catch(err => {
                console.log("Lỗi lấy dữ liêu");
            })
    }, [])
    const laydulieu = (e) => {
        const { name, value } = e.target
        setForm({ ...forms, [name]: value })
    }
    // Thực hiện gửi dữ liệu sau khi edit về nhé
    const themproduct = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/updateproduct/" + id, forms)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    console.log(id);
    return (
        <div className="addproduct container-fluid">
            <h1>Hiển thị sản phẩm muốn cập nhật</h1>
            <form action="" method="post">
                <div className="form-group">
                    <label>Nhập tên sản phẩm</label>
                    <input type="text" name="tenSp" onChange={laydulieu} value={tenSp || ""} placeholder="Vui lòng nhập tên sản phẩm" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="soLuong">Nhập số lượng sản phẩm</label>
                    <input type="text" name="soLuong" value={soLuong || ""} onChange={laydulieu} placeholder="Vui lòng nhập số lượng sản phẩm" className="form-control" />
                </div>
                <div class="form-group">
                    <label for="thongTinSp">Nhập thông tin san phẩm</label>
                    <textarea class="form-control" name="thongTinSp" onChange={laydulieu} value={thongTinSp || ""} id="" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="nhaSX">Nhập tên nhà sản xuất sản phẩm</label>
                    <input type="text" name="nhaSX" value={nhaSX || ""} placeholder="Vui lòng nhập nhà sản xuất sản phẩm" onChange={laydulieu} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="giaSP">Nhập giá sản phẩm</label>
                    <input type="text" name="giaSP" value={giaSP || ""} placeholder="Vui lòng nhập gia sản phẩm" onChange={laydulieu} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="anh">Nhập ảnh sản phẩm</label>
                    <input type="text" name="anh" value={anh || ""} placeholder="Vui lòng nhập ảnh sản phẩm" onChange={laydulieu} className="form-control" />
                </div>
                <input name="" id="" class="btn btn-primary" type="button" value="Up Product" onClick={themproduct} />
            </form>
        </div>
    )
}
export default EditProduct