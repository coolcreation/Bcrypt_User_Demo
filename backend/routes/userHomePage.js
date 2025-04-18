import express from "express";
import User from '../models/userModel.js';

const router = express.Router();

// GET user data 
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found.');
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal server error.');
  }
});

export default router;