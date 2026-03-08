const express = require("express")
const cookieParser=require("cookie-parser")
const cors = require("cors")


const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173', //url going to access backend
    credentials:true
}))

// require or importing  all routes here 
const authRouter = require('./routes/auth.routes')

// using all routes here or handling routes 
app.use("/api/auth",authRouter)

module.exports = app