var express = require("express")
var router = express.Router()
var conn = require("../../configDb/configdb")
var cors = require('cors')
var app = express()
var bodyParse = require("body-parser")
const { json } = require('body-parser')
//Kết nối với localhost
app.use(cors())
app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())
//Đăng nhập với tài khoản có nhé
router.route("/login").post(function (req, res) {
    var ussername = req.body.ussername
    var passwords = req.body.passwords
    var data = req.body
    console.log(data);
    console.log(ussername, passwords);
    var sql = `select * from student where ussername="${ussername}" and passwords="${passwords}"`
    if (ussername && passwords) {
        conn.query(sql, function (err, data) {
            if (err) throw err
            if (data) {
                res.status(200).json(data)
            } else {
                res.json("Lỗi tên đăng nhập or mật khẩu")
            }
        })
    }
    if (ussername === null && passwords === null) {
        res.json("Vui lòng nhập tài khoản or mật khẩu")
    }
})
module.exports = router