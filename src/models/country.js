const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },

  created_at: { type: Date },
  updated_at: { type: Date },
});

module.exports = mongoose.model('Country', countrySchema);
