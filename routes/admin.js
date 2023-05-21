const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

// GET /admin/login - Renders the login page for the admin panel
router.get('/login', adminController.renderLoginPage);

// POST /admin/login - Authenticates the admin and generates an API key for a CSA
router.post('/login', adminController.login);

// GET /admin/csas - Returns a list of all CSAs with their API keys
router.get('/csas', adminController.getAllCSAs);

// POST /admin/csas - Creates a new CSA and generates an API key
router.post('/csas', adminController.createCSA);

// PUT /admin/csas/{csa_id}/apikey - Updates the API key for a specific CSA
router.put('/csas/:csa_id/apikey', adminController.updateCSAAPIKey);

// DELETE /admin/csas/{csa_id} - Deletes a specific CSA
router.delete('/csas/:csa_id', adminController.deleteCSA);

module.exports = router;
