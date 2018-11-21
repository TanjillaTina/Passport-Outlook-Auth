
var express = require('express');
const passport=require('passport');

//auth login
var loginPage= (req, res)=> {
    res.render('login');
  };


//auth logout
var logOut=(req, res)=>{
    //res.send('respond with a logout');
    //logout is handled with passport
    req.logout();
    res.redirect('/');
  };


//callback route for gogle to redirect to
var RedirectProfilePage=(req, res)=>{
    res.redirect('/profile/');
  };

  
module.exports = {
    loginPage,
    logOut,
    RedirectProfilePage
    };
  