const express=require("express")
const app=express();
const PORT=8082;
const connectDb=require("./config/connectDb")


connectDb();
app.get("/test",(req,res)=>{
    res.json({message:"Hello From Server"})
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})