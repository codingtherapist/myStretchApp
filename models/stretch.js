
const mongoose = require("mongoose");

const StretchSchema = new mongoose.Schema({
  stretchname: {
    type: string,
    required: true,
  },
  activityBodyPart: {
    type: string
  },
  activityURL: {
    type: string,
    required: true,
  },
  activityDescription: {
    type: string,
    required: true,
  },
});

module.exports = mongoose.model("stretch", CommentSchema);
