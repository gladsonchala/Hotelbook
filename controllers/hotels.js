const Hotel = require('../models/hotel');

// GET /hotels - Returns a list of all hotels
const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    next(error);
  }
};

// GET /hotels/{hotel_id} - Returns details for a specific hotel
const getHotelById = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.hotel_id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.json(hotel);
  } catch (error) {
    next(error);
  }
};

// POST /hotels - Creates a new hotel with the provided details
const createHotel = async (req, res, next) => {
  try {
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.status(201).json(hotel);
  } catch (error) {
    next(error);
  }
};

// PUT /hotels/{hotel_id} - Updates the details for a specific hotel
const updateHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.hotel_id, req.body, { new: true });
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.json(hotel);
  } catch (error) {
    next(error);
  }
};

// DELETE /hotels/{hotel_id} - Deletes a specific hotel
const deleteHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.hotel_id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.json({ message: 'Hotel deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
};
