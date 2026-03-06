const mongoose = require('mongoose')
const { applyTimestamps } = require('./user.model')

const blacklistTokenSchema = new mongoose.Schema({

    token:{
        type: String,
        required:[true,"token is required to be added in blacklist"],
    },
},
    {
        timestamps:true
    }
) 


const tokenBlacklistModel = mongoose.model("blacklistTokens",blacklistTokenSchema)


module.exports = tokenBlacklistModel;