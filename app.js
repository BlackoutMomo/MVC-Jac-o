const express = require("express");
const app = express();
const newsRoutes = require("./src/routes/news");

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json());
app.use("/", newsRoutes);

// Alterado para usar a porta 5500
app.listen(5500, () => {
  console.log("Servidor rodando em http://localhost:5500");
});
