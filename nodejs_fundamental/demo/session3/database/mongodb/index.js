// To create DB, we need MongoClient object
const mongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const dbName = 'mydb';

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    console.log("Connect to Database!");
    const db = client.db(dbName);
    const data = [
        // {name: 'NashTech', addr:'364 Cong Hoa'},
        // {name: 'KMS', addr:'123 Cong Hoa'},
        {name: 'Testing', email: 'abc@gmail.com'}
    ]
    // insertDocument(db, 'customers', data, () => {
    //
    //     console.log('Insert Thanh cong');
    //
    // });

    findAllDocuments(db, 'customers', () => {
        console.log('Da select xong');
        client.close();
    });
});

const findAllDocuments = (db, collectionName, callback) => {
    // Get document of collection
    const collection = db.collection(collectionName);
    collection.find({}).toArray((err, docs) => {
        if (err) throw err;
        console.log('Found the following records');
        console.log(docs);
        callback(docs);
    });
}

const insertDocument = (db, collectionName, data, callback) => {
    // Get document of collection
    const collection = db.collection(collectionName);
    collection.insertMany(data, (err, result) => {
        if (err) throw err;
        console.log(`Inserted ${result.ops.length} documents into the collection`);
        callback(result);
    });
}