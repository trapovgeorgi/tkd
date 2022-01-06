const express = require("express");
const dbo = require("../../db/conn");
const jwt = require("express-jwt");
const config = require("../../config/config.json");
const { ObjectId } = require("bson");
const users = express.Router();

users.get("/", (req, res) => {
	const db = dbo.getDb();
	db.collection("users")
		.find({})
		.toArray((err, result) => {
			if (err) {
				res.status(400).send("Error fetching listings!");
			} else {
				res.json(result);
			}
		});
});

users.get("/:id", (req, res) => {
	const db = dbo.getDb();
	db.collection("users")
		.findOne({ _id: ObjectId(req.params.id) })
		.then((result) => {
			res.send(result);
		});
});

users.post("/", (req, res) => {
	const db = dbo.getDb();

	const { username, password, role } = req.body;
	db.collection("users").insertOne({
		username,
		password,
		role,
	});
	res.send("User Added");
});

users.delete("/:id", (req, res) => {
	const db = dbo.getDb();

	db.collection("users")
		.deleteOne({ _id: ObjectId(req.params.id) })
		.then((deleted) => {
			if (deleted.deletedCount < 1) {
				res.status(404).send("No User Deleted");
			} else {
				res.send("User Deleted");
			}
		});
});

users.put("/:id", (req, res) => {
	const db = dbo.getDb();
	const password = req.body.password;
	db.collection("users").updateOne(
		{ _id: ObjectId(req.params.id) },
		{
			$set: {
				password: password,
			},
		}
	);
	res.send("User Changed");
});

module.exports = users;
