// // const express = require('express');
// // const router = express.Router();
// // const { getCart } = require('../controllers/shopping-cart');

// // router.get('/', getCart);

// // router.post('/add', async (req, res) => {
// //   const { productId, quantity, price } = req.body;
// //   try {
// //     const response = await addToCartAPI(productId, quantity, price);

// //     res.redirect('/cart');
// //   } catch (err) {
// //     res.status(500).send(err.message);
// //   }
// // });

// // router.delete('/remove/:itemId', async (req, res) => {
// //   const { itemId } = req.params.itemId;
// //   try {
// //     await removeFromCartAPI(itemId);

// //     res.redirect('/cart');
// //   } catch (err) {
// //     res.status(500).send(err.message);
// //   }
// // });

// // module.exports = router;


// // routes/cartRoutes.js
// const express = require('express');
// const router = express.Router();
// const cartController = require('../controllers/cartController');
// const isAuthenticated = require('../utils/auth');

// // Add to cart route (requires authentication)
// router.post('/add-to-cart', isAuthenticated, cartController.addToCart);

// // Remove from cart route (requires authentication)
// router.delete('/remove-from-cart/:productId', isAuthenticated, cartController.removeFromCart);

// // View cart route (requires authentication)
// router.get('/view-cart', isAuthenticated, cartController.viewCart);

// // Other cart-related routes can be added here

// module.exports = router;
