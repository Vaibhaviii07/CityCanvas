import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const raffleEntrySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  submittedAt: { type: Date, default: Date.now }
});

export default model('RaffleEntry', raffleEntrySchema);
