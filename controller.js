'use strict';

var response = require('./rest');
var connection = require('./connection');

exports.index = function (req, res) {
   // console.log('run contrller');
    response.msg("Aplikasi REST API ku berjalan!", res)
};




//getData
exports.getData = function (req, res) {
    connection.query('SELECT * FROM users', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.msg(rows, res)
        }
    });
};


//findData
exports.findData = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM users WHERE id = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.msg(rows, res);
            }
        });
};


//addData
exports.addData = function (req, res) {
    var name = req.body.name;
    connection.query('INSERT INTO users (name) VALUES(?)',
        [name],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.msg("Store Data Success!", res)
            }
        });
};


//updateData
exports.updateData = function (req, res) {
    var name = req.body.name;
    var id = req.body.id;
    connection.query('UPDATE users SET name=? WHERE id=?', [name, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.msg("Update Data Success", res)
            }
        });
}


//removeData
exports.removeData = function (req, res) {
    var id = req.body.id;
    connection.query('DELETE FROM users WHERE id=?',[id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
               response.msg("remove Data Success", res)
            }
        });
}
