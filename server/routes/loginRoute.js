const express = require('express');
const loginController = require('../controllers/loginController')
const cookieController = require('../controllers/cookieController')
const sessionController = require('..//controllers/sessionController')

const loginRoute = express.Router();

//route will verify that login username matches stored password in database
loginRoute.post('/login', loginController.verifyInfo, sessionController.startSession, cookieController.setSSIDCookie, cookieController.setCookie, (req, res) => {
    if (res.locals.status){
        console.log('user verified');
        res.status(200).send(res.locals.status)
    } else {
        console.log('user not verified');
        res.status(201).send(res.locals.status)
    }
});

//route will create user in database and log them in
loginRoute.post('/signup', loginController.createUser, sessionController.startSession, cookieController.setSSIDCookie, cookieController.setCookie, (req, res) => {
    console.log('user created');
    res.status(201).send(res.locals.status)
});

//route will log user out by clearing session cookie and redirecting to login page
loginRoute.get('/logout', (req, res) => {
    console.log('user logged out');
    return res.clearCookie('ssid').redirect('/')
});

module.exports = loginRoute;