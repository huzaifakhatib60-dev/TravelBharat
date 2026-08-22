const app = require("../backend/app");
const connectDB = require("../backend/config/db");

let dbPromise;

module.exports = async (req, res) => {
  try {
    if (!dbPromise) {
      dbPromise = connectDB();
    }

    await dbPromise;

    return app(req, res);
  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    console.error(error);

    return res.status(500).json({
      message: "Database connection failed",
      error: error.message,
    });
  }
};