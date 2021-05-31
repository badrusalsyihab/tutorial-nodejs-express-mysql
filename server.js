const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//call route
var routes = require('./routes');
routes(app);


//running server port 3000
app.listen(3001, () => {
    console.log(`Server started on port test`);
});