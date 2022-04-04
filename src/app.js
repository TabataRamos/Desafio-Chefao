const express = require("express");
const routes = require("./routes");
const PORT = 8000;
const cors = require("cors");

const db = require("./database");

const app = express();

db.hasConection();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");

  next();
});

app.use(routes);

app.listen(process.env.PORT || 8001, () => console.log("Servidor online!"));
