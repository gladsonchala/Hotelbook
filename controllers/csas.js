const CSA = require('../models/csa');

// GET /csas - Returns a list of all CSAs
const getAllCSAs = async (req, res, next) => {
  try {
    const csas = await CSA.find();
    res.json(csas);
  } catch (error) {
    next(error);
  }
};

// GET /csas/{csa_id} - Returns details for a specific CSA
const getCSAById = async (req, res, next) => {
  try {
    const csa = await CSA.findById(req.params.csa_id);
    if (!csa) {
      return res.status(404).json({ message: 'CSA not found' });
    }
    res.json(csa);
  } catch (error) {
    next(error);
  }
};

// POST /csas - Creates a new CSA with the provided details
const createCSA = async (req, res, next) => {
  try {
    const csa = new CSA(req.body);
    await csa.save();
    res.status(201).json(csa);
  } catch (error) {
    next(error);
  }
};

// PUT /csas/{csa_id} - Updates the details for a specific CSA
const updateCSA = async (req, res, next) => {
  try {
    const csa = await CSA.findByIdAndUpdate(req.params.csa_id, req.body, { new: true });
    if (!csa) {
      return res.status(404).json({ message: 'CSA not found' });
    }
    res.json(csa);
  } catch (error) {
    next(error);
  }
};

// DELETE /csas/{csa_id} - Deletes a specific CSA
const deleteCSA = async (req, res, next) => {
  try {
    const csa = await CSA.findByIdAndDelete(req.params.csa_id);
    if (!csa) {
      return res.status(404).json({ message: 'CSA not found' });
    }
    res.json({ message: 'CSA deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCSAs,
  getCSAById,
  createCSA,
  updateCSA,
  deleteCSA,
};
