const CSA = require('../models/csa');

// Admin login
const login = async (req, res, next) => {
  const { username, password } = req.body;

  // Check if username and password are correct
  if (username !== 'admin' || password !== 'admin-password') {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate API key for the CSA
  const apiKey = generateApiKey();

  try {
    const adminCSA = new CSA({
      name: 'Admin',
      apiKey
    });
    await adminCSA.save();

    res.json({ apiKey });
  } catch (error) {
    next(error);
  }
};

// Generate API key for the CSA
const generateApiKey = () => {
  // Generate a random API key using a suitable algorithm
  // This can be customized based on your requirements
  const apiKeyLength = 32;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let apiKey = '';

  for (let i = 0; i < apiKeyLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    apiKey += characters.charAt(randomIndex);
  }

  return apiKey;
};

// Revoke API key for the CSA
const revokeApiKey = async (req, res, next) => {
  const csaId = req.params.csa_id;

  try {
    const csa = await CSA.findById(csaId);
    if (!csa) {
      return res.status(404).json({ message: 'CSA not found' });
    }

    // Remove the API key for the CSA
    csa.apiKey = undefined;
    await csa.save();

    res.json({ message: 'API key revoked' });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, revokeApiKey };
