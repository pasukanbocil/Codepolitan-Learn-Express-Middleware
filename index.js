const express = require("express");
const app = express();
morgan = require("morgan");

// app.use(morgan("dev"));
app.use((req, res, next) => {
  req.timeRequest = Date.now();
  console.log(req.method, req.url);
  next();
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/halaman", (req, res) => {
  console.log(req.timeRequest);
  res.send("Hello Halaman");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
