//appel dépendances
const express = require('express');
const lodash = require('lodash');
const bodyParser = require('body-parser');
const ejs = require('ejs');


let app = express();

//on utilise le moteur de template ejs
app.set("view engine", "ejs");

//appel le bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//appel du fichier css
app.use(express.static('public'));

// const { google } = require('googleapis');
// const plus = google.plus({
//     version: 'v1',
//     auth: 'https://www.googleapis.com/books/v1/volumes?q=search+terms'
// });

//appel de ma page d'accueil index.ejs
app.get('/', function (req, res) {
    res.render('index');
});


// Listen
app.listen(8080, function (req, res) {
    console.log('Server Online')
})
