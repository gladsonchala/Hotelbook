const mongoose = require('mongoose');

// Define the CSA schema
const csaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  apiKey: {
    type: String
  }
});

// Create the CSA model
const CSA = mongoose.model('CSA', csaSchema);

module.exports = CSA;
