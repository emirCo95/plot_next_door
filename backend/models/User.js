import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ['farmer', 'customer'],
  },
});

export default mongoose.model('User', UserSchema);
