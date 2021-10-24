/*
File name: contact-list.js
Student’s Name: Apple Coleene Duquinal
StudentID:  301000645
Date: October 24, 2021
*/

//instance variables
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// connect to our Contact list Model
let Contact = require('../models/contact-list');

let contactController = require('../controllers/contact-list');

function requireAuth(req, res, next)
{
    //check user status
    if(!req.isAuthenticated()) //if user is not logged in
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

//displaying Add Page
router.get('/add', requireAuth, contactController.displayAddPage);

//processing the Add Page
router.post('/add', requireAuth, contactController.processAddPage);

//displaying Edit Page
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

//processing Edit Page
router.post('/edit/:id', requireAuth, contactController.processEditPage);

//performing the Delete button
router.get('/delete/:id', requireAuth, contactController.performDeleteContact);


module.exports = router;