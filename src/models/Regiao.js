const db = require("../database");
const { DataTypes } = require("sequelize");

const Regiao = db.define(
  "Regiao",
  {
    id_regiao: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    pais: {
      type: DataTypes.STRING,
    },

    createdAt: {
      type: DataTypes.DATE,
    },

    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "regiao",
  }
);

module.exports = Regiao;
