const express = require("express");
const routes = require("../routes/routes.js");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

app.set("views", "public/views");

app.set("view engine", "ejs");

app.use(routes);

module.exports = app;
