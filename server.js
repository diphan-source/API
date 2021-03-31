import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'


const db_URL = "mongodb://localhost:27017/API"
const app = express()

app.use(bodyParser.json())

app.use((req,res,next)=>{

    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods","GET,HEAD,POST,OPTIONS,PUT")
    res.header("Access-Control-Allow-Headers","Origin,X-requested-with,Content-Type,Accept,Authorization")

    next()
})

function connectDB(){

    console.log("connect to my database")

    mongoose.connect(db_URL, {

        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false,
        useCreateIndex:true
    })
    .then(()=>{

        console.log("connected to database")
    })
    .catch((err)=>{
        console.log("connection to the database failed")
        console.log("error details: ", err)
        console.log("Re Establishing connection")
        connectDB()
    })
    
}
connectDB()

//localhost:2000/API/diphan

app.use('/API/diphan',(req,res)=>{
    res.json({
        Message: "Testing"
    })
    
})

//app.use(cors())
app.listen(2000, ()=>{
    console.log("server running on port 2000")
})