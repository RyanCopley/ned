'use strict';
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const glob = require('glob');
const _ = require("lodash");

const app = startHTTPServer();

function startHTTPServer() {
    const app = express();
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    const port = process.env.PORT || 8123;
    app.listen(port, '0.0.0.0', function(err) {
        console.log("Webserver started on port:", port);
        if (err) {
            process.exit(0);
        }
    });
    return app;
}