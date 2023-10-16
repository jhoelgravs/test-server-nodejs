const express = require("express");
const postgres = require("pg");
require("dotenv").config();

const app = express();

const postgresClient = new postgres.Client({
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "ecommerce",
});

postgresClient
  .connect()
  .then(() => console.log("conectado a postgres"))
  .catch(() => console.error("error al conectarse"));

app.get("/", (req, res) => {
  res.send("Hola, mundo");
});

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Listo por el puerto ${process.env.SERVER_PORT}`)
);
