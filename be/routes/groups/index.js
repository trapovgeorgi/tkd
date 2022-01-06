const express = require("express");
const dbo = require("../../db/conn");
const jwt = require("express-jwt");
const config = require("../../config/config.json");
const { ObjectId } = require("bson");
const groups = express.Router();

groups.use(jwt({ secret: config.jwt.key, algorithms: ["HS256"] }));

groups.get("/", (req, res) => {
	const db = dbo.getDb();
	db.collection("groups")
		.find({})
		.toArray(function (err, result) {
			if (err) {
				res.status(400).send("Error fetching listings!");
			} else {
				res.json(result);
			}
		});
});
groups.get(
	"/:id",
	jwt({ secret: config.jwt.key, algorithms: ["HS256"] }),
	(req, res) => {
		const db = dbo.getDb();
		db.collection("groups")
			.findOne({ _id: ObjectId(req.params.id) })
			.then((result) => {
				res.send(result);
			});
	}
);

groups.post("/", (req, res) => {
	const db = dbo.getDb();

	const name = req.body.name;

	db.collection("groups").insertOne({
		name: name,
	});
	res.send("Group Added");
});

groups.delete("/:id", (req, res) => {
	const db = dbo.getDb();

	db.collection("groups").deleteOne({ _id: ObjectId(req.params.id) });
	res.send("Group Deleted");
});

groups.put("/:id", (req, res) => {
	const db = dbo.getDb();

	const name = req.body.name;

	db.collection("groups").updateOne(
		{ _id: ObjectId(req.params.id) },
		{
			$set: {
				name: name,
			},
		}
	);

	res.send("Group Changed");
});

module.exports = groups;
