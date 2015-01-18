var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var config = require('./app/config/config.js');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

require('./app/routes/routes.js')(router);

app.use('/api', router);
app.listen(config.port);
console.log('Magic happens on port ' + config.port);