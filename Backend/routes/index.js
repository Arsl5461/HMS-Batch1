const express=require("express")
const router=express.Router();
const doctorRoute=require("./doctor.route")
const userRoute=require("./user.route")


router.use("/doctor",doctorRoute)
router.use("/user",userRoute)


module.exports=router;