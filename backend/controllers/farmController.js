import Farm from '../models/Farm.js';

export const fetchFarmDetails = async (req, res) => {
  try {
    const farm = await Farm.findOne({ owner: req.user.id });
    if (!farm) {
      return res.status(404).json({ message: 'Farm not found' });
    }
    res.json(farm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
