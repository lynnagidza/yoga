// const mongoose = require('mongoose');
const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'yoga_db';
const client = new mongodb.MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.error('MongoDB connection error:', err);
  } else {
    console.log('MongoDB connected');
  }
}
);

const db = client.db(dbName);

module.exports = db;
