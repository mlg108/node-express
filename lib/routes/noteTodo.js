'use strict';

const { createTodo } = ('../createTodo');

const noteTodo = function ({ store }) {
    return async function (req, res) {

        const { description } = req.body;
        // console.log({ description });
        // return;
        const todo = createTodo({ description });

        await store.noteTodo({ todo });

        res.json({ id: todo.id });
    };
};

module.exports = { noteTodo };

