const express = require('express')
// const cors = require('cors')
const app = express()
const port = 8000
// app.use(cors())

//2) MongoDB
//using mongodb on atlas
const mongoose = require('mongoose')
const {MONGOURL} = require("./keys")
mongoose.connect(MONGOURL)
//importing models/schemas
require("./models/user")
require("./models/post")
// mongoose.model("User")
// mongoose.set('strictQuery', false)
mongoose.connection.on('connected', ()=>{
    console.log("connected to mongodb")
})
mongoose.connection.on('error', (err)=>{
    console.log("connection error to mongodb", err)
})

//1) API and routes
//Creating api
// app.get("/",(req,res)=>{
//     res.send("<h1>Hiiiii</h1>")
// })
//using json middleware to parse req
app.use(express.json())
// importing routes
app.use(require("./routes/auth"))
app.use(require("./routes/post"))
//listening on port
app.listen(port,()=>{
    console.log("server on port",port)
})

//3) Middle ware
// using middle ware
// const mymiddleware = (req, res, next)=>{
//     console.log("reached middle ware 1")
//     next()
// }
// app.use(mymiddleware) //global -> for all routes
// app.get("/about",mymiddleware,(req,res)=>{ //for specific route
//     res.send("<h2>about pageee</h2>")
// })
