const Donation = require("../model/donation");

const addDonation = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      city,
      state,
      country,
      upiId,
      gender,
      donationType,
    } = req.body;
    const newDonation = await Donation.create({
      name,
      email,
      phone,
      city,
      state,
      country,
      upiId,
      gender,
      donationType,
    });
    res.status(200).json({
      message: "Donation added successfully",
      newDonation,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json({
      donations,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  addDonation,
  getAllDonations,
};
