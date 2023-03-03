import axios from "axios";
import AddProduct from "./addproduct";
import { TextField } from "@mui/material";
import { useState } from "react";
import React from "react";
import { BrowserRouter, Router, Routes, Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
    const [data, setData] = React.useState([])
    const [query, setQuery] = useState("")
    useEffect(() => {
        axios.get("http://localhost:8000/getproduct")
            .then(res => {
                console.log(res.data);
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    var { id } = useParams()
    const xoa = (e) => {

    }
    return (
        <div className="product container-fluid">
            <div className="btn-themsp  row">
                <div className="tim col-sm-6">
                <TextField
                    name="query"
                    value={query}
                    id="standard-search"
                    label="Nhập tên sản phẩm cần tìm kiếm"
                    type="search"
                    onChange={(e) => setQuery(e.target.value)}
                    variant="standard"
                    style={{
                        width: "35%",
                        marginLeft: "10px"
                    }}
                />
                </div>
                <div className="add col-sm-6">
                    <Link to={'/themsp'}>Thêm sản phẩm</Link>
                </div>
            </div>
            <div className="list-product">
                <h1 className="col-sm-12">Hiển thị danh sách sản phẩm</h1>
                {
                    data.filter(list => list.tenSp.toLowerCase().includes(query)).map((list) => {
                        return (
                            <table class="table table-striped table-inverse table-responsive">
                                <thead class="thead-inverse">
                                    <tr>
                                        <th>STT</th>
                                        <th>TÊN SẢN PHẨM</th>
                                        <th>SỐ LƯỢNG</th>
                                        <th>THÔNG TIN SẢN PHẨM</th>
                                        <th>GIA SẢN PHẨM</th>
                                        <th>ẢNH SẢN PHẨM</th>
                                        <th>NHÀ SẢN XUẤT</th>
                                        <th>TÁC VỤ KHÁC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">{list.id}</td>
                                        <td>{list.tenSp}</td>
                                        <td>{list.soLuong}</td>
                                        <td>{list.thongTinSp}</td>
                                        <td>{list.nhaSX}</td>
                                        <td>{list.giaSP}</td>
                                        <td><img width={200} height={200} src={list.anh} alt="" /></td>
                                        <td>
                                            <Link to={'/editproduct/' + list.id}>Edit</Link>   ||
                                            <input type="button" onClick={(e) => {
                                                axios.get('http://localhost:8000/deleteproduct/' + list.id)
                                                    .then(res => {
                                                        alert("Xoá thành công")
                                                    })
                                                    .catch(err => {
                                                        alert("Xoá thất bai vui lòng thực hiện lại thao tác")
                                                    })
                                            }} value="Delete" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Product