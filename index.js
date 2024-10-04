import express from "express";
 
import dotenv from "dotenv";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import ind from "./classModel1/index1.js";
import ind2 from "./classModel2/index2.js";
import put from "./classModel2/put_and_delete.js";
import ind3 from "./classModel3/index.js";
import del from "./classModel3/put_and_delete.js";

const app= express();

app.use(bodyparser.json());
dotenv.config();
const PORT=process.env.PORT;

app.use("/crud",ind);
app.use("/crud1",ind2);
app.use("/crud2",put);
app.use("/crud3",ind3);
app.use("/crud4",del);


mongoose.connect('mongodb+srv://AKIL:akilesh@cluster0.nk4i7.mongodb.net/members').then(() => {
    console.log("MongoDB connected"); 
});
app.listen(PORT,()=>{
    console.log("Server started..."+PORT);
    
});

