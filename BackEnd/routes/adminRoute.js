const addminController = require("../controller/adminController")
const express = require("express")
const router = express.Router()

router.post("/register", addminController.Register)
router.post("/login", addminController.Login);



module.exports=router