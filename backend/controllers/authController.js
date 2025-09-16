// controllers/authController.js
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import Farm from '../models/Farm.js';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // ✅ If user is a farmer, create a farm
    if (role === 'farmer') {
      await Farm.create({
        name: `${name}'s Farm`,
        owner: newUser._id,
      });
    }

    res.status(201).json({
      message: 'User registered',
      user: { id: newUser._id, email: newUser.email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'Not authenticated' });

  const { password, ...safeUser } = req.user.toObject(); // converts Mongoose doc to plain object
  res.status(200).json({ message: 'Logged in', user: safeUser });
};

export const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ message: 'Logout failed' });
    res.status(200).json({ message: 'Logged out' });
  });
};

export const getCurrentUser = (req, res) => {
  if (req.user) {
    return res.json({ user: req.user });
  }
  return res.json({ user: null });
};
