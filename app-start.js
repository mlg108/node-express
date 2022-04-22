'use strict';

const { getApi, getApi } = require ('./lib/getApi')

const http = require ('http');

const getApi = getApi();

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type' : 'text/html'
    });
    res.write('<h1>Hallo Welt!</h1>\n');
    res.write(`<p>Verb: ${req.method}, Path: ${req.url}</p>\n`);
    res.end();
});

server.listen(3_000);

