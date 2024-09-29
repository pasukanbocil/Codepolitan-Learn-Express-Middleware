const express = require("express");
const app = express();
morgan = require("morgan");

app.use(morgan("dev"));
app.use((req, res, next) => {
  //   req.timeRequest = Date.now();
  console.log(req.method, req.url);
  next();
});

const auth = (req, res, next) => {
  const { password } = req.query;
  if (password === "memek") {
    next();
  }
  // res.send("Password salah");
  throw new Error("Password Harus Diisi");
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/admin", auth, (req, res) => {
  res.send("Hello Admin");
});

app.get("/halaman", (req, res) => {
  console.log(req.timeRequest);
  res.send("Hello Halaman");
});

app.use((req, res) => {
  res.status(404).send("Not Found Page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
