const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  company: { type: String, required: false },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalcode: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },

  role: { type: String, required: true },
  status: { type: String, required: true },

  created_at: { type: Date },
  updated_at: { type: Date },
});

module.exports = mongoose.model('User', userSchema);
