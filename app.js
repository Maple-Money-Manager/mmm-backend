const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3001",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json("Get is working");
});
const recordsRouter = require("./controllers/records.routes");

app.use("/records", recordsRouter);

module.exports = app;
