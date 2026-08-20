const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      required: true,
    },

    city: {
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

    category: {
      type: String,
      required: true,
    },

    subcategory: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    history: {
      type: String,
    },

    bestTimeToVisit: {
      type: String,
    },

    timings: {
      type: String,
    },

    entryFee: {
      type: String,
    },

    location: {
      type: String,
    },

    coordinates: {
      latitude: Number,
      longitude: Number,
    },

    mainImage: {
      type: String,
    },

    gallery: [
      {
        type: String,
      },
    ],

    nearbyAttractions: [
      {
        type: String,
      },
    ],

    howToReach: {
      type: String,
    },

    travelTips: [
      {
        type: String,
      },
    ],

    rating: {
      type: Number,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Destination", destinationSchema);