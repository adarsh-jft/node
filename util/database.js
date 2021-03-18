// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// let _db;

// const mongoConnect = (callback) => {
//     MongoClient.connect('mongodb+srv://Adarsh:pywnbUdo1ntIBEE9@cluster0.rc39p.mongodb.net/shop?retryWrites=true&w=majority').then(client => {
//         console.log('Connected')
//         _db = client.db()
//         callback()
//     }).catch(err => {
//         console.log(err)
//         throw err;
//     });
// }

// const getDb = () => {
//     if (_db) {
//         return _db;
//     }
//     throw 'No database found !'
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;

const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_complete',
    password: 'password'
});

module.exports = pool.promise();