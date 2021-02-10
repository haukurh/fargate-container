'use strict';

const response = {
    json: (res, data, statusCode = 200) => {
        res.statusCode = statusCode;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data, null, 2));
    },
    text: (res, data, statusCode = 200) => {
        res.statusCode = statusCode;
        res.setHeader('Content-Type', 'text/plain');
        res.end(data);
    },
};

module.exports = response;
