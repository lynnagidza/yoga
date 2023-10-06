const express = require('express');

const router = express.Router();
const country = require('../models/country');
const {
  viewCart, calculateTotalPrice,
} = require('../controllers/cartController');
// const {
//   createUsers, findUser, updateUser, deleteUser,
// } = require('../controllers/userController');

router.get('/', async (req, res) => {
  try {
    // populate the countries and towns
    // const countries = country.sort((a, b) => a.name.localeCompare(b.name));
    // const towns = country.sort((a, b) => a.name.localeCompare(b.name));

    // retrive cart data and calculate totals
    const { guestId } = req.cookies;

    const cartItems = await viewCart(null, guestId);
    const subtotal = calculateTotalPrice(cartItems);
    const deliveryFee = 777;
    const grandTotal = subtotal + deliveryFee;

    res.render('checkout', {
      // countries, towns,
      cartItems, subtotal, deliveryFee, grandTotal,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error getting user details:', err });
  }
});

// router.post('/', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const user = await createUsers(name, email, password);
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(500).json({ message: 'Error creating user:', err });
//   }
// });

// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await findUser(id);
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ message: 'Error finding user:', err });
//   }
// });

// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, email, password } = req.body;
//   try {
//     const user = await updateUser(id, name, email, password);
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ message: 'Error updating user:', err });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await deleteUser(id);
//     res.sendStatus(204);
//   } catch (err) {
//     res.status(500).json({ message: 'Error deleting user:', err });
//   }
// });

module.exports = router;
