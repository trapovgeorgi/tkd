const express = require("express");
const auth = require("./auth");
const users = require('./users');
const children = require('./children');
const gropus = require("./groups");
const roles = require("./roles");
const reviews = require("./reviews");
const api = express.Router();

api.use('/users', users);
api.use('/auth', auth);
api.use('/children', children);
api.use('/groups', gropus);
api.use('/roles', roles);
api.use('/reviews', reviews);

module.exports = api 