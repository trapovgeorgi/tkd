const express = require("express");
const dbo = require("../../db/conn");
const jwt = require("express-jwt");
const config = require("../../config/config.json");
const { ObjectId } = require("bson");
const reviews = express.Router();

reviews.post("/:id", (req, res) => {
	const db = dbo.getDb();
	const review = req.body;

	db.collection("children").updateOne(
		{ _id: ObjectId(req.params.id) },
		{
			$push: {
				reviews: review,
			},
		}
	);

	res.send("Child Review Added");
});

reviews.delete("/:id", (req, res) => {
	const db = dbo.getDb();

	const review = req.body;

	db.collection("children").updateOne(
		{ _id: ObjectId(req.params.id) },
		{
			$pull: {
				reviews: review,
			},
		}
	);

	res.send("Child Review Added");
});

module.exports = reviews;
