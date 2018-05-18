const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./api');
const app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'dist'))); // Point static path to dist
 
app.use('/api', api); // Set our api routes 
app.get('/[^\.]+$', function ( req, res){
  res.set('Content-Type', 'text/html').sendFile(path.join(__dirname, '/public/index.html'))
}); //Catch all other routes and return the index file
 
const port = process.env.PORT || '8080';  //port setting
app.set('port', port);
app.listen(port, function(){
  console.log("Listening at localhost" + app.get('port'))
});