// @ts-nocheck
const express = require("express");

const app = express();
const hostname = "127.0.0.1";
const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/form", (req, res) => {
  setTimeout(() => {
    res.send("The form has been received!");
  }, 2000);
});

app.post("/form-with-error", (req, res) => {
  res.status(500).send();
});

app.listen(port, () => {
  console.log(
    `The server has been launched at the address http://${hostname}:${port}`
  );
});
