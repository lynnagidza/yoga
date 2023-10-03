const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Route to serve the signup form
router.get('/', (req, res) => {
  res.render('signup');
});

// Route to handle user registration form
router.post('/', async (req, res) => {
  try {
    // Get user input from the registration form
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
