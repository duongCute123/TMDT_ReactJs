import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Router, Routes, Link, NavLink } from "react-router-dom";
const AddProduct = () => {
    const list = {
        tenSp: "",
        soLuong: "",
        thongTinSp: "",
        nhaSX: "",
        giaSP: "",
        anh: ""
    }
    const [forms, setForm] = useState(list)
    const laydulieu = (e) => {
        const { name, value } = e.target
        setForm({ ...forms, [name]: value })
    }
    const themproduct = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/addproduct", forms)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const { tenSp, soLuong, thongTinSp, nhaSX, giaSP, anh } = forms
    return (
        <div className="addproduct container-fluid">
            <form action="" method="post">
                <div className="form-group">
                    <label htmlFor="tenSp">Nhập tên sản phẩm</label>
                    <input type="text" name="tenSp" value={tenSp} onChange={laydulieu} placeholder="Vui lòng nhập tên sản phẩm" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="soLuong">Nhập số lượng sản phẩm</label>
                    <input type="text" name="soLuong" value={soLuong} onChange={laydulieu} placeholder="Vui lòng nhập số lượng sản phẩm" className="form-control" />
                </div>
                <div class="form-group">
                    <label for="thongTinSp">Nhập thông tin san phẩm</label>
                    <textarea class="form-control" name="thongTinSp" onChange={laydulieu} value={thongTinSp} id="" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="nhaSX">Nhập tên nhà sản xuất sản phẩm</label>
                    <input type="text" name="nhaSX" value={nhaSX} placeholder="Vui lòng nhập nhà sản xuất sản phẩm" onChange={laydulieu} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="giaSP">Nhập giá sản phẩm</label>
                    <input type="text" name="giaSP" value={giaSP} placeholder="Vui lòng nhập gia sản phẩm" onChange={laydulieu} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="anh">Nhập ảnh sản phẩm</label>
                    <input type="text" name="anh" value={anh} placeholder="Vui lòng nhập ảnh sản phẩm" onChange={laydulieu} className="form-control" />
                </div>
                <input name="" id="" class="btn btn-primary" type="submit" value="Add Product" onClick={themproduct} />
            </form>
        </div>
    )
}
export default AddProduct