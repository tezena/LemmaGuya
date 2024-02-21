const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add a name."],
  },
  email: {
    type: String,
      required: [true, "please add an email."],
    unique:true
  },
  password: {
    type: String,
    required: [true, "please add password."],
    },
}, {
    timestamps:true
});

module.exports = mongoose.model('Admin', AdminSchema);
