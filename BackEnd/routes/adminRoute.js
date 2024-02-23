const addminController = require("../controller/adminController")
const express = require("express")
const router = express.Router()
const { Protect } =require("../middlewares/authmidleware")

router.post("/register", addminController.Register)
router.post("/login", addminController.Login);
router.get("/getAdmin",Protect,addminController.GetAdmin)


module.exports=router