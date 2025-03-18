const express = require('express');
const signUP = require('../controllers/user.controller');
const userRouts = express.Router();


userRouts.post('/register',signUP);

module.exports = userRouts;