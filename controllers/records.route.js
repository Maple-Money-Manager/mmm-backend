const express = require("express");
const router = express.Router();
const recordsServices = require("../services/records-service");

router.post("/save-record", async (req, res) => {
  const { expense, category, date } = req.body;
  try {
    const result = await recordsServices.saveRecords(expense, category, date);
    res.sendStatus(204);
  } catch (err) {
    console.err;
    res.sendStatus(400);
  }
});

module.exports = router;
