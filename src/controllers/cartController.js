const db = require('../utils/db');
const CartItem = require('../models/cart-item');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

class CartController {
  async viewCart(userId, guestId) {
    let cartItems;

    if (userId) {
      cartItems = await CartItem.find({ userId }).populate('productId');
    } else {
      cartItems = await CartItem.find({ guestId }).populate('productId');
    }

    return cartItems;
  }

  async addToCart(userId, guestId, productId, quantity, price, imageUrl) {
    let cartItem;

    if (userId) {
      cartItem = new CartItem({
        userId, productId, quantity, price, imageUrl,
      });
    } else {
      cartItem = new CartItem({
        guestId, productId, quantity, price, imageUrl,
      });
    }

    const savedItem = await cartItem.save();
    return savedItem;
  }

  calculateTotalPrice(cartItems) {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  }
}

module.exports = new CartController();
