const User = require("../models/user.model")
const bcrypt = require("bcryptjs")

exports.store = async (req, res) => {
    try {
        let { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        req.body.password = hashedPassword;
        const user = await User.create(req.body);
        res.json({ messsage: "User Created Successfully", status: 200, success: true, user })
    }
    catch (err) {
        console.log(err)
    }
}
exports.login=async(req,res)=>{
    try{
const {email,password}=req.body;
const user=await User.findOne({email:email})
if(!user){
    return res.json({message:"User not Found",success:false,status:400})
}
const comparePassword=await bcrypt.compare(password,user.password)
if(comparePassword){
    res.json({message:"User Login Succesfully",success:true,status:200})
}
else{
    return res.json({message:"Password Incorrect",success:false,status:403})
}

    }
    catch(err){
        console.log(err)
    }
}

exports.index = async (req, res) => {
    try {
        const users = await User.find();
        return res.json({ message: "Users Fetch Successfully", status: 200, success: true, users })
    }
    catch (err) {
        console.log(err)
    }
}

exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ _id: id })
        if (!user) {
            return res.json({ message: "User Not Found", status: 404, success: false })
        }
        return res.json({ message: "User Fetched Successfully!", status: 200, success: true, user })
    }
    catch (err) {
        console.log(err)
    }
}

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndDelete({ _id: id })
        if (!user) {
            return res.json({ message: "User Not Found", status: 404, success: false })
        }
        return res.json({ message: "User Deleted Successfully!", status: 200, success: true })
    }
    catch (err) {
        console.log(err)
    }
}


exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
        if (!user) {
            return res.json({ message: "User Not Found", success: false, status: 404 })
        }
        return res.json({ message: "User Updated Successfully", success: true, status: 200 })
    }
    catch (err) {
        console.log(err)
    }
}