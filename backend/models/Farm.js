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
      type: String, // Could be a city, address, or coordinates
      required: false,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    crops: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crop', // optional - if you later have a Crop model
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
