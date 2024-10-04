import mongoose from "mongoose"; 
const memberSchema = new mongoose.Schema({ 
    name: { 
        type: String, 
        required: true, 
    }, 
    email: { 
        type: String, 
        Required: true, 
    }, 
    phoneNumber: { 
        type: Number, 
        required: true, 
    }, 
}); 
const member = mongoose.model("Member", memberSchema); 
export default member;