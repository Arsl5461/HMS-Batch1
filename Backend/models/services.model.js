const mongoose=require("mongoose")

const servicesSchema=mongoose.Schema({
title:{
    type:String
},
ext:{
    type:String
},
description:{
    type:String
},
image:{
    type:String
}
})

module.exports=mongoose.model("Services",servicesSchema);