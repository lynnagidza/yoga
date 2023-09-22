const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/yoga_db';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('MongoDB connected');
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

module.exports = db;
