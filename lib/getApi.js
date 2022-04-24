'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { getTodos } = require('./routes/getTodos');
const { getTodosAll } = require('./routes/getTodosAll');
const { markTodoAsDone } = require('./routes/markTodoAsDone');
const { noteTodo } = require('./routes/noteTodo');

const getApi = function ({ store }) {
    const api = express();

    api.use(cors());
    api.use(bodyParser.json());

    // Commands
    api.post('/note-todo', noteTodo({ store }));
    api.post('/mark-todo-as-done/:id', markTodoAsDone({ store }));

    // Queries
    api.get('/todos-all', getTodosAll({ store }));
    api.get('/todos', getTodos({ store }));

    return api;

}

module.exports = { getApi };