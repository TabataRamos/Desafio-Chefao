const Sequelize = require("sequelize");

const DB_NAME = "heroku_ac17f462a467c6c";
const DB_USER = "bdc8bd99d0ef5f";
const DB_PASS = "0c69a225";
const DB_CONFIG = {
  dialect: "mysql",
  host: "us-cdbr-east-05.cleardb.net",
  port: 3306,
};

// Conexão com banco de dados
let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Erro ao tentar conexão com banco de dados");
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.error("Erro ao tentar se conectar ao banco de dados!");
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;
