const User = require("../models/User");
const hashPassword = require("../utils/hashPassword");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Hash the password using the utility function
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(500).send("Server error");
  }
};

module.exports = {
  registerUser,
};
