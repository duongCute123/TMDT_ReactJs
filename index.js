var express=require("express")
var app=express()
var router=express.Router()
var conn=require("./component/configDb/configdb")
var route=require("./component/router/student/student")
var routeAuth=require("./component/router/auth/login")
var routerProduct=require("./component/router/product/product")
var routerOder=require("./component/router/oder/oder")
var cors = require('cors')
var bodyParse = require("body-parser")
const { json } = require('body-parser')
//Kết nối với localhost
app.use(cors())
//Part dữ liệu từ client gửi về
app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())
app.get("/hello",function (req,res) {
    res.json("Hello các bạn nhá")
})
app.use("",route)
app.use("",routeAuth)
app.use("",routerProduct)
app.use("",routerOder)
var service=app.listen(8000,function (host,port) {
    var host=service.address().address
    var port=service.address().port
    console.log("Kết nối với node thành công nhé",host,port);
})