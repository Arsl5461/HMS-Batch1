const express=require("express")
const router=express.Router();
const controller=require("../controller/doctor.controller")

router.post("/",controller.store)
router.get("/",controller.index)
router.get("/:id",controller.get)

module.exports=router