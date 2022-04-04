const express = require("express");
const vinhosController = require("../controllers/vinhosController");
const pratosController = require("../controllers/pratosController");
const routes = express.Router();
const cors = require("cors");

routes.get("/vinhos/lista", vinhosController.listarVinhos);
routes.post("/vinhos/criar", vinhosController.cadastrarVinhos);
routes.delete("/vinhos/:id/deletar", vinhosController.deletarVinho);
routes.put("/vinhos/:id/atualizar", vinhosController.atualizarVinho);

routes.get("/vinhos/tintos", vinhosController.listarVinhosTintos);
routes.get("/vinhos/brancos", vinhosController.listarVinhosBrancos);
routes.get("/vinhos/roses", vinhosController.listarVinhosRoses);
routes.get("/vinhos/espumantes", vinhosController.listarVinhosEspumantes);
routes.get("/vinhos/:id", vinhosController.listarVinho);
routes.get("/harmonizacao/:id", pratosController.harmonizacoes);

module.exports = routes;
