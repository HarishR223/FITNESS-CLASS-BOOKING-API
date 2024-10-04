import mongoose from "mongoose";
const fitnessSchema=new mongoose.Schema({
    className:{
        type:String,
        required:true,
    },
    trainerName:{
        type:String,
        required:true,
    },
    maxParticipants:{
        type:Number,
        requried:false,
    },
    classType:{
        type:String,
        required:false,
    }
})
const fitness=mongoose.model("FITNESS",fitnessSchema)
export default fitness;