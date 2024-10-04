import Router, { request, response } from "express";
import booking from "./booking.js"; 

const router = Router(); 
router.post("/book", async (req, res) => { 
    try 
    { 
        const books = booking(request.body); 
        await books.save(); 
        response.send("Booking Created"); 
    }
    catch(error) 
    { 
        response.send(error); 
    } 
}); 
router.get("/data", async (req, res) => { 
    try 
    { 
        const books= await booking.find(); 
        response.send(books); 
    } 
    catch (error) 
    { 
        response.send(error); 
    } 
}); 
export default router;