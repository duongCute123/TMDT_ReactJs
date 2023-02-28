var mysql=require("mysql")
var conn=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'khanhly1',
    database: 'students'
})
conn.connect(err=>{
    if(err) throw err
    console.log("Ket noi voi co so du lieu thanh cong nha");
})
module.exports=conn