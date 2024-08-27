const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds (standard practice)
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password using the generated salt
    return hashedPassword;
  } catch (err) {
    throw new Error("Error hashing the password");
  }
};

module.exports = hashPassword;
