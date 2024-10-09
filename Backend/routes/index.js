const express=require("express")
const router=express.Router();
const doctorRoute=require("./doctor.route")
const userRoute=require("./user.route")
const contactRoute=require("./contact.route")
const dashboardRoute=require("./dashboard.route")


router.use("/doctor",doctorRoute)
router.use("/user",userRoute)
router.use("/contact",contactRoute)
router.use("/dashboard",dashboardRoute)


module.exports=router;