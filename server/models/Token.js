const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
  {

    /* Reference to the user */
    /* Ref: https://mongoosejs.com/docs/populate.html */

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    token: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Token", tokenSchema);
