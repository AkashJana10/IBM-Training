const express = require('express');
const signUP = require('../controllers/user.controller');
const userRouts = express.Router();

userRouts.post('/user-register',signUP);


module.exports = userRouts;