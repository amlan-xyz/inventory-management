const Sale = require("../models/sales.model");

const addSale = async (saleDetails) => {
  try {
    const prefix = "TX_";
    const timestamp = new Date().toISOString();
    const randomNumber = Math.floor(Math.random() * 99999)
      .toString()
      .padStart(5, "0");

    const transactionId = prefix + timestamp + randomNumber;
    const sale = {
      saleId: transactionId,
      ...saleDetails,
    };
    const newSale = new Sale(sale);
    const savedSale = await newSale.save();
    return savedSale;
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
