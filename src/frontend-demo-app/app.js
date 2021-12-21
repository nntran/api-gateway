var express = require('express');
var app = express();
var stringReplace = require('string-replace-middleware');

var KC_URL = process.env.KC_URL || "http://keycloak.dev.lan/auth";
var SERVICE_URL = process.env.SERVICE_URL || "http://api.dev.lan/v1/product/1YMWWN1N4O";

app.use(stringReplace({
   'SERVICE_URL': SERVICE_URL,
   'KC_URL': KC_URL
}));
app.use(express.static('.'))

app.get('/', function(req, res) {
    res.render('index.html');
});


app.listen(8000);