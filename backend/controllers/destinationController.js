const Destination = require("../models/Destination");

// Get All Destinations
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();

    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Destination By ID
exports.getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({
        message: "Destination Not Found",
      });
    }

    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Destinations By Subcategory
exports.getDestinationsBySubcategory = async (req, res) => {
  try {
    const destinations = await Destination.find({
      subcategory: {
        $regex: `^${req.params.subcategory}$`,
        $options: "i",
      },
    });

    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create Destination
exports.createDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body);

    res.status(201).json(destination);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Update Destination
exports.updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!destination) {
      return res.status(404).json({
        message: "Destination Not Found",
      });
    }

    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Destination
exports.deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndDelete(
      req.params.id
    );

    if (!destination) {
      return res.status(404).json({
        message: "Destination Not Found",
      });
    }

    res.status(200).json({
      message: "Destination Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Search and Filter Destinations
exports.searchDestinations = async (req, res) => {
  try {
    const {
      search,
      state,
      category,
      region,
      featured,
    } = req.query;

    const filter = {};

    if (search) {
      filter.$or = [
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
        {
          city: {
            $regex: search,
            $options: "i",
          },
        },
        {
          description: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    if (state) {
      filter.state = {
        $regex: `^${state}$`,
        $options: "i",
      };
    }

    if (category) {
      filter.category = {
        $regex: `^${category}$`,
        $options: "i",
      };
    }

    if (region) {
      filter.region = {
        $regex: `^${region}$`,
        $options: "i",
      };
    }

    if (featured !== undefined) {
      filter.isFeatured = featured === "true";
    }

    const destinations = await Destination
      .find(filter)
      .sort({ createdAt: -1 });

    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};