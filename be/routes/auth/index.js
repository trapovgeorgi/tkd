const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../../config/config.json");
const dbo = require("../../db/conn");

const auth = express.Router();

auth.post("/login", (req, res) => {
	const db = dbo.getDb();

	const { username, password } = req.body;

	db.collection("users")
		.findOne({
			username: username,
			password: password,
		})
		.then((user) => {
			if (user) {
				const token = jwt.sign(
					{ _id: user._id, username: user.username, role: user.role },
					config.jwt.key,
					{}
				);
				// save user token
				user.token = token;
				// user
				res.status(200).json(user);
			} else {
				res.send("Something went WRONG");
			}
		});
});
module.exports = auth;
