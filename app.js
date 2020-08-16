const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Get is working");
});

const recordsRouter = require("./controllers/records.route");

app.use("/records", recordsRouter);

module.exports = app;
