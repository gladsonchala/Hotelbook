const CSA = require('../models/csa');

// Middleware for authenticating a CSA using their API key
const authenticate = async (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) {
    return res.status(401).json({ message: 'API key is missing' });
  }

  try {
    const csa = await CSA.findOne({ apiKey });
    if (!csa) {
      return res.status(401).json({ message: 'Invalid API key' });
    }

    req.csa = csa; // Attach the authenticated CSA to the request object
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authenticate };
