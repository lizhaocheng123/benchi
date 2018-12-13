const express=require("express")
const pool=require("./pool")
const cors=require("cors")
var app=express()

app.use(express.static(__dirname+"/public"))
app.use(cors({
    origin:["http://127.0.0.1:3001","http://localhost:3001"],
    credentials:true
}))
app.listen(3000)

app.get("/image",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3000/img/CLSKV.jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/d-mb-homepage-all-vehicles-bg-img.jpg"},
        {id:3,img_url:"http://127.0.0.1:3000/img/KV.jpg"}
    ];
    res.send(obj)
})