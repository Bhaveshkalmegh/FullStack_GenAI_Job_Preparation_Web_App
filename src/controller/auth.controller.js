const userModel = require('../model/user.model')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

/**
 * @name registerUserController
 * @description register newuser ,expects username , email and password in the require request body
 * @access Public
*/



async function registerUserController(req,res){
const {username,email,password} = req.body
if(userModel||email||password){

    return res.status(400).json({
        message:"Please provide username , email and password "
    })
}


    const isUserAlreadyExist=await userModel.FindOne({
        $or:[{username},{email}]
    })

    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"Account already exist with this email address or username  "
        })
    }

    const hash = await  bcryptjs.hash(password,10)

    const user = await userModel.create({
        username:username,
        email:email,
        password:hash
    }) 

    const token = jwt.sign({id:user._id,username:username},
        process.env.JWT.SECRET.KEY,
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

module.export ={registerUserController}