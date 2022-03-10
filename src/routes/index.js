const express = require("express");
const vinhosController = require("../controllers/vinhosController");
const routes = express.Router();

routes.get("/vinhos/lista", vinhosController.listarVinhos);
routes.post("/vinhos/criar", vinhosController.cadastrarVinhos);
routes.delete("/vinhos/:id/deletar", vinhosController.deletarVinho);
routes.put("/vinhos/:id/atualizar", vinhosController.atualizarVinho);

routes.get("/vinhos/tintos", vinhosController.listarVinhosTintos);
routes.get("/vinhos/brancos", vinhosController.listarVinhosBrancos);
routes.get("/vinhos/roses", vinhosController.listarVinhosRoses);
routes.get("/vinhos/espumantes", vinhosController.listarVinhosEspumantes);

module.exports = routes;
