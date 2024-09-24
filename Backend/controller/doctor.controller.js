const Doctor=require("../models/doctor.model")

exports.store=async(req,res)=>{
    try{
     const doctor=await Doctor.create(req.body);
res.json({messsage:"Doctor Created Successfully",status:200,success:true,doctor})
    }
    catch(err){
        console.log(err)
    }
}