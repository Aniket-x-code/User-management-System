const axios= require('axios');
const { response } = require('express');


exports.homeRoute = (req,res)=>{
    // making a get req to api/users
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index', { users: response.data});
    })
    .catch(err=>{
        res.send(err)
    })
    
}


exports.add_user = (req,res)=>{
    res.render('add_user');
}

exports.update_user = (req,res)=>{
    res.render('update_user');
}