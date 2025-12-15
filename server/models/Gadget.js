const mongoose = require('mongoose');

 /* Schema definition for Gadget */
/* Ref: https://mongoosejs.com/docs/guide.html */
const GadgetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  pricePerDay: { type: Number, required: true },
  availableQty: { type: Number, default: 1 }

  /* Automatically adds createdAt & updatedAt */
    /* Ref: https://mongoosejs.com/docs/timestamps.html */
}, { timestamps: true });

 /* Export Gadget model */
/* Ref: https://mongoosejs.com/docs/models.html */

module.exports = mongoose.model('Gadget', GadgetSchema);
