const express = require("express");
const app = express();
const recordsServices = require("./services/records-service");

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Get is working");
});

app.post("/save-record", async (req, res) => {
  const { expense, category, date } = req.body;
  try {
    const result = await recordsServices.saveRecords(expense, category, date);
    console.log(result);
    res.sendStatus(204);
  } catch (err) {
    console.err;
    res.sendStatus(400);
  }
});

module.exports = app;
