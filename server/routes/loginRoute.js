const express = require('express');
const loginController = require('../controllers/loginController')

const loginRoute = express.Router();

//route will verify that login username matches stored password in database
loginRoute.post('/login', loginController.verifyInfo, (req, res) => {
    console.log('user verified');
    res.status(200).send(res.locals.status)
});

loginRoute.post('/signup', loginController.createUser, (req, res) => {
    console.log('user created');
    res.status(201).send(res.locals.status)
});

module.exports = loginRoute;