import express from 'express';
import RaffleEntry from '../models/RaffleEntry.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const entry = new RaffleEntry({ name, email });
    await entry.save();
    res.status(201).json({ message: 'Raffle entry received!' });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: 'You’ve already entered the raffle.' });
    } else {
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  }
});

export default router;
