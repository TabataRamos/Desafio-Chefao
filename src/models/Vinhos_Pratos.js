const db = require("../database");
const { DataTypes } = require("sequelize");
const Vinhos = require("./Vinhos");
const Pratos = require("./Pratos");

const Vinhos_Pratos = db.define(
  "Vinhos_Pratos",
  {
    vinho_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Vinhos,
        key: "id",
      },
    },

    prato_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pratos,
        key: "id_prato",
      },
    },

    // createdAt: {
    //   type: DataTypes.DATE,
    // },

    // updatedAt: {
    //   type: DataTypes.DATE,
    // },
  },
  {
    tableName: "vinhos_pratos",
    timestamps: false,
  }
);

module.exports = Vinhos_Pratos;
