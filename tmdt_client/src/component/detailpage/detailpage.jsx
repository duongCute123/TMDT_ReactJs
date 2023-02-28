import React from "react";
import { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import InfoProduct from "./sestionpage/sestionpage";
import { useParams } from "react-router-dom";
const DetailPage = (props) => {
    var {id} = useParams()
    console.log(id);
    const [SinhVien, setSinhVien] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/edit/'+id)
            .then(res =>{
                setSinhVien(res.data)
            } )
            .catch(err => console.log(err))
    }, [])
    const Tim = () => {
        axios.get('http://localhost:8000/edit/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div className="detailpage">
            <InfoProduct detail={SinhVien} />
        </div>
    )
}
export default DetailPage