
import express, {Request,Response} from "express";

const app=express();

app.use(express.json());



const PORT=8080;


app.listen(PORT,()=>{
    console.log("Server is listening to : "+PORT);
});


app.get("/testTypescript",(req:Request,res:Response):void=>{
    res.json("Hello Manmay !! Welcome to TypeScript!! ");
});