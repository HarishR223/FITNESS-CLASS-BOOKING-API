import { Router,request,response} from "express";

import booking from "./booking.js";
const router=Router()
router.put("/put/:id",async(request,response)=>{
    try{
        const books=await booking.findByIdAndUpdate(
            request.params.id,
            request.body,{
                new:true,
                runValidators:true,
            });
        if(!books){
            return response.status(404).send("member is not found");
        }
        response.status(200).send(books)
    }
    catch(error)
    {
        response.status(400).send(error)
    }
});
router.delete("/del/:id",async(request,response)=>{
    try
    {
        const books=await booking.findByIdAndDelete(
            request.params.id
        )
        if(!books)
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