const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hola mundo");
});

app.listen(3000, () =>
  console.log("Servidor ejecutandose en http://localhost:3000")
);
