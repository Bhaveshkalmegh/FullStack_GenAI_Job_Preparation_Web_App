const express = require("express")

const app = express()

app.use(express.json())


// require or importing  all routes here 
const authRouter = require('./routes/auth.routes')

// using all routes here or handling routes 
app.use("/api/auth",authRouter)

module.exports = app