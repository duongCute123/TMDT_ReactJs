const express=require("express")
const router=express.Router()
var conn=require("../../configDb/configdb")
var app=express()
router.route("/checkout").post(function (req,res) {
    var data=req.body
    var sql="insert into oder set ?"
    conn.query(sql,data,function (err,list) {
        if (err) {
            res.status(400).json("Lỗi thêm dữ liệu nhé")
            console.log(err);
        }
        else{
            res.status(200).json(list)
        }
    })
})
router.route("/getoder").get(function (req,res) {
    var sql="select * from oder"
    conn.query(sql,function (err,data) {
        if (err) throw err
        res.status(200).json(data)
    })
})
module.exports=router