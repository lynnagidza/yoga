const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  guestId: { type: String },
  productId: { type: Number, required: true },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Cart', cartSchema);
