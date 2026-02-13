import express from 'express';
import cors from 'cors';
import bibleRoutes from "./routes/bible.routes.js";
const app=express();

const port=3000;
app.use(cors());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));

app.use(express.json());

app.use("/api", bibleRoutes);
  

app.get("/",(res,req)=>{
    res.json("hello world")
})

app.listen(port,()=>{
    console.log(`server is runing at port ${port}`)
})