import express from "express";

const router = express.Router();
router.get('/',(req,res)=>{
    res.json({message:"welcome to API Gateway"});
})
router.get('/health',(req,res)=>{
    res.json({message:"Gateway is healthy"});
});
export default router;