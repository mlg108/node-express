'use strict';

const getTodos = function  ()  {
    return function (req, res) {
        res.json( { message: 'Hallo Welt!\n' });
    };
};


module.exports = { getTodos };