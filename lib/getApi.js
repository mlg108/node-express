'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require ('express');
const { getTodos } = require('./routes/getTodos');
const ( { getTodos }) = require = ('./routes/getTodos');

const getApi = function () {
    const api = express();

    api.use(cors());
    api.use(bodyParser.json());

    api.get('/todos', getTodos());

    return api;

}

module.exports = { getApi };