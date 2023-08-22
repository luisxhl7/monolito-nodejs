const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

// db
const myconnection = require('express-myconnection');
const mysql = require('mysql');
const mongoose = require('mongoose');

//inicio de configuracion de mongodb

const user ='crud_cliente';
const password ='EQu6OLDGsXgEvXSc';
const uri = `mongodb+srv://${user}:${password}@cluster0.y7k7phm.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

//final de configuracion de mongodb


// importing routes 
const personRouters = require('./routes/person');

// setting server

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myconnection(mysql, {
    host: 'localHost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudpersonnodejs'
}, 'single'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', personRouters);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log('server on port 3000');;
});
