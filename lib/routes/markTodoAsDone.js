'use strict';

// const { createTodo } = require('../getTodos');

const markTodoAsDone = function  ({ store })  {
    return async function (req, res) {

        const id = req.params.id;
        // const { id } = req.params;

        try {
        await store.markTodoAsDone({ id });
        } catch {
            // res.json(404).end();
            // return;
            return res.json(404).end();
            
        }
        // res.json(200).end();
        // res.json({});

        const remainingTodos = await store.getRemainingTodos();
        res.json(remainingTodos);
    };
};

module.exports = { markTodoAsDone };