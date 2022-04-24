'use strict';

class InMemoryStore {
    constructor() {
        // Intentionally left blank
    }
    async initialize() {
        this.todos = [];
    }
    async markTodoAsDone({ id  }) {
        const todo =  this.todos.find(todo => todo.id === id);

        if(!todo) {
            throw new Error('Todo not found.');
        }
        todo.status = 'done';

    }
    async noteTodo({ todo }) {
        this.todos.push(todo)

    }
    async getRemainingTodos() {
        // return this.todos;
        return this.todos.filter(todo => todo.status === 'open');
        // return this.todos.filter(todo => todo.status === 'done');
    }
};

module.exports = { InMemoryStore }; 