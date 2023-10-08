const express = require("express");
const router = express.Router();

const { addSale, getSales } = require("../controllers/sales.controller");

router.post("", async (req, res) => {
  const salesDetails = req.body;
  try {
    const newSale = await addSale(salesDetails);
    if (newSale) {
      res.status(201).json({ message: "Sale completed", data: newSale });
    } else {
      res.status(400).json({ message: "Sale failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Interanl Server Error" });
  }
});

router.get("", async (req, res) => {
  try {
    const sales = await getSales();
    if (sales) {
      res.status(200).json({ message: "Sales", data: sales });
    } else {
      res.status(404).json({ message: "Sales details not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Interanl Server Error" });
  }
});

module.exports = router;
