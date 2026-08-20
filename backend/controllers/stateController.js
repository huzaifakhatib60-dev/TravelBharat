const State = require("../models/State");

// GET ALL STATES
const getAllStates = async (req, res) => {
  try {
    const states = await State.find();

    res.status(200).json(states);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET STATE BY ID
const getStateById = async (req, res) => {
  try {
    const state = await State.findById(req.params.id);

    if (!state) {
      return res.status(404).json({
        message: "State not found",
      });
    }

    res.status(200).json(state);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET STATE BY NAME
const getStateByName = async (req, res) => {
  try {
    const state = await State.findOne({
      name: {
        $regex: `^${req.params.name}$`,
        $options: "i",
      },
    });

    if (!state) {
      return res.status(404).json({
        message: "State not found",
      });
    }

    res.status(200).json(state);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// CREATE STATE
const createState = async (req, res) => {
  try {
    const state = await State.create(req.body);

    res.status(201).json(state);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE STATE
const updateState = async (req, res) => {
  try {
    const state = await State.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!state) {
      return res.status(404).json({
        message: "State not found",
      });
    }

    res.status(200).json(state);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE STATE
const deleteState = async (req, res) => {
  try {
    const state = await State.findByIdAndDelete(req.params.id);

    if (!state) {
      return res.status(404).json({
        message: "State not found",
      });
    }

    res.status(200).json({
      message: "State deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// EXPORT
module.exports = {
  getAllStates,
  getStateById,
  getStateByName,
  createState,
  updateState,
  deleteState,
};