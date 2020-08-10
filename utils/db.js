require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_SCHEMA_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connection successful.");
  })
  .catch((err) => {
    console.log(err);
    // console.error("unable to connect to database");
  });

module.exports = { Sequelize, sequelize };
