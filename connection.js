var mysql = require('mysql');

//connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_api_js',
});

conn.connect((err) => {
    if (err) throw err;
    console.log('mysql connection');

});

module.exports = conn;
