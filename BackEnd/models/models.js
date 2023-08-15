const mongoose = require("mongoose")



const imagesSchema = mongoose.Schema({
    imageUrl: String,
    title: String,
    description: String,
    artist_name: String,
    type: String,
   
}, {
    versionKey: false // This will prevent the __v field from being added to documents
})

const imagesModel = mongoose.model("image", imagesSchema);




const blogsSchema = mongoose.Schema({
    imageUrl: String,
    title: String,
    author:String,
    description: String,
    datePosted: {
        type: Date,
        default: Date.now
    },
}, {
    versionKey: false // This will prevent the __v field from being added to documents
})

const blogsModel = mongoose.model("blog", blogsSchema);



const artistSchema = mongoose.Schema({
    name: String,
    imageUrl:String,
    bio: String,
    phone: String,
    location:String,
},{
    versionKey: false // This will prevent the __v field from being added to documents
})

const artistModel = mongoose.model("artist", artistSchema);




const eventsSchema = mongoose.Schema({
    imageUrl: String,
    title: String,
    description: String,
    date: Date,
    location:String,
    datePosted: {
        type: Date,
        default: Date.now
    },
}, {
    versionKey: false // This will prevent the __v field from being added to documents
}
)

const eventsModel = mongoose.model("event", eventsSchema);


const researchSchema = new mongoose.Schema({
    title: String,
    author: String,
    publicationDate: String,
    summary: String,
    fileUrl: String,
    imageUrl: String,
    postedDate: {
        type: Date,
        default:Date.now,
    }
  }, {
    versionKey: false // This will prevent the __v field from being added to documents
});
  
const researchModel = mongoose.model('research', researchSchema);


const addressSchema = new mongoose.Schema({
    phone: String,
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                // Basic email format validation using a regular expression
                return /\S+@\S+\.\S+/.test(value);
            },
            message: props => `${props.value} is not a valid email address!`,
        }
    },
    location:String,

  })
  
const addressModel = mongoose.model('address', addressSchema);
  



module.exports = {
    imagesModel,blogsModel,artistModel,eventsModel,researchModel,addressModel
      
  }

