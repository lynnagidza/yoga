// const mongoose = require('mongoose');

// const countrySchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   code: { type: String, required: true, unique: true },

//   created_at: { type: Date },
//   updated_at: { type: Date },
// });

// module.exports = mongoose.model('Country', countrySchema);

// Temporary country data
const countries = [
  {
    name: 'Kenya',
    code: 254,
  },
  {
    name: 'Uganda',
    code: 256,
  },
  {
    name: 'Tanzania',
    code: 255,
  },
];

// Temporary town data
const towns = [
  {
    name: 'Nairobi',
    country: 'Kenya',
    postcode: '00100',
    deliveryFee: 2.5,
  },
  {
    name: 'Kisumu',
    country: 'Kenya',
    postcode: '40100',
    deliveryFee: 3,
  },
  {
    name: 'Mombasa',
    country: 'Kenya',
    postcode: '80100',
    deliveryFee: 4.5,
  },
  {
    name: 'Nakuru',
    country: 'Kenya',
    postcode: '20100',
    deliveryFee: 3,
  },
  {
    name: 'Busia',
    country: 'Kenya',
    postcode: '50400',
    deliveryFee: 3.5,
  },
  {
    name: 'Kampala',
    country: 'Uganda',
    postcode: '10101',
    deliveryFee: 5,
  },
  {
    name: 'Entebbe',
    country: 'Uganda',
    postcode: '31301',
    deliveryFee: 5,
  },
  {
    name: 'Bogolobi',
    country: 'Uganda',
    postcode: '10315',
    deliveryFee: 5,
  },
  {
    name: 'Dar es Salaam',
    country: 'Tanzania',
    postcode: '255',
    deliveryFee: 4,
  },
  {
    name: 'Arusha',
    country: 'Tanzania',
    postcode: '255',
    deliveryFee: 4,
  },
  {
    name: 'Mwanza',
    country: 'Tanzania',
    postcode: '255',
    deliveryFee: 4,
  },
];

module.exports = { countries, towns };
