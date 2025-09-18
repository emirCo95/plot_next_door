import express from 'express';

import { requireAuth } from '../middleware/authMiddleware.js';

import { fetchFarmDetails } from '../controllers/farmController.js';

const router = express.Router();

router.get('/', requireAuth, fetchFarmDetails);

export default router;
