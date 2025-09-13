// models/Farm.js
import mongoose from 'mongoose';

const farmSchema = new mongoose.Schema(
  {
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
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Farmer's User model reference
      required: true,
      unique: true, // Each farmer should have exactly one farm
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Farm', farmSchema);
