const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;
require('../utils/auth');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return done(null, false, { message: 'Invalid email or password' });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

router.get('/', (req, res) => {
  req.session.returnTo = req.headers.referer;
  res.render('signin');
});

router.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/signin',
  // failureFlash: true,
  // successFlash: 'Welcome back!',
}));

router.get('/logout', (req, res) => {
  req.logout();
  // req.flash('success', 'You have been logged out');
  res.redirect('/');
});

module.exports = router;
