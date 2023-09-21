// // controllers/userController.js
// const User = require('../models/User'); // Assuming your User model is in models/User.js
// const bcrypt = require('bcrypt');

// // User registration
// exports.registerUser = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     // Save the user to the database
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// // User login
// exports.loginUser = (req, res) => {
//   // Implement login logic here using Passport.js or your chosen authentication strategy
//   // Return appropriate responses based on login success or failure
// };

// // Other user-related controller functions can be added here
