import Router, { request, response } from "express";
import member from "./member.js";

const router=Router()
router.post("/member",async(request,response)=>{
    try{
        const mem=member(request.body);
        await mem.save();
        response.send("new member registertd");
    }
    catch(error)
    {
        response.send(error);
    }
});
router.get("/data",async(request,response)=>{
    try{
        const mem=await member.find();
        response.send(mem);
    }
    catch(error){
        response.send(error);
    }
});
export default router;