import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/gatewayDB");
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.log("Error Connceting to MongoDB",error);

    }
};

export default connectDB;