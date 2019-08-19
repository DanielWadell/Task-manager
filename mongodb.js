// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'Task-Manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Daniel',
    //     age: '19'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Gen',
    //         age: 19
    //     }, {
    //         name:'Cory',
    //         age: 19
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'take out the trash',
            completed: true
        }, {
            description: 'feed the dog',
            completed: true
        }, {
            description: 'mow the lawn',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }

        console.log(result.ops)
    })
})