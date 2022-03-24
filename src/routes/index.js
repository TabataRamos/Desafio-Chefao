const express = require("express");
const vinhosController = require("../controllers/vinhosController");
const routes = express.Router();
const cors = require("cors");

routes.get("/vinhos/lista", cors(), vinhosController.listarVinhos);
routes.post("/vinhos/criar", vinhosController.cadastrarVinhos);
routes.delete("/vinhos/:id/deletar", vinhosController.deletarVinho);
routes.put("/vinhos/:id/atualizar", vinhosController.atualizarVinho);

routes.get("/vinhos/tintos", cors(), vinhosController.listarVinhosTintos);
routes.get("/vinhos/brancos", cors(), vinhosController.listarVinhosBrancos);
routes.get("/vinhos/roses", cors(), vinhosController.listarVinhosRoses);
routes.get(
  "/vinhos/espumantes",
  cors(),
  vinhosController.listarVinhosEspumantes
);

module.exports = routes;