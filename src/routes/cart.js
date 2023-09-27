const express = require('express');

const router = express.Router();
const {
  viewCart, addToCart, calculateTotalPrice, removeFromCart,
} = require('../controllers/cartController');

function validateCartInput(req, res, next) {
  const {
    productId, quantity, price, imageUrl,
  } = req.body;
  if (!productId || !quantity || !price || !imageUrl) {
    return res.status(400).json({ message: 'Missing or invalid cart data' });
  }
  return next();
}

router.get('/', async (req, res) => {
  try {
    const { guestId } = req.cookies;

    const cartItems = await viewCart(null, guestId);
    const totalPrice = calculateTotalPrice(cartItems);
    res.render('cart', { cartItems, totalPrice });
  } catch (err) {
    res.status(500).json({ message: 'Error getting cart:', err });
  }
});

router.post('/add', validateCartInput, async (req, res) => {
  const {
    productId, quantity, price, imageUrl,
  } = req.body;
  try {
    const { guestId } = req.cookies;

    await addToCart(null, guestId, productId, quantity, price, imageUrl, res);
    res.redirect('/cart');
  } catch (err) {
    res.status(500).json({ message: 'Error adding product to cart:', err });
  }
});

router.delete('/remove/:itemId', async (req, res) => {
  const { itemId } = req.params;
  try {
    await removeFromCart(itemId);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: 'Error removing product from cart:', err });
  }
});

module.exports = router;
