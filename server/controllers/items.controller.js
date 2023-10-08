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

const deleteItem = async (itemId) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(itemId);
    return deletedItem;
  } catch (error) {
    console.error("Error deleting item", error);
  }
};

const updateItem = async (itemId, updatedDetails) => {
  try {
    const item = await Item.findById(itemId);
    Object.assign(item, updatedDetails);
    const updatedItem = await item.save();
    return updatedItem;
  } catch (error) {
    console.error("Error updating item", error);
  }
};

module.exports = { addItem, getItems, deleteItem, updateItem };
