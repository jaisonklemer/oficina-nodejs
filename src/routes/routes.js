const { Router } = require("express");

const route = Router();

route.get("/", function (req, res) {
  var dados = { nome: "Jaison Klemer", idade: 23, cidade: "Gaspar" };

  res.render("index", { dados: dados });
});

module.exports = route;
