var express = require("express")
var router = express.Router()
var conn = require("../../configDb/configdb")
var cors = require('cors')
var app=express()
var bodyParse = require("body-parser")
const { json } = require('body-parser')
//Kết nối với localhost
app.use(cors())
//Part dữ liệu từ client gửi về
app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())
router.route("/getproduct").get(function (req, res) {
    var sql = "select * from product"
    conn.query(sql, function (err, product) {
        if (err) {
            res.status(400).json("Lỗi lây sản phẩm")
        } else {
            res.status(200).json(product)
        }
    })
})
// tìm sản phẩm khi biết id
router.route("/seachproduct/:id").get(function (req, res) {
    var id = req.params.id
    console.log(id);
    var sql = "select * from product where id=" + id
    conn.query(sql, function (err, product) {
        if (err) {
            res.status(400).json("Lỗi tìm dữ liêu")
            console.log(err);
        } else {
            res.status(200).json(product)
        }
    })
})
//Cập nhật sản phẩm
router.route("/updateproduct/:id").post(function (req, res) {
    var id=req.params.id
    var sql = "update product set `tenSp`=?,`soLuong`=?,`thongTinSp`=?,`nhaSX`=?,`giaSP`=?,`anh`=? where id=?"
    const data=[
        req.body.tenSp,
        req.body.soLuong,
        req.body.thongTinSp,
        req.body.nhaSX,
        req.body.giaSP,
        req.body.anh,
    ]
    console.log(data);
    conn.query(sql,[...data,id], function (errr, sinhvien) {
        if (errr) {
            res.status(400).json("Loi cap nhat du lieu nha")
            console.log(errr);
        } else {
            res.status(200).json(sinhvien)
            console.log(sinhvien);
        }
    })
})
// them san pham nhe
router.route("/addproduct").post(function (req, res) {
    var data = req.body
    console.log(data);
    var sql = "insert into product set ?"
    conn.query(sql,data, function (err, product) {
        if (err) {
            res.status(400).json("Loi them du lieu nha")
            console.log(err);
        } else {
            res.status(200).json(product)
        }
    })
})
//xoa sản phẩm khi biết id
router.route("/deleteproduct/:id").get(function (req, res) {
    var id =req.params.id
    console.log(id);
    var sql = "delete from product where id=" + id
    conn.query(sql, function (err, product) {
        if (err) {
            res.status(400).json("Xoá thất bại nhé")
        } else {
            res.status(200).json(product)
        }
    })
})
module.exports = router