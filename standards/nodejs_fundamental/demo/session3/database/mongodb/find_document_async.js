// To create DB, we need MongoClient object
const mongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/"
const dbName = 'mydb';

mongoClient.connect(url, { useUnifiedTopology: true }, async (err, client) => {
    if (err) throw err;
    console.log("Connect to Database!");
    const db = client.db(dbName);
    const query = {
        name: 'NashTech'
    };

    const result = await findOne(db, 'customers', query);
    console.log('Ket qua: ', result);
    await client.close();
});

const findOne = async (db, collectionName, query) => {
    try {
        // Get document of collection
        const collection = db.collection(collectionName);
        return await collection.findOne(query);
    } catch (err) {
        throw err
    }
}