var express = require('express');
var api = express.Router();

// get all movies
api.route('/movies').get((req, res, next) => {
	res.json(tabMovies);
});

// get a movie
api.route('/movie/:id').get((req, res, next) => {
	var movie = tabMovies.find(m => m.id == req.params.id);

	if (!movie) res.status(404).send({ error: 'Movie not found.' });
	else res.json(movie);
});

// update a movie
api.route('/movie/:id').put((req, res, next) => {
	var movie = tabMovies.find(m => m.id == req.params.id);

	if (movie === null) {
		res.status(404).send({ error: 'Movie not found' });
	} else {
		var updatedMovie = JSON.parse(req.body.movie);

		movie.title = updatedMovie.title;
		movie.year = parseInt(updatedMovie.year);
		movie.real.name = updatedMovie.real.name;
		movie.real.nationality = updatedMovie.real.nationality;
		movie.real.birth = updatedMovie.real.birth;
		movie.genre = updatedMovie.genre;
		//movie.cover = updatedMovie.cover;
		res.json(movie);
	}
});

//delete a movie
api.route('/movie/delete/:id').delete((req, res, next) => {
	var index = tabMovies.findIndex(m => m.id == req.params.id);

	if (index == -1) {
		res.status(404).send({ error: 'Movie not found.' });
	} else {
		tabMovies.splice(index, 1);
		res.status(204).send(null);
	}
});

module.exports = api;

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
