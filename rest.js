'use stirct';

exports.msg = function (values, rest) {
    var data = {
        'status': 200,
        'values': values
    };

    rest.json(value);
    rest.end();

}