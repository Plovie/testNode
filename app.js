const express = require('express');
const bodyParser = require('body-parser');
const movie = require('./movies');

const app = express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");//allow everybody to make request
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");// allow all type of content
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS', 'PATCH');// allow all of this path
    next();
});
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send(err);
    });
}
app.get('/',(req,res) => {
   res.status(200).render('index.pug');
});

app.get('/movies',(req, res) =>{
    console.log('get all');
    movie.getAll(req, res);
});

app.get('/movies/:id', (req, res) => {
    console.log('get one by id');
    movie.getOne(req, res);
});

app.post('/movies/', (req, res) => {
    console.log('create movie');
    movie.create(req,res);
});

app.patch('/movies/:id', (req, res) => {
    console.log('patch movie');
    movie.update(req,res);
});

app.put('/movies/:id', (req, res) => {
    console.log('replace movie')
    movie.replace(req,res);
});

app.delete('/movies/:id', (req, res) => {
    console.log('delete movie')
    movie.delete(req,res);
});

app.listen(3000);