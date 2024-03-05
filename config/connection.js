const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017';

const connectToDatabase = () => {
  mongoose.connect(connectionString)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
}

module.exports = connectToDatabase;
