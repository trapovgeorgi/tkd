const { MongoClient } = require("mongodb");
const config = require('../config/config.json');

const connectionString = config.db.url;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect()
let dbConnection = client.db("gogo");

module.exports = {
  getDb: function () {
    return dbConnection;
  },
};