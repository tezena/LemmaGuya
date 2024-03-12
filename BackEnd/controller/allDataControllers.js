const {
    imagesModel,
    blogsModel,
    artistModel,
    eventsModel,
    researchModel,
    studentModel
  } = require("../models/models");
  
const asyncHandler=require("express-async-handler");


exports.GetAll=asyncHandler(async (req,res)=>{
    
     const artisNum=await  artistModel.countDocuments();
     const imagesNum=await imagesModel.countDocuments();
     const blogsNum=await blogsModel.countDocuments();
     const eventsNum=await eventsModel.countDocuments();
     const researchsNum=await researchModel.countDocuments();


     res.status(200).json({
        artisNum,
        imagesNum,
        blogsNum,
        eventsNum,
        researchsNum
     })


})