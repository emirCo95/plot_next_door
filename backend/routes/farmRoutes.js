import express from 'express';

import { requireAuth } from '../middleware/authMiddleware.js';

import { fetchFarmDetails, updateFarm } from '../controllers/farmController.js';

const router = express.Router();

router.get('/', requireAuth, fetchFarmDetails);
router.put('/', requireAuth, updateFarm);

export default router;
