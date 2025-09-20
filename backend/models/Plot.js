import mongoose from 'mongoose';

const plotSchema = new mongoose.Schema({
  reservedBy: [
    {
      user: {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        name: String,
        email: String,
        phone: String,
      },
      pounds: { type: Number, default: 0 },
      reservedAt: { type: Date, default: Date.now },
      pickup: {
        date: Date,
        confirmed: { type: Boolean, default: false },
        notes: String,
      },
    },
  ],
  farm: { type: mongoose.Schema.Types.ObjectId, ref: 'Farm' },
  crop: { type: String, default: null },
  variety: { type: String, default: null },
  basePrice: { type: Number, default: 0 },
  cropPricePerPound: { type: Number, default: 0 },
  plantedAt: { type: Date, default: null },
  status: {
    type: String,
    enum: ['empty', 'planted', ' sprouting', 'growing', 'ready', 'harvested'],
    default: 'empty',
  },
  sqft: { type: Number, default: 0 },
  estimatedYieldLbs: { type: Number, default: 0 },
  harvestDate: { type: Date },
  available: { type: Boolean, default: true },
});

export default mongoose.model('Plot', plotSchema);
