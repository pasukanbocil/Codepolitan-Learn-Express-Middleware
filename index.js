const express = require("express");
const app = express();
morgan = require("morgan");

app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("Hello Middleware Pertama");
  next();
  console.log("Hello Middleware Pertama Seteleh next()");
});
app.use((req, res, next) => {
    console.log("Hello Middleware kedua");
    next();
  });
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/halaman", (req, res) => {
  res.send("Hello Halaman");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
