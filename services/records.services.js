const { Records } = require("../models/records.models");

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

const getAllRecords = async () => {
  try {
    const allRecords = await Records.findAll();
    return allRecords;
  } catch (err) {
    console.err;
  }
};

const updateRecords = async (expense, category, date, id) => {
  try {
    await Records.update(
      {
        expense,
        category,
        date,
      },
      { where: { id } }
    );
  } catch (err) {
    console.err;
  }
};
module.exports = {
  saveRecords,
  getAllRecords,
  updateRecords
};
