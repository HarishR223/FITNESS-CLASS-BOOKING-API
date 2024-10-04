import { Router } from "express";

import member from "./member.js"
const router=Router()
router.put("/put/:id",async(request,response)=>{
    try{
        const mem=await member.findByIdAndUpdate(
            request.params.id,
            request.body,{
                new:true,
                runValidators:true,
            });
        if(!mem){
            return response.status(404).send("member is not found");
        }
        response.status(200).send(fit)
    }
    catch(error)
    {
        response.status(400).send(error)
    }
});
router.delete("/del/:id",async(request,response)=>{
    try
    {
        const mem=await member.findByIdAndDelete(
            request.params.id
        )
        if(!mem)
        {
            return response.status(404).send("the member is not available...");
        }
        response.send("the member is removed sucessfully...");
    }
    catch(error)
    {
        response.send(error);
    }
})
export default router;