const express =require("express");
const router=express.Router()
const allDataControllers=require("../controller/allDataControllers")


router.get("/allDataNum",allDataControllers.GetAll)


module.exports=router