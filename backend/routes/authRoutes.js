// routes/authRoutes.js
import express from 'express';
import passport from 'passport';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from '../controllers/authController.js';

import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', passport.authenticate('local'), loginUser);

router.post('/logout', logoutUser);

router.get('/me', requireAuth, getCurrentUser);

export default router;
