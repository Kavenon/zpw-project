const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const busboyBodyParser = require('busboy-body-parser');
const server = require('http').createServer(app);
const authGuard = require('./auth-guard');
const authAdmin = require('./auth-admin');

app.use('/api/uploads', express.static('server/uploads'));
app.use(express.static('dist'));
app.use(busboyBodyParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // parse application/json
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    next();
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds113906.mlab.com:13906/zpw-2017', {
    useMongoClient: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection failed....'));
db.once('open', function () {
    console.log('database connected');
});

require('./auth');

app.use('/api/admin*', function (req, res, next) {
    authAdmin(req)
        .then(_ => next())
        .catch(_ => {
            res.sendStatus(401);
        });
});

app.use('/api/user*', function (req, res, next) {

    authGuard(req)
        .then(_ => next())
        .catch(_ => {
            res.sendStatus(401);
        });
});

app.use(require('./order.route'));
app.use(require('./product.route'));
app.use(require('./category.route'));
app.use(require('./upload.route'));
app.use(require('./cart.route'));

require('./socket').init(server);

app.get('*', function (req, res) {
  res.redirect('/');
});

server.listen(process.env.PORT || 5000);
