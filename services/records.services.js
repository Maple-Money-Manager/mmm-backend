const { Records } = require("../models/records.model");

const saveRecords = async (expense, category, date) => {
  try {
    const record = await Records.create({
      expense,
      category,
      date,
    });
    return record;
  } catch (err) {
    console.err;
  }
};

module.exports = {
  saveRecords,
};
