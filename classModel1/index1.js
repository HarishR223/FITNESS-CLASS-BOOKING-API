import Router, { request, response } from "express";

import fitness from "./fitness.js";

const router=Router()
router.post("/fit",async(request,response)=>{
    try{
        const fit=fitness(request.body);
        await fit.save();
        response.send("new member registertd");
    }
    catch(error)
    {
        response.send(error);
    }
});
router.get("/data",async(request,response)=>{
    try
    {
        const fit=await fitness.find();
        response.send(fit);
    }
    catch(error)
    {
        response.send(error);
    }
});
export default router;