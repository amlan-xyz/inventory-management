const Sale = require("../models/sales.model");
const Item = require("../models/items.model");

const createTxId = () => {
  const prefix = "TX_";
  const timestamp = new Date().toISOString();
  const randomNumber = Math.floor(Math.random() * 99)
    .toString()
    .padStart(1, "0");

  const transactionId = prefix + timestamp + randomNumber;
  return transactionId;
};

const addSale = async (saleDetails) => {
  try {
    const itemId = saleDetails.itemId;
    const item = await Item.findById(itemId);

    const sale = {
      saleId: createTxId(),
      item: item.item_name,
      quantity: saleDetails.quantity,
      price: saleDetails.price,
    };
    const newSale = new Sale(sale);
    const savedSale = await newSale.save();

    const updatedQty = item.quantity - savedSale.quantity;
    if (updatedQty < 0) {
      throw new Error("Quanitity is exceeding the available quantity");
    }
    const updatedItem = Object.assign(item, { quantity: updatedQty });
    await updatedItem.save();

    return { savedSale, updatedItem };
  } catch (error) {
    console.error("Error completing sale", error);
  }
};

const getSales = async () => {
  try {
    const sales = await Sale.find({});
    return sales;
  } catch (error) {
    console.error("Error getting sales", error);
  }
};

module.exports = { addSale, getSales };
