var express = require('express');



var indexPage= (req, res)=> {
    res.render('index', { user: req.user });
  };
  
module.exports = {
    indexPage
    };
  
  