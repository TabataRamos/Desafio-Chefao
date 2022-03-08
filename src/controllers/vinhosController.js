const { Vinhos, Regiao, Tipo, Pratos, Uva } = require("../models");

const vinhosController = {
  async listarVinhos(req, res) {
    const listaDeVinhos = await Vinhos.findAll({
      include: [
        { model: Regiao, attributes: ["pais"] },
        { model: Tipo, attributes: ["nome_tipo"] },
        { model: Pratos, attributes: ["nome_prato"] },
        { model: Uva, attributes: ["nome_uva"] },
      ],
    });

    res.json(listaDeVinhos);
  },
  async cadastrarVinhos(req, res) {
    const { nome, descricao, regiao_id, tipo_id, prato_id, uva_id } = req.body;

    const novoVinho = await Vinhos.create({
      nome,
      descricao,
      regiao_id,
      tipo_id,
      prato_id,
      uva_id,
    });

    const prato = await Pratos.findByPk(prato_id);

    await novoVinho.setPratos(prato);

    res.json(novoVinho);
  },

  async deletarVinho(req, res) {
    const { id } = req.params;

    await Vinhos.destroy({
      where: {
        id,
      },
    });

    res.json("Vinho deletado da adega!");
  },

  async atualizarVinho(req, res) {
    const { id } = req.params;
    const { nome, descricao, regiao_id, tipo_id, prato_id, uva_id } = req.body;

    const vinhoAtualizado = await Vinhos.update(
      {
        nome,
        descricao,
        regiao_id,
        tipo_id,
        prato_id,
        uva_id,
      },
      {
        where: {
          id,
        },
      }
    );

    res.json("Vinho Atualizado");
  },
};

module.exports = vinhosController;
