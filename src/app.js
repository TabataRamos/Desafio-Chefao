const express = require("express");
const routes = require("./routes");
const PORT = 8000;

const db = require("./database");

const app = express();

db.hasConection();

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 8001, () => console.log("Servidor online!"));
