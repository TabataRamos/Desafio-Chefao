const db = require("../database");
const { DataTypes } = require("sequelize");

const Uva = db.define(
  "Uva",
  {
    id_uva: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nome_uva: {
      type: DataTypes.STRING,
    },

    // createdAt: {
    //   type: DataTypes.DATE,
    // },

    // updatedAt: {
    //   type: DataTypes.DATE,
    // },
  },
  {
    tableName: "uva",
    timestamps: false,
  }
);

module.exports = Uva;
