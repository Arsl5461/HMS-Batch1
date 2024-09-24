const express=require("express")
const app=express();
const PORT=8082;
const connectDb=require("./config/connectDb")
const doctorRouter=require("./routes/doctor.route")


connectDb();
app.use(express.json())
app.use("/doctor",doctorRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})