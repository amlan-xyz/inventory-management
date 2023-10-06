const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema(
  {
    item_name: {
      type: String,
      required: true,
      unique: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemsSchema);
module.exports = Item;
