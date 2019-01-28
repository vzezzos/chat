//Définition des modules
const express = require("express"); 
const mongoose = require("mongoose"); 
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
//On définit notre objet express nommé app
const app = express();

//On definit le port sur lequel express écoute
const port = process.env.PORT;

//Body Parser
var urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

//Définition des CORS
/*
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
*/

app.use(cors());

//Connexion et recuperation de la base de données
mongoose.connect('mongodb://localhost/CHATdb', { useNewUrlParser: true });
const db = mongoose.connection;

//On définit la route Hello
app.get('/hello',function(req,res){
    res.json("Hello World")
});

require('./routes')(app, db);
//Mise en place du port d'écoute
app.listen(port, () => console.log(`Listening on port ${port}`));