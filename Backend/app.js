const express=require("express")
const app=express();
const PORT=8082;
const connectDb=require("./config/connectDb")
const mainRouter=require("./routes/index")
const cors=require("cors")


connectDb();
app.use(cors());
app.use(express.json())
app.use("/api/admin",mainRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})