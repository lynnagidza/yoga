const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  company: { type: String, required: false },
  address: { type: String, required: false },
  city: { type: String, required: false },
  postalcode: { type: String, required: false },
  country: { type: String, required: false },
  phone: { type: String, required: false },

  role: { type: String, required: true },
  status: { type: String, required: false },

  created_at: { type: Date },
  updated_at: { type: Date },
});

module.exports = mongoose.model('User', userSchema);
