const express = require("express");
const app = express();
const indexRouter = require("./routes");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.json()); // middleware to convert the body data into json format

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong!!!";
  res.status(500).send(err);
});
app.listen(3232, () => {
  console.log("App running on port 3232");
});
