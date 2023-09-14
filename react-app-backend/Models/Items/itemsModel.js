const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../DB_Configuration/index");

const Items = db.define(
  "items",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    itemcode: {
      type: DataTypes.STRING,
    },
    itemname: {
      type: DataTypes.STRING,
    },
    buyprice: {
      type: DataTypes.INTEGER,
    },
    sellprice: {
      type: DataTypes.INTEGER,
    },
    itemstok: {
      type: DataTypes.INTEGER,
    },
    sellername: {
      type: DataTypes.STRING,
    },
    expireddate: {
      type: DataTypes.INTEGER,
    },
    createdat: {
      type: Sequelize.DATE,
    },
    updatedat: {
      type: Sequelize.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Items;
