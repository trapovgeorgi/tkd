const express = require("express");
const dbo = require("../../db/conn");
const jwt = require("express-jwt");
const config = require("../../config/config.json");
const { ObjectId } = require("bson");
const children = express.Router();
//Get All
children.get(
	"/",
	jwt({ secret: config.jwt.key, algorithms: ["HS256"] }),
	(req, res) => {
		const db = dbo.getDb();
		db.collection("children")
			.find({})
			.toArray(function (err, result) {
				if (err) {
					res.status(400).send("Error fetching listings!");
				} else {
					res.json(result);
				}
			});
	}
);
//Get Single
children.get(
	"/:id",
	jwt({ secret: config.jwt.key, algorithms: ["HS256"] }),
	(req, res) => {
		const db = dbo.getDb();
		db.collection("children")
			.findOne({ _id: ObjectId(req.params.id) })
			.then((result) => {
				res.send(result);
			});
	}
);
//Add
children.post("/", (req, res) => {
	const db = dbo.getDb();

	const name = req.body.name;
	const age = req.body.age;

	db.collection("children").insertOne({
		name: name,
		age: age,
	});
	res.send("Child Added");
});
//Remove 
children.delete("/:id", (req, res) => {
	const db = dbo.getDb();

	db.collection("children").deleteOne({ _id: ObjectId(req.params.id) });
	res.send("Child Deleted");
});
//Change 
children.put("/:id", (req, res) => {
	const db = dbo.getDb();

	const age = req.body.age;
	const name = req.body.name;

	db.collection("children").updateOne(
		{ _id: ObjectId(req.params.id) },
		{
			$set: {
				name: name,
				age: age,
			},
		}
	);

	res.send("Child Changed");
});
//Add Mark
children.put("/marks/:id", (req, res) => {
	const db = dbo.getDb();

	const mark = req.body;

	db.collection("children").updateOne(
		{ _id: ObjectId(req.params.id) },
		{
			$push: {
				marks: mark
			},
		}
	);

	res.send("Child Mark Added");
});

//Remove Mark
children.delete("/marks/:id", (req, res) => {
	const db = dbo.getDb();

	const mark = req.body;
	console.log(mark)

	db.collection("children").updateOne(
		{ _id: ObjectId(req.params.id) },
		{
			$pull: {
				marks: mark
			},
		}
	);

	res.send("Child Mark Added");
});
//Add Comment
children.put("/comments/:id", (req, res) => {
	const db = dbo.getDb();

	const comment = req.body;

	db.collection("children").updateOne(
		{ _id: ObjectId(req.params.id) },
		{
			$push: {
				comments: comment
			},
		}
	);

	res.send("Child Mark Added");
});

//Remove Comment
children.delete("/comments/:id", (req, res) => {
	const db = dbo.getDb();

	const comment = req.body;

	db.collection("children").updateOne(
		{ _id: ObjectId(req.params.id) },
		{
			$pull: {
				comments: comment
			},
		}
	);

	res.send("Child Mark Added");
});
module.exports = children;
