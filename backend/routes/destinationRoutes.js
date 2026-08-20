const express = require("express");

const router = express.Router();

const {
  searchDestinations,
  getAllDestinations,
  getDestinationById,
  getDestinationsBySubcategory,
  createDestination,
  updateDestination,
  deleteDestination,
} = require("../controllers/destinationController");

router.get("/", getAllDestinations);

router.get("/search", searchDestinations);

router.get(
  "/category/:subcategory",
  getDestinationsBySubcategory
);

router.get("/:id", getDestinationById);

router.post("/", createDestination);

router.put("/:id", updateDestination);

router.delete("/:id", deleteDestination);

module.exports = router;