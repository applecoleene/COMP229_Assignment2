/*
File name: index.js
Student’s Name: Apple Coleene Duquinal
StudentID:  301000645
Date: October 24, 2021
*/

var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about me page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contacts', indexController.displayContactsPage);

//displaying login Page
router.get('/login', indexController.displayLoginPage);

//processing login Page
router.post('/login', indexController.processLoginPage);

//displaying register Page
router.get('/register', indexController.displayRegisterPage);

//processing register Page
router.post('/register', indexController.processRegisterPage);

//performing the logout button
router.get('/logout', indexController.performLogout);

module.exports = router;
