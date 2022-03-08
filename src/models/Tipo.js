const db = require("../database");
const { DataTypes } = require("sequelize");

const Tipo = db.define(
  "Tipo",
  {
    id_tipo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nome_tipo: {
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
    tableName: "tipo",
  }
);

module.exports = Tipo;
