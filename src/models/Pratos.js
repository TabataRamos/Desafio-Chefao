const db = require("../database");
const { DataTypes } = require("sequelize");

const Pratos = db.define(
  "Pratos",
  {
    id_prato: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nome_prato: {
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
    tableName: "pratos",
  }
);

module.exports = Pratos;
