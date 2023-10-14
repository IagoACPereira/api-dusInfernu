const express = require("express");
const configApp = require("./src/app.js");

const app = express();
const porta = 3000;

configApp(app);

app.listen(porta, () => {
  console.log(`Servidor escutando porta ${porta}`);
});