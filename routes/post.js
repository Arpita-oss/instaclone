const mongoose = require("mongoose")


const postSchema= mongoose.Schema({
    picture:String,
    user:{
        type:mongoose.Schema.Types.ObjectId, ref:"user"
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId, ref:"user"
        }
    ],
    date:[{
        type:Date,
        default:Date.now()
    }],
    caption:String
})

module.exports= mongoose.model("posts", postSchema)