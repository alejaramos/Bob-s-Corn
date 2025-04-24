const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const Purchases = sequelize.define("Purchases", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  clientUuId: {
    type: DataTypes.UUIDV4,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
});

module.exports = Purchases;