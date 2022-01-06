//requires
const express = require("express");
const cors = require("cors");
const config = require('./config/config.json');
//routes
const api = require('./routes/api');

//setup
const app = express();
const port = config.app.port;
var MongoClient = require("mongodb").MongoClient;
var url = config.db.url;

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', api);

app.listen(port, "0.0.0.0",() => {
	console.log(`Example app listening at http://localhost:${port}`);
});
