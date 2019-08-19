// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'Task-Manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').findOne({ name: 'Gen' }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 19 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 19 }).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID("5d5a2f974da70246444c39b5")}, (error, task) => {
        if (error) {
            return console.log('Unable to fetch!')
        }

        console.log(task)
    })

    db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
        console.log(tasks)
    })
})