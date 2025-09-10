import express from 'express';
import bcrypt from 'bcryptjs';
import passport from 'passport';

import User from '../models/User.js';

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = User.findOne({ username });

    if (user) {
      return res.status(400).json({ message: 'User already exists.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ username, password: hashedPassword });
    await user.save();

    res.json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Login Route
router.post('/login', passport.authenticate('local'), async (req, res) => {
  res.json({ message: 'Logged in successfully', user: req.user });
});

//Logout Route
router.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.json({ message: 'Logged out' });
  });
});

// Verify authentication route
router.get('/verify', (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ authenticated: true, user: req.user });
  } else {
    return res.json({ authenticated: false });
  }
});

export default router;
