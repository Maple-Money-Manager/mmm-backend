const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Get is working");
});

module.exports = app;
