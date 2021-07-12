const app = require("./config.js");

class Server {
  init() {
    app.listen(3000, function () {
      console.log("Servidor rodando na porta 3000");
    });
  }
}

module.exports = Server;
