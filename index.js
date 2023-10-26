const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const app = express();
const { grade1Words } = require("./grade1Words.js");
const { grade2Words } = require("./grade2Words.js");
const { grade3Words } = require("./grade3Words.js");

app.locals = {
  title: "dolch-words",
  grade1Words,
  grade2Words,
  grade3Words,
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json("hello");
});

app.get("/api/v1/grade1", (req, res) => {
  res.status(200).json(app.locals.grade1Words);
});

app.get("/api/v1/grade2", (req, res) => {
  res.status(200).json(app.locals.grade2Words);
});

app.get("/api/v1/grade3", (req, res) => {
  res.status(200).json(app.locals.grade3Words);
});

app.listen(port, () => {
  console.log(
    `${app.locals.title} is now running on http://localhost:${port} !`
  );
});
module.exports = app;
