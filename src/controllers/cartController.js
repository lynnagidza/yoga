const db = require('../utils/db');
const CartItem = require('../models/cart-item');

db.on('open', () => {});
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

  async addToCart(userId, guestId, productId, productName, quantity, price, imageUrl) {
    let cartItem;

    if (userId) {
      if (await CartItem.findOne({ userId, productId })) {
        cartItem = await CartItem.findOne({ userId, productId });
        cartItem.quantity += 1;
      } else {
        cartItem = new CartItem({
          userId, productId, productName, quantity, price, imageUrl,
        });
      }
    } else if (await CartItem.findOne({ guestId, productId })) {
      cartItem = await CartItem.findOne({ guestId, productId });
      cartItem.quantity += 1;
    } else {
      cartItem = new CartItem({
        guestId, productId, productName, quantity, price, imageUrl,
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

  async removeFromCart(itemId) {
    await CartItem.findByIdAndDelete(itemId);
  }

  async increaseQuantity(itemId) {
    const cartItem = await CartItem.findById(itemId);
    cartItem.quantity += 1;
    await cartItem.save();
  }

  async decreaseQuantity(itemId) {
    const cartItem = await CartItem.findById(itemId);
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      await cartItem.save();
    } else if (cartItem.quantity === 1) {
      this.removeFromCart(itemId);
    }
  }
}

module.exports = new CartController();
