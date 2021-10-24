/*
File name: users.js
Student’s Name: Apple Coleene Duquinal
StudentID:  301000645
Date: October 24, 2021
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;