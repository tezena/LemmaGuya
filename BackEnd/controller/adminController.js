const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const AdminModel = require("../models/AdminModel");

exports.Register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please enter all required data.");
  }

  const userExist = await AdminModel.findOne({ email: email });

  if (userExist) {
    res.status(400);
    throw new Error("This email already taken.");
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await AdminModel.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data.");
  }
});

// @desc   Admin authentication

exports.Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await AdminModel.findOne({ email: email });

  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
          email: user.email,
        token:GenerateToken(user.id)
      });
    } else {
      res.status(400).json({
        Error: "Incorrect password",
      });
    }
  } else {
      res.status(400).json({
        Error:"Invalid email"
    })

  }
});




const GenerateToken = (id) => {
    return  jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1h"})
}
