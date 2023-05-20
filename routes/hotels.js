const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotels');

// GET /hotels - Returns a list of all hotels
router.get('/', hotelController.getAllHotels);

// GET /hotels/{hotel_id} - Returns details for a specific hotel
router.get('/:hotel_id', hotelController.getHotelById);

// POST /hotels - Creates a new hotel with the provided details
router.post('/', hotelController.createHotel);

// PUT /hotels/{hotel_id} - Updates the details for a specific hotel
router.put('/:hotel_id', hotelController.updateHotel);

// DELETE /hotels/{hotel_id} - Deletes a specific hotel
router.delete('/:hotel_id', hotelController.deleteHotel);

// GET /hotels/{hotel_id}/rooms - Returns a list of all rooms for a specific hotel
router.get('/:hotel_id/rooms', hotelController.getAllRooms);

// GET /hotels/{hotel_id}/rooms/{room_id} - Returns details for a specific room in a specific hotel
router.get('/:hotel_id/rooms/:room_id', hotelController.getRoomById);

// POST /hotels/{hotel_id}/rooms - Creates a new room for a specific hotel with the provided details
router.post('/:hotel_id/rooms', hotelController.createRoom);

// PUT /hotels/{hotel_id}/rooms/{room_id} - Updates the details for a specific room in a specific hotel
router.put('/:hotel_id/rooms/:room_id', hotelController.updateRoom);

// DELETE /hotels/{hotel_id}/rooms/{room_id} - Deletes a specific room in a specific hotel
router.delete('/:hotel_id/rooms/:room_id', hotelController.deleteRoom);

// GET /hotels/search?query={search_query} - Returns a list of hotels that match the search query
router.get('/search', hotelController.searchHotels);

module.exports = router;
