const Regiao = require("./Regiao");
const Tipo = require("./Tipo");
const Vinhos = require("./Vinhos");
const Pratos = require("./Pratos");
const Uva = require('./Uva')
const Vinhos_Pratos = require("./Vinhos_Pratos");

Vinhos.belongsTo(Regiao, {
  foreignKey: "regiao_id",
});

Regiao.hasMany(Vinhos, {
  foreignKey: "regiao_id",
});

Vinhos.belongsTo(Tipo, {
  foreignKey: "tipo_id",
});

Tipo.hasMany(Vinhos, {
  foreignKey: "tipo_id",
});

Vinhos.belongsToMany(Pratos, {
  foreignKey: "vinho_id",
  through: Vinhos_Pratos,
});

Pratos.belongsToMany(Vinhos, {
  foreignKey: "prato_id",
  through: Vinhos_Pratos,
});

Vinhos.belongsTo(Uva, {
  foreignKey: "uva_id",
});

Uva.hasMany(Vinhos, {
  foreignKey: "uva_id",
});

module.exports = {
  Regiao,
  Vinhos,
  Tipo,
  Pratos,
  Uva,
};
