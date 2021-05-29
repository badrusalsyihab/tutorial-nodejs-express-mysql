'use strict';

var response = require('./rest');
var conn = require('./connection');

exports.index = function (request, res) {
    response.msg('API Running..', res);
   // console.log('API Running..', res);
}
