
const mongoose = require("mongoose");

const StretchSchema = new mongoose.Schema({
  stretchname: {
    type: String,
    required: true,
  },
  stretchType: {
    type: String
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  stretchDescription: {
    type: String,
    required: true,
  },
  assistanceLevel:{
    type: [String],
    required: false,
},  
targetting:{
    type: [String],
    required: false,
}, 
  updateStretchDescription: {
    type: String,
    required: false,
  },
    original: {
      type: Boolean,
      required: true,
  },
});

module.exports = mongoose.model("Stretches", StretchSchema);


