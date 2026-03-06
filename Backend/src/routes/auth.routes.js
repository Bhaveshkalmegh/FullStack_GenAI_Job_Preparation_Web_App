// going to contain all authentication related api

const express = require('express')
const authRouter = express.Router()
const authController = require('../controller/auth.controller.js')
const authMiddleware = require('../middlewares/auth.middleware.js')


/** 
*@route POST /api/auth/register
*@description Register  a new user 
*@access Public 
*/

authRouter.post('/register',authController.registerUserController)

/**
 * @route  post /api/auth/login
 * @description login user with email and password 
 * @access public 
 * */ 
authRouter.post('/login',authController.loginUserController)


/**
 * @route get /api/auth/logout
 * @description clear token user cookie and add the token in blacklist 
 * @access public  
*/


authRouter.get("/logout",authController.logoutUserController)


/**
 * @route GET /api/get-me
 * @description get the current logged in user details
 * @access private
*/
// middleware decoding requesting token and setting it in req.user property
// controller verifying requesting is a user or not  if user generate success response
authRouter.get("/get-me", authMiddleware.authUser,authController.getMeController )


module.exports = authRouter