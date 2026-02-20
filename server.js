import app from "./src/app.js";
import connectDB from "./src/config/db.js";
const PORT=5000;

const startServer=async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
            
        });
    }
    catch(err){
        console.log("error starting the server",err)
    }
};

startServer();
