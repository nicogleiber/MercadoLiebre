const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

/* app.listen(3030, () => {
  console.log("Servidor corriendo en el puerto 3030");
}); */
const port = precess.env.PORT || 3030;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
