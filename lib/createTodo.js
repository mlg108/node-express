'use strict';

const crypto = require('crypto');
console.log({ description });
const createTodo = function ({ description }) {
    return {
        id: crypto.randomUUID(),
        description,
        status: 'open'
     };
};

module.exports = { createTodo };