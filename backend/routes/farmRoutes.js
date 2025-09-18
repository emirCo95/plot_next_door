import express from 'express';

import { requireAuth } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/farm', requireAuth, fetchFarmDetails);

export default router;
