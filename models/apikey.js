const mongoose = require('mongoose');

// Define the API key schema
const apiKeySchema = new mongoose.Schema({
  csaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CSA',
    required: true
  },
  key: {
    type: String,
    required: true,
    unique: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

// Create the APIKey model
const APIKey = mongoose.model('APIKey', apiKeySchema);

module.exports = APIKey;
