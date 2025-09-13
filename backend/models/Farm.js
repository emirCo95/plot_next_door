// models/Farm.js
import mongoose from 'mongoose';

const farmSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Farmer's User model reference
      required: true,
      unique: true, // Each farmer should have exactly one farm
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      address: { type: String },
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    contact: {
      phone: String,
      email: String,
      website: String,
    },
    plots: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plot', //TODO Create Plot Model
      },
    ],
    image: { type: String }, // URL to the farm image
    preferredCrops: [String],
    maxPlots: { type: Number, default: 10 },
    assignedPlots: { type: Number, default: 0 },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Farm', farmSchema);
