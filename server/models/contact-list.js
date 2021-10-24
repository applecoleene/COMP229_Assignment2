/*
File name: contact-list.js
Student’s Name: Apple Coleene Duquinal
StudentID:  301000645
Date: October 24, 2021
*/

//instance variables
let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    phone: String,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact-List', contactModel);