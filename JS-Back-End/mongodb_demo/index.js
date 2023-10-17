const { MongoClient } = require('mongodb');

const connectionString = 'mongodb://127.0.0.1:27017'

const client = new MongoClient(connectionString);

async function connectDB() {
    try {
        await client.connect();
        console.log('Database is connected');
        const db = client.db('test1')
        const pets = db.collection('my_pets')
        const name =  await pets.find().toArray()
        console.log(name);
        
    } catch (error) {
        console.error('Database connection errors', error);
        client.close()
    }

}

connectDB()


