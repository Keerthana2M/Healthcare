const express=require("express");
const router=express.Router();
router.post("/signup",require("../controller/registercontroller"));
router.post("/signin",require("../controller/logincontroller"));
module.exports=router;

    
