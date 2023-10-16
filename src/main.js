const express = require("express");
const postgres = require("pg");

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

app.listen(8080, () => console.log(`Listo por el puerto 8080`));
