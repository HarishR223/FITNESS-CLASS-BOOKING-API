import mongoose from "mongoose"
const bookingSchema = new mongoose.Schema({ 
    className: { 
        type: String, 
        required: true, 
    }, 
    memberName: { 
        type: String, 
        required: true, 
    }, 
    status: { 
        type: String, 
        enum: ["confirmed", "canceled"], 
        required: true, 
    }, 
}); 
const booking = mongoose.model("Booking", bookingSchema); 
export default booking; 