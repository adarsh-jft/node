// ****** creating a server ******

// modules:-
// http - requests and responses
// https
// fs
// path
// os  

// process.exit(); // to exit the server

// const http = require('http'); // importing modules and if we add ./ or / it will look for a file in folder


// const expressHbs = require('express-handlebars')


// app.engine('hbs', expressHbs({
//     defaultLayout: ''
// }));

// app.set('view engine', 'pug');


// app.use((req, res, next) => {
//     // console.log('In the middleware');
//     next(); // allows the request to move to the next middleware.
// }); // it adds a new middleware and function inside it will be executed for every incoming requests.

// const server = http.createServer(app);
// server.listen(5000);

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const User = require('./models/user')
const mongoConnect = require('./util/database').mongoConnect

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById('6050823da3e2e16b7fc63cb5').then(user => {
        req.user = user;
        next();
    }).catch(err => {
        console.log(err)
    })
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
    app.listen(8080);
})