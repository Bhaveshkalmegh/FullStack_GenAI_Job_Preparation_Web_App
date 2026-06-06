
require("dotenv").config()
const  app = require("./src/app")
const connectToDB = require("./src/config/database")
const generateInterviewReport = require("./src/services/ai.service")
const {resume,selfDescription,jobDescription} = require("./src/services/temp")/
connectToDB()

const view = async()=>{
    
    const c = JSON.parse(await generateInterviewReport(resume,selfDescription,jobDescription))
    console.log(c)
} 


view()

app.listen(3000,()=>{
    console.log("Server is running onn port 3000")
})