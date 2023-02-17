const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  state: String,
  country: String,
  upiId: String,
  gender: String,
  donationType: Array,
});

module.exports = mongoose.model("Donations", donationSchema);
