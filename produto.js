const Sequelize = require("sequelize");
const database = require("./db");

const Produto = database.define("produto", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tipo: {
    type: Sequelize.STRING,
  },
  região: {
    type: Sequelize.STRING,
  },
  uva: {
    type: Sequelize.STRING,
  },
  harmonização: {
    type: Sequelize.STRING,
  },
  descrição: {
    type: Sequelize.STRING,
  },
});

module.exports = Produto;
