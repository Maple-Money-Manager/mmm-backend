const express = require("express");
const app = express();
const recordsModel = require("./models/expense.model");

app.get("/", (req, res) => {
  res.json("Get is working");
});

module.exports = app;
