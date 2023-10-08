const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
  {
    saleId: {
      type: String,
      required: true,
      unique: true,
    },
    item: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Sale = mongoose.model("Sale", salesSchema);
module.exports = Sale;
