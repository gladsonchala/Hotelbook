const express = require('express');
const router = express.Router();
const csaController = require('../controllers/csas');

// GET /csas - Returns a list of all CSAs
router.get('/', csaController.getAllCSAs);

// GET /csas/{csa_id} - Returns details for a specific CSA
router.get('/:csa_id', csaController.getCSAById);

// POST /csas - Creates a new CSA with the provided details
router.post('/', csaController.createCSA);

// PUT /csas/{csa_id} - Updates the details for a specific CSA
router.put('/:csa_id', csaController.updateCSA);

// DELETE /csas/{csa_id} - Deletes a specific CSA
router.delete('/:csa_id', csaController.deleteCSA);

module.exports = router;
