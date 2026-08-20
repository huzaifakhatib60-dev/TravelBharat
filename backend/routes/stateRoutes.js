const express = require("express");

const router = express.Router();

const {
  getAllStates,
  getStateById,
  getStateByName,
  createState,
  updateState,
  deleteState,
} = require("../controllers/stateController");


router.get("/", getAllStates);

router.get("/name/:name", getStateByName);

router.get("/:id", getStateById);

router.post("/", createState);

router.put("/:id", updateState);

router.delete("/:id", deleteState);


module.exports = router;