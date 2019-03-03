var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;

global.tabMovies = [
	{
		id: 0,
		title: 'Green Book',
		lang: 'Anglais',
		year: 2019,
		real: {
			name: 'Peter Farrelly',
			nationality: 'américaine',
			birth: '17/12/156',
		},
		genre: 'Drame/Biopic',
		cover: 'img/green-book.jpg',
	},
	{
		id: 1,
		title: 'Forrest Gump',
		lang: 'Anglais',
		year: 1994,
		real: {
			name: 'Robert Zemeckis',
			nationality: 'américaine',
			birth: '14/05/1952',
		},
		genre: 'Comédie Dramatique',
		cover: 'img/forrest.jpg',
	},
	{
		id: 2,
		title: 'Un prophète',
		lang: 'Français',
		year: 2008,
		real: {
			name: 'Jacques Audiard',
			nationality: 'française',
			birth: '30/04/1952',
		},
		genre: 'Policier/Drame',
		cover: 'img/prophete.jpg',
	},
];

var app = express();
app.use(express.static(path.resolve('src/dist')));
app.use(express.static(path.resolve('src/static')));

var api = require('./routes.js');
app.use('/api', api);

app.get('/', function(req, res) {
	res.sendFile(path.resolve('src/index.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);
console.log('Listening on port ' + port);
