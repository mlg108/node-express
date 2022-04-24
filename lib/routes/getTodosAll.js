'use strict';

const getTodosAll = function  ({ store })  {
    return async function (req, res) {
        const allTodos = await store.getTodosAll();
        res.json(allTodos);
    };
};

module.exports = { getTodosAll };