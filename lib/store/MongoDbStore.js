'use strict';

const { MongoClient } = require('mongodb');

class MongoDbStore {
    constructor({ hostname, port, username, password, database }) {
        this.hostname = hostname;
        this.port = port;
        this.username = username;
        this.password = password;
        this.database = database;
    }
    async initialize() {
        const connectionString = `mongodb://${this.username}:${this.password}@${this.hostname}:${this.port}/`;
        const client = new MongoClient(connectionString);

        await client.connect();

        const database = client.db(this.database);
        const collection = database.collection('todos');
        this.collection = collection;
    }
    async noteTodo({ todo }) {
        await this.collection.insertOne(todo);
    }

    async markTodoAsDone({ id }) {
        const { modifiedCount } = await this.collection.updateOne(
            { id },
            { $set: { status: 'done' } }
        );
        if (modifiedCount === 0) {
            throw new Error('Todo not found.');
        };
    };
    async getRemainingTodos() {
        return await this.collection.find(
            { status: 'open' },
            // { status: 'done' },
            // { projection: { id:1, description: 1, status:1 } }
            { projection: { _id: 0 } }
        ).toArray();
    };
    async getTodosAll() {
        // console.log('this.collection: ', this.collection);
        // return await this.collection.find(
        //     sort returned documents in ascending order by id (A->Z)
        //     { sort: { id: 1 } },
        //     Include only the `title` and `imdb` fields in each returned document
        //     { projection: { _id: 0 } }
        // ).toArray();
        return this.collection.find().toArray();
    };
};

module.exports = { MongoDbStore }; 