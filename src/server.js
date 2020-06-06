const nunjucks = require('nunjucks'),
	express = require('express'),
	server = express();

//DB

const db = require('./database/db');

//CONFIG
server.use(express.static('public'));

server.use(express.urlencoded({ extended: true }));

nunjucks.configure('src/views', {
	express: server,
	noCache: true
});

//ROUTES

//HOME
server.get('/', (req, res) => {
	return res.render('index.html');
});

//REGISTER
server.get('/create-point', (req, res) => {
	return res.render('create-point.html');
});

server.post('/savepoint', (req, res) => {
	const query = `    
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `;

	const values = [
		req.body.image,
		req.body.name,
		req.body.address,
		req.body.address2,
		req.body.state,
		req.body.city,
		req.body.items
	];

	function afterInsertData(err) {
		if (err) {
			return console.log(err);
		}

		console.log('Registado com sucesso');
		console.log(this);

		return res.render('create-point.html', { saved: true });
	}

	db.run(query, values, afterInsertData);
});

//RESULTADO DA PROCURA

server.get('/search', (req, res) => {
	const search = req.query.search;

	//TAKE DATA
	//consultar os dados da tabela

	db.all(`SELECT * FROM places WHERE city  LIKE '%${search}%'`, function(err, rows) {
		if (err) {
			return console.log(err);
		}

		const total = rows.length;

		return res.render('search-results.html', { places: rows, total });
	});
});

//Open Server

server.listen(3000, function() {
	console.log('>Server Up');
});
