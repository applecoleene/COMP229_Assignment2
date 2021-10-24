/*
File name: index.js
Student’s Name: Apple Coleene Duquinal
StudentID:  301000645
Date: October 24, 2021
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//user model instance
let userModel = require('../models/user');
let User = userModel.User;

//showing home page using exports
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home', displayName: req.user ? req.user.displayName : ''});
}

//showing about page using exports
module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', {title: 'About Me', displayName: req.user ? req.user.displayName : ''});
}

//showing projects page using exports
module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects', displayName: req.user ? req.user.displayName : ''});
}

//showing services page using exports
module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services', displayName: req.user ? req.user.displayName : ''});
}

//showing contacts page using exports
module.exports.displayContactsPage = (req, res, next) => {
    res.render('contacts', { title: 'Contact', displayName: req.user ? req.user.displayName : ''});
}

//showing the login page
module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user)
    {
        res.render('auth/login', 
        {
           title: "Login",
           messages: req.flash('loginMessage'),
           displayName: req.user ? req.user.displayName : '' 
        })
    }
    else
    {
        return res.redirect('/');
    }
}

//processing the login page
module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        if(err) //if there's an error
        {
            return next(err);
        }
        if(!user) //if there's a user login error
        {
            req.flash('loginMessage', 'Authentication Error. Please check and enter valid information.');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if(err)
            {
                return next(err);
            }
            return res.redirect('/contact-list');
        });
    })(req, res, next);
}

//showing the diaplay page
module.exports.displayRegisterPage = (req, res, next) => {
    //login status
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

//processing the register page
module.exports.processRegisterPage = (req, res, next) => {
    //create an object for the user
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
            //redirect and authenticate user if there is no error
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/contact-list')
            });
        }
    });
}

//performing the loging out process
module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}