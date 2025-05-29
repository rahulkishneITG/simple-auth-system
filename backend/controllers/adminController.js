const user = require("../models/user.js");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await user.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};