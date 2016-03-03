var express = require('express'),
    bodyParser = require('bodyParser'),
    _ = require('lodash'),
    expressSession = require('express-session');

var app = express();

app.use(express.static(_dirname + '/public'));
app.use(bodyParser.urlencoded);
app.use(bodyParser.json);
app.use(expressSession);
app.use(session({secret: config.server.secret}));


app.listen(8080, function() {
  console.log('Listening on 8080');
})
