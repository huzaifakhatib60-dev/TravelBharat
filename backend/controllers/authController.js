const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

exports.registerUser = async (req, res) => {
  try {
    const name = req.body.name
      ? req.body.name.trim()
      : "";

    const email = req.body.email
      ? req.body.email.trim().toLowerCase()
      : "";

    const password = req.body.password || "";

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    const existingUser = await User.findOne({
      email: email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      role: "user",
    });

    const token = generateToken(user);

    return res.status(201).json({
      message: "User registered successfully",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

      token: token,
    });
  } catch (error) {
    console.error("Registration error:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const email = req.body.email
      ? req.body.email.trim().toLowerCase()
      : "";

    const password = req.body.password || "";

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user);

    return res.status(200).json({
      message: "Login successful",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

      token: token,
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};