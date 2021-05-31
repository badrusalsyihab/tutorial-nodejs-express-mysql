'use strict';

module.exports = function (app) {
    var myJson = require('./controller');

    app.route('/')
        .get(myJson.index);

    app.route('/get')
        .get(myJson.getData);

    app.route('/get/:id')
        .get(myJson.findData);

    app.route('/add')
        .post(myJson.addData);

    app.route('/update')
        .put(myJson.updateData);

    app.route('/delete')
        .delete(myJson.removeData);


}