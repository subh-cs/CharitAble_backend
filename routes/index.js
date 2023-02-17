const router = require("express").Router();

const {
  registerUser,
  getAllUsers,
  loginUser,
  deleteUser,
} = require("../controller/user");

const { addDonation, getAllDonations } = require("../controller/donation");
const {
  addCollection,
  getAllCollections,
} = require("../controller/collections");

// user routes
router.get("/users", getAllUsers);
router.delete("/users", deleteUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
// donation routes
router.post("/addDonation", addDonation);
router.get("/donations", getAllDonations);
// collection routes
router.post("/addCollection", addCollection);
router.get("/collections", getAllCollections);

module.exports = router;
