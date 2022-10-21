const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

const clientes = require("./router");

app.use("/clientes", clientes);

//localhost
//db:27017
mongoose
  .connect("mongodb://db:27017/hcode", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("MongoDB Conectado");
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = 8080;
const HOST = "0.0.0.0";

// App
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
