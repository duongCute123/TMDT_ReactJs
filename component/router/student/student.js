var express=require("express")
var conn=require("../../configDb/configdb")
var router=express.Router()
var app=express()
var cors = require('cors')
var bodyParse = require("body-parser")
const { json } = require('body-parser')
//Kết nối với localhost
app.use(cors())
router.route("/addUser").post(function (req,res) {
    var data=req.body
    var sql="insert into student set first_name=?,last_name=?,email=?,ussername=?,paswords=? value "+data
    conn.query(sql,function (err,student) {
        if (err) {
            res.status(400).json("Lỗi lấy dữ liệu")
        }else{
            res.status(200).json(student)
        }
    })
})
//Lấy danh sách các sinh viên nhé
router.route("/getStudent").get(function (req,res) {
    var sql="select * from student"
    conn.query(sql,function (err,student) {
        if (err) {
            res.status(400).json("Lỗi lấy dữ liệu")
        }else{
            res.status(200).json(student)
        }
    })
})
// Lây sinh viên khi biết id
router.route("/getStudent/:id").get(function (req,res) {
        var id=req.params.id
        var sql="select * from student where id="+id
        conn.query(sql,function (err,student) {
            if (err) {
                res.status(400).json("Lỗi tìm theo id nhá")
                console.log(err);
            }else{
                res.status(200).json(student)
            }
        })
})
//Xoá sinh viên khi biết id nhá
router.route("/deleteStudent:id").post(function (req,res) {
    var id=req.params.id;
    var sql="delete student where id="+id
    conn.query(sql,function (err,student) {
        if (err) {
            res.status(400).json("Xoá thất bại nhé")
        }else{
            res.status(200).json("Xoá thành công nhá")
        }
    })
})
module.exports=router