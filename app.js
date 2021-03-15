// ****** creating a server ******

// modules:-
// http - requests and responses
// https
// fs
// path
// os  

// process.exit(); // to exit the server

// const http = require('http'); // importing modules and if we add ./ or / it will look for a file in folder

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars')
const path = require('path');

const app = express();

// app.engine('hbs', expressHbs({
//     defaultLayout: ''
// }));
app.set('view engine', 'ejs');
// app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const pageNotFound = require('./controllers/404');

// app.use((req, res, next) => {
//     // console.log('In the middleware');
//     next(); // allows the request to move to the next middleware.
// }); // it adds a new middleware and function inside it will be executed for every incoming requests.

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.get('/*', pageNotFound.pageNotFound)

// const server = http.createServer(app);
// server.listen(5000);

app.listen(8080);