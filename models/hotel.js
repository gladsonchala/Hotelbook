const mongoose = require('mongoose');

// Define the hotel schema
const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  photos_url: {
    type: [String],
    default: []
  },
  ground: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  approximate_location: {
    type: String,
    required: true
  },
  google_map_location_url: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  price_range: {
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },
  additional_services: {
    type: [String],
    default: []
  },
  rooms: {
    type: [{
      room_id: {
        type: String,
        required: true
      },
      room_type: {
        type: String,
        required: true
      },
      room_area: {
        type: Number,
        required: true
      },
      room_pricing: {
        type: Number,
        required: true
      },
      room_photos: {
        type: [String],
        default: []
      },
      additional_services: {
        type: [String],
        default: []
      },
      other_description: {
        type: String,
        default: ''
      }
    }],
    default: []
  },
  other_description: {
    type: String,
    default: ''
  }
});

// Create the Hotel model
const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
