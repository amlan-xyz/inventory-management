//models
const Item = require("../models/items.model");

const addItem = async (itemDetails) => {
  const { itemName, quantity, price, category } = itemDetails;
  try {
    const newItem = {
      item_name: itemName,
      quantity,
      price,
      category,
    };
    const item = new Item(newItem);
    const savedItem = await item.save();
    return savedItem;
  } catch (error) {
    console.error("Error adding items", error);
  }
};

const getItems = async () => {
  try {
    const items = await Item.find();
    return items;
  } catch (error) {
    console.error("Error getting items", error);
  }
};

module.exports = { addItem, getItems };
