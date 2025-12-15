const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({

  /* User who rented the gadget */
    /* Ref: https://mongoosejs.com/docs/populate.html */

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  gadget: { type: mongoose.Schema.Types.ObjectId, ref: 'Gadget', required: true },
  qty: { type: Number, required: true, default: 1 },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalPrice: Number,
  status: { type: String, enum: ['reserved','active','returned','cancelled'], default: 'reserved' }
}, { timestamps: true });

module.exports = mongoose.model('Rental', RentalSchema);
