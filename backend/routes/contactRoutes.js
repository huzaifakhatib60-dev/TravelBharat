const express = require("express");

const router = express.Router();

const {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");


// Send contact message
router.post("/", createContact);

// Get all messages
router.get("/", getAllContacts);

// Get message by ID
router.get("/:id", getContactById);

// Update message status
router.put("/:id", updateContactStatus);

// Delete message
router.delete("/:id", deleteContact);


module.exports = router;