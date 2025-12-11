const mongoose = require('mongoose');

const GadgetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  pricePerDay: { type: Number, required: true },
  availableQty: { type: Number, default: 1 }
}, { timestamps: true });

module.exports = mongoose.model('Gadget', GadgetSchema);
