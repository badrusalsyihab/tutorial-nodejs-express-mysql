const bodyParser = require('body-parser');
const express = require('express');
const app = express();


//parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//call route
var routes = require('./routes');

//running server port 3000
app.listen(3000, () => {
    console.log(`Server started on port`);
});