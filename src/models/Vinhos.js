const db = require("../database");
const { DataTypes } = require("sequelize");
const Regiao = require("./Regiao");
const Tipo = require("./Tipo");
const Uva = require("./Uva");

const Vinhos = db.define(
  "Vinhos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    link_foto: {
      type: DataTypes.STRING,
    },

    descricao: {
      type: DataTypes.TEXT,
    },

    createdAt: {
      type: DataTypes.DATE,
    },

    updatedAt: {
      type: DataTypes.DATE,
    },

    regiao_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Regiao,
        key: "id_regiao",
      },
    },

    tipo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tipo,
        key: "id_tipo",
      },
    },

    uva_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Uva,
        key: "id_uva",
      },
    },
  },
  {
    tableName: "vinhos",
  }
);

module.exports = Vinhos;
