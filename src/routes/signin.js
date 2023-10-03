const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');

router.get('/', (req, res) => {
  res.render('signin');
});

router.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/signin',
  failureFlash: true,
  successFlash: 'Welcome back!',
}));

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'You have been logged out');
  res.redirect('/');
});

module.exports = router;
