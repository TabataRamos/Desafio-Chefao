const { Vinhos, Tipo, Pratos, Uva } = require("../models");

const pratosController = {
  async harmonizacoes(req, res) {
    const { id } = req.params;
    const harmonizacao = await Pratos.findAll({
      where: {
        id_prato: id,
      },
      include: {
        model: Vinhos,
        include: [
          { model: Tipo, attributes: ["nome_tipo"] },
          { model: Pratos, attributes: ["nome_prato"] },
          { model: Uva, attributes: ["nome_uva"] },
        ],
      },
    });
    res.json(harmonizacao);
  },
};

module.exports = pratosController;
