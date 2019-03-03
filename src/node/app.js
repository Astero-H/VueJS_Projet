var express = require("express");
var path = require("path");
var parser = require("body-parser");
var port = process.env.PORT || 3000;

var app = express();
app.use(express.static(path.resolve("src/dist")));
app.use(express.static(path.resolve("src/static")));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

var api = require("./routes.js");
app.use("/api", api);

global.tabMovies = [
  {
    id: 0,
    title: "Green Book",
    year: 2019,
    real: {
      name: "Peter Farrelly",
      nationality: "américaine",
      birth: "17/12/156"
    },
    genre: "Drame/Biopic",
    cover: "img/green-book.jpg"
  },
  {
    id: 1,
    title: "Forrest Gump",
    year: 1994,
    real: {
      name: "Robert Zemeckis",
      nationality: "américaine",
      birth: "14/05/1952"
    },
    genre: "Comédie Dramatique",
    cover: "img/forrest.jpg"
  },
  {
    id: 2,
    title: "Un prophète",
    year: 2008,
    real: {
      name: "Jacques Audiard",
      nationality: "française",
      birth: "30/04/1952"
    },
    genre: "Policier/Drame",
    cover: "img/prophete.jpg"
  }
];

/* app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type');
  res.setHeader('Content-Type', 'application/json');
  next();
});
 */
app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/index.html"));
});

app.listen(port);
console.log("Listening on port " + port);

/* var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/static/img/");
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + "-" + file.originalname);
  }
});

var upload = multer({ storage }); */

//poster
/* app.post("/", upload.single("avatar"), function (req, res, next) {
  console.log(req.body, req.file);
}); */
