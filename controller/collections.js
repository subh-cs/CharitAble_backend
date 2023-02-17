const Collection = require("../model/collection");

const addCollection = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      city,
      state,
      country,
      //   upiId,
      gender,
      collectionType,
    } = req.body;
    const newCollection = await Collection.create({
      name,
      email,
      phone,
      city,
      state,
      country,
    //   upiId,
      gender,
      collectionType,
    });
    res.status(200).json({
      message: "Collection added successfully",
      newCollection,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.find();
    res.status(200).json({
      collections,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  addCollection,
  getAllCollections,
};
