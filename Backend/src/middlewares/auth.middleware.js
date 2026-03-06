const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../model/blacklist.model")

async function authUser(req,res,next){
    const token = req.cookies.token
    
    const isTokenBlacklist =  await tokenBlacklistModel.findOne({token})

    if (isTokenBlacklist){
        return res.status(401).json({
            message:"token is invalid"
        })
    }

    if(!token){
        return res.status(401).json({
            message:"Token not Provided."
        })
    }
    
    try{

        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
        // decoded token contain id username email details 
        req.user = decoded // here we are not save details in user object in request we were creating new property as user and setting it as decoded
        next()
    }
    catch(err){
        return res.status(401).json({
            message:"Invalid token"
        })
    }
}

module.exports = {authUser}