import express from "express";
import User from '../models/userModel.js'

const router = express.Router();

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username, password });

      if (!user) {
        return res.status(404).send('User not found.');
      }
  
      res.status(200).json({ _id: user._id }); 
      console.log(user)
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json('Internal server error.');
    }
});

export default router;