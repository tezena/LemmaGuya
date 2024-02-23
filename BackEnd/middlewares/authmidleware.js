const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const AdminModel = require("../models/AdminModel");

const Protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await AdminModel.findById(decode.id).select("-password");

      next();
    } catch (error) {
        console.log(error);
        res.status(401)

        throw new Error("Not authorized")
    }
    }
    
    if (!token) {
        res.status(401)
        
        throw new Error("Not authorized, no token");
    }
});


module.exports={Protect}