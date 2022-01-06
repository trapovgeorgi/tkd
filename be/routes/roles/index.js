const express = require("express");
const jwt = require("express-jwt");
const config = require("../../config/config.json");
const roles = express.Router();

roles.use(jwt({ secret: config.jwt.key, algorithms: ["HS256"] }));

roles.get("/", (req, res) => {
	res.send(req.user);
});

module.exports = roles;
