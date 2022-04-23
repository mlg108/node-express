'use strict';

class InMemoryStore {
    constructor() {
        // Intentionally left blank
    }
    async initialize() {
        this.todos = [];
    }
    async noteTodo({ todo }) {
        this.todos.push(todo)

    }
    async getRemainingTodos() {
        return this.todos;
    }
};

module.exports = { InMemoryStore }; 