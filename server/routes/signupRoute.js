const express = require('express');

const signupRoute = express.Router();

//route will create new user in database and return boolean if user was able to be created
signupRoute.post('/', signupController.createUser, (req, res) => {
    console.log('user created');
    res.status(201).send(res.locals.status)
});

module.exports = signupRoute;
