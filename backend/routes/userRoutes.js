const express = require("express");

const router = express.Router();

const {
  getProfile,
  getAllUsers,
  getUserById,
} = require("../controllers/userController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

router.get("/profile", protect, getProfile);

router.get("/", protect, adminOnly, getAllUsers);

router.get("/:id", protect, adminOnly, getUserById);

module.exports = router;