const { Sequelize } = require("sequelize");
require("dotenv").config();

const dbPath = process.env.DB_PATH;

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
});

const initializeDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database initialized");
    return true;
  } catch (error) {
    console.error("Error initializing database:", error);
    return false;
  }
};

module.exports = {
  sequelize,
  initializeDatabase,
};
