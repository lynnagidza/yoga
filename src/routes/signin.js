// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const passport = require('passport');
// const User = require('../models/user');

// // Route to handle user login form
// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) {
//       console.error('Error authenticating user:', err);
//       return res.status(500).json({ message: 'Internal server error' });
//     }

//     if (!user) {
//       return res.status(401).json({ message: 'Authentication failed' });
//     }

//     req.logIn(user, (err) => {
//       if (err) {
//         console.error('Error logging in user:', err);
//         return res.status(500).json({ message: 'Internal server error' });
//       }

//       return res.status(200).json({ message: 'Login successful' });
//     });
//   })(req, res, next);
// });

// module.exports = router;
