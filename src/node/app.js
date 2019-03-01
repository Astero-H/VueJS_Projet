var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var multer = require("multer");
var port = process.env.PORT || 3000;
var axios = require("axios");

var app = express();
app.use(express.static(path.resolve("src/dist")));
app.use(express.static(path.resolve("src/static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port);
console.log("Listening on port " + port);

global.baseMovies = [
  {
    id: 1,
    title: "Green Book",
    year: 2019,
    cover: "img/green-book.jpg"
  },
  {
    id: 2,
    title: "Forrest Gump",
    year: 2014,
    cover: "img/forrest.jpg"
  },
  {
    id: 3,
    title: "Un prophète",
    year: 2014,
    cover: "img/prophete.jpg"
  }
];

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./src/static/img/");
  },
  filename: function(req, file, cb) {
    cb(null, +Date.now() + "-" + file.originalname);
  }
});

var upload = multer({ storage });

app.get("/", function(req, res, next) {
  res.sendFile(path.resolve("src/index.html"));
});

app.get("/movies", function(req, res, next) {
  res.json(baseMovies);
});

app.get("/movies/:id", function(req, res, next) {
  res.json(baseMovies[req.params.id-1]);
  next()
});

//poster
app.post("/", upload.single("avatar"), function(req, res, next) {
  console.log(req.body, req.file);
});
