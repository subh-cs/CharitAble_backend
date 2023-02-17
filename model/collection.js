const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  state: String,
  country: String,
//   upiId: String,
  gender: String,
  collectionType: Array,
});

module.exports = mongoose.model("Collections", collectionSchema);
