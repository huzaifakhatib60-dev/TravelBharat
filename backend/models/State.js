const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    capital: {
      type: String,
      required: true,
    },

    region: {
      type: String,
      enum: [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "North-East",
      ],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    famousFor: [
      {
        type: String,
      },
    ],

    bestTimeToVisit: {
      type: String,
    },

    language: [
      {
        type: String,
      },
    ],

    touristPlaces: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("State", stateSchema);