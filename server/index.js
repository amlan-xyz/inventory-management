require("dotenv").config();
require("./db");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//routes
const itemRouter = require("./routes/items.router");

app.get("/", (req, res) => {
  res.send("Inventory Management");
});

app.use("/api/items", itemRouter);

app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT} `);
});
