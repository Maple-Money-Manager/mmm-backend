const { Sequelize, sequelize } = require("../utils/db");

const Records = sequelize.define("records", {
  expense: Sequelize.FLOAT,
  category: Sequelize.STRING,
  date: Sequelize.DATEONLY,
});

sequelize.sync();
console.log("All models were synchronized successfully.");
module.exports = { Records };
