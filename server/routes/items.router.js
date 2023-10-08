const express = require("express");
const router = express.Router();

//contorllers
const {
  addItem,
  getItems,
  deleteItem,
  updateItem,
} = require("../controllers/items.controller");

router.post("", async (req, res) => {
  const itemDetails = req.body;
  try {
    const savedItem = await addItem(itemDetails);
    if (savedItem) {
      res.status(201).json({ message: "Item added", data: savedItem });
    } else {
      res.status(400).json({ message: "Adding item failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("", async (req, res) => {
  try {
    const items = await getItems();
    if (items) {
      res
        .status(200)
        .json({ message: "Fetching items successful", data: items });
    } else {
      res.status(404).json({ message: "Fetching items failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    const deletedItem = await deleteItem(itemId);
    if (deletedItem) {
      res.status(200).json({ message: "Item deleted", data: deletedItem });
    } else {
      res.status(404).json({ message: "Item deletion failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/:id", async (req, res) => {
  const itemId = req.params.id;
  const updatedDetails = req.body;
  try {
    const updatedItem = await updateItem(itemId, updatedDetails);
    if (updatedItem) {
      res
        .status(200)
        .json({ message: "Updated successful", data: updatedItem });
    } else {
      res.status(404).json({ message: "Item updation failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
