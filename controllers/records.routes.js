const express = require("express");
const router = express.Router();
const recordsServices = require("../services/records.services");

router.post("/save_record", async (req, res) => {
  const { expense, category, date } = req.body;
  try {
    await recordsServices.saveRecords(expense, category, date);
    res.sendStatus(204);
  } catch (err) {
    console.err;
    res.sendStatus(400);
  }
});

router.get("/get_records", async (req, res) => {
  try {
    const results = await recordsServices.getAllRecords();
    res.status(200).json(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
});

module.exports = router;
