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

export const updateFarm = async (req, res) => {
  try {
    // Find farm owned by logged-in user
    const farm = await Farm.findOne({ owner: req.user._id });

    if (!farm) {
      return res.status(404).json({ message: 'Farm not found' });
    }

    // Update only allowed fields
    const allowedUpdates = [
      'name',
      'location',
      'description',
      'contact',
      'image',
      'preferredCrops',
      'maxPlots',
      'isActive',
    ];

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        farm[field] = req.body[field];
      }
    });

    await farm.save();

    return res.status(200).json({ message: 'Farm updated successfully', farm });
  } catch (error) {
    console.error('Error updating farm:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};
