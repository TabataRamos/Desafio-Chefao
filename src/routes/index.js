const express = require("express");
const vinhosController = require("../controllers/vinhosController");
const routes = express.Router();

routes.get("/vinho/lista", vinhosController.listarVinhos);
routes.post("/vinho/criar", vinhosController.cadastrarVinhos);
routes.delete("/vinho/:id/deletar", vinhosController.deletarVinho);
routes.put("/vinho/:id/atualizar", vinhosController.atualizarVinho);

module.exports = routes;
