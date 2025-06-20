// routes/adminAuthConfig.js
import express from 'express';
import AuthConfig from '../models/AuthConfig.js';

const router = express.Router();

// Get current auth provider
router.get('/auth-provider', async (req, res) => {
  let config = await AuthConfig.findOne({ key: 'authProvider' });
  if (!config) {
    config = await AuthConfig.create({ provider: 'otp-less' });
  }
  res.json({ provider: config.provider });
});

// Update auth provider
router.put('/auth-provider', async (req, res) => {
  const { provider } = req.body;
  if (!['otp-less', 'firebase'].includes(provider)) {
    return res.status(400).json({ error: 'Invalid provider' });
  }

  let config = await AuthConfig.findOneAndUpdate(
    { key: 'authProvider' },
    { provider },
    { new: true, upsert: true }
  );

  res.json({ message: 'Auth provider updated', provider: config.provider });
});

export default router;
