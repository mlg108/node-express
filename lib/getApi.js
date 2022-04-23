'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { getTodos } = require('./routes/getTodos');
const { noteTodo } = require('./routes/noteTodo');

const getApi = function ({ store }) {
    const api = express();

    api.use(cors());
    api.use(bodyParser.json());

    // Commands
    api.post('/note-todo', noteTodo({ store }));

    // Queries
    api.get('/todos', getTodos({ store }));

    return api;

}

module.exports = { getApi };