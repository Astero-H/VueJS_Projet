var express = require('express');
var api = express.Router();

// get all movies
api.route('/movies').get((req, res, next) => {
    res.json(tabMovies);
});


// get a movie
api.route('/movie/:id').get((req, res, next) => {
    var movie = tabMovies.find(m => m.id == req.params.id);

    if (!movie)
        res.status(404).send({ error: 'Movie not found.' });
    else
        res.json(movie);
});

//delete a movie
api.route('/movie/delete/:id').delete((req, res, next) => {
    var index = tabMovies.findIndex(m => m.id == req.params.id);

    if (index == -1) {
        res.status(404).send({ error: 'Movie not found.' });
    }
    else {
        tabMovies.splice(index, 1);
        res.status(204).send(null);
    }
});

module.exports = api;






