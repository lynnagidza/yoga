const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const CartItem = require('../models/cart-item');

router.get('/', (req, res) => {
  res.render('signup');
});

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.redirect('/signin');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      // username,
      email,
      password: hashedPassword,
      role: 'user',
      created_at: Date.now(),
      updated_at: Date.now(),
    });

    await newUser.save();

    const cartItemsToUpdate = await CartItem.find({ guestId: req.guestId });
    if (cartItemsToUpdate.length > 0) {
      await CartItem.updateMany({ guestId: req.guestId }, { userId: newUser.id });
    }
    res.redirect(req.get('referer'));
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
