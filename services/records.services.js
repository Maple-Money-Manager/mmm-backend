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

const deleteRecord = async (inputId) => {
  try {
    const chosenRecord = await Records.findOne({
      where: { id: inputId },
    });
    const dateOfRecord = chosenRecord.dataValues.date;
    const categoryOfRecord = chosenRecord.dataValues.category;
    await chosenRecord.destroy();
    return `Record on ${dateOfRecord} in category "${categoryOfRecord}" has been deleted.`;
  } catch (err) {
    console.err;
  }
  next(err);
};

module.exports = {
  saveRecords,
  getAllRecords,
  updateRecords,
  deleteRecord,
};
