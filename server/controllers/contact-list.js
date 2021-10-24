/*
File name: contact_list.js
Student’s Name: Apple Coleene Duquinal
StudentID:  301000645
Date: October 24, 2021
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contact list Model
let Contact = require('../models/contact-list');

//showing contact list
module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, conList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(conList)
            res.render('contact-list/list', {title: 'Contact List', ContactList: conList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

//showing add page
module.exports.displayAddPage = (req, res, next) => {
    res.render('contact-list/add', {title: 'Add Contact', 
    displayName: req.user ? req.user.displayName : ''});  
}

//processing the add page using module exports
module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh and go to contact list
            res.redirect('/contact-list');
        }
    });
}

//showing edit page using module exports
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    Contact.findById(id, (err, editContact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh and go to contact list
            res.render('contact-list/edit', {title: 'Edit Contact', contactList: editContact, 
            displayName: req.user ? req.user.displayName : ''});
        }
    })
}

//processing the edit page
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let editedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, editedContact, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh and go to contact list
            res.redirect('/contact-list');
        }
    });
}

//performing the deletion of business contact
module.exports.performDeleteContact = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh and go to contact list
            res.redirect('/contact-list');
        }
    });
}