const userModel = require('../model/user.model')
const tokenBlacklistModel = require('../model/blacklist.model')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();




/**
 * @name registerUserController
 * @description register newuser ,expects username , email and password in the require request body
 * @access Public
*/
async function registerUserController(req,res){
const {username,email,password} = req.body
if(!username||!email||!password){

    return res.status(400).json({
        message:"Please provide username , email and password "
    })
}


    const isUserAlreadyExist=await userModel.findOne({
        $or:[{username},{email}]
    })

    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"Account already exist with this email address or username  "
        })
    }

    const hash = await  bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password:hash
    }) 

    // console.log(process.env.JWT_SECRET_KEY)

    const token = jwt.sign({id:user._id,username:username},
        process.env.JWT_SECRET_KEY,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)
    
    res.status(201).json({
        message:"user register sucessfully ",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })
     
}


/**
 * @name loginUserController
 * @description login user ,expects email and password in the require request body
 * @access Public
*/
async function loginUserController(req,res){
    const{email ,password} = req.body

    if (!email||!password){
        return res.status(400).json({
            message:"Enter the email and password "
        })
    }

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

     const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid email or password1"
        })
    }

    const token = jwt.sign(
        {id:user._id,username:user.username},
        process.env.JWT_SECRET_KEY,
        {expiresIn:"1d"}
    )
                                                           
    res.cookie("token",token)

    res.status(200).json({
        message:"User LoggedIn successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })

}


async function logoutUserController(req,res){
    console.log(req.cookies.token)
    const token = req.cookies.token
    if(token){
         await tokenBlacklistModel.create({ token })
    }

    res.clearCookie("token")

    res.status(200).json({
        message:"User logged out successfully"
    })
}




module.exports ={
    registerUserController,
    loginUserController,
    logoutUserController

}