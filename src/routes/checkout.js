const express = require('express');

const router = express.Router();
const { countries, towns } = require('../models/country');
const {
  viewCart, calculateTotalPrice,
} = require('../controllers/cartController');
// const {
//   createUsers, findUser, updateUser, deleteUser,
// } = require('../controllers/userController');

router.get('/', async (req, res) => {
  try {
    const { guestId } = req.cookies;
    const country = req.query.country || '';

    const cartItems = await viewCart(null, guestId);
    const subtotal = calculateTotalPrice(cartItems);
    const deliveryFee = 7;
    const grandTotal = subtotal + deliveryFee;

    res.render('checkout', {
      countries,
      towns,
      cartItems,
      subtotal,
      deliveryFee,
      grandTotal,
      country,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error getting user details:', err });
  }
});

router.get('/getUpdatedData', async (req, res) => {
  try {
    const { guestId } = req.cookies;
    const { country } = req.query;
    let filteredCities = [];
    let deliveryFee = 0;
    const cartItems = await viewCart(null, guestId);
    if (country) {
      filteredCities = towns.filter((city) => city.country === country);
      deliveryFee = filteredCities.length > 0 ? filteredCities[0].deliveryFee : 0;
    }

    // Calculate the grand total based on the selected city
    const grandTotal = calculateTotalPrice(cartItems) + deliveryFee;

    res.json({
      filteredCities,
      deliveryFee,
      grandTotal,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error getting user details:', err });
  }
});

module.exports = router;
