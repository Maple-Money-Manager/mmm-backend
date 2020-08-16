const express = require("express");
const router = express.Router();
const recordsServices = require("../services/records.services");

router.post("/save-record", async (req, res) => {
  const { expense, category, date } = req.body;
  try {
    await recordsServices.saveRecords(expense, category, date);
    res.sendStatus(204);
  } catch (err) {
    console.err;
    res.sendStatus(400);
  }
});

module.exports = router;
