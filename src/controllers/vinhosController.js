const { Vinhos, Tipo, Pratos, Uva } = require("../models");

const vinhosController = {
  async listarVinhos(req, res) {
    const listaDeVinhos = await Vinhos.findAll({
      include: [
        { model: Tipo, attributes: ["nome_tipo"] },
        { model: Pratos, attributes: ["nome_prato"] },
        { model: Uva, attributes: ["nome_uva"] },
      ],
    });

    res.json(listaDeVinhos);
  },
  async cadastrarVinhos(req, res) {
    const { link_foto, descricao, tipo_id, prato_id, uva_id } = req.body;

    const novoVinho = await Vinhos.create({
      link_foto,
      descricao,
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
    const { link_foto, descricao, tipo_id, prato_id, uva_id } = req.body;

    const vinhoAtualizado = await Vinhos.update(
      {
        link_foto,
        descricao,
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

  async listarVinhosTintos(req, res) {
    const listaDeVinhosTintos = await Vinhos.findAll({
      where: {
        tipo_id: 1,
      },
      include: [
        { model: Tipo, attributes: ["nome_tipo"] },
        { model: Pratos, attributes: ["nome_prato"] },
        { model: Uva, attributes: ["nome_uva"] },
      ],
    });
    res.json(listaDeVinhosTintos);
  },

  async listarVinhosBrancos(req, res) {
    const listaDeVinhosBrancos = await Vinhos.findAll({
      where: {
        tipo_id: 2,
      },
      include: [
        { model: Tipo, attributes: ["nome_tipo"] },
        { model: Pratos, attributes: ["nome_prato"] },
        { model: Uva, attributes: ["nome_uva"] },
      ],
    });
    res.json(listaDeVinhosBrancos);
  },

  async listarVinhosRoses(req, res) {
    const listaDeVinhosRoses = await Vinhos.findAll({
      where: {
        tipo_id: 3,
      },
      include: [
        { model: Tipo, attributes: ["nome_tipo"] },
        { model: Pratos, attributes: ["nome_prato"] },
        { model: Uva, attributes: ["nome_uva"] },
      ],
    });
    res.json(listaDeVinhosRoses);
  },

  async listarVinhosEspumantes(req, res) {
    const listaDeVinhosEspumantes = await Vinhos.findAll({
      where: {
        tipo_id: 4,
      },
      include: [
        { model: Tipo, attributes: ["nome_tipo"] },
        { model: Pratos, attributes: ["nome_prato"] },
        { model: Uva, attributes: ["nome_uva"] },
      ],
    });
    res.json(listaDeVinhosEspumantes);
  },
};

module.exports = vinhosController;
