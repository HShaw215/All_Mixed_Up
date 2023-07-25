const express = require('express');
const loginController = require('../controllers/loginController')

const loginRoute = express.Router();

//route will verify that login username matches stored password in database
loginRoute.post('/', loginController.verifyInfo, (req, res) => {
    console.log('user verified');
    res.status(200).send(res.locals.status)
});

module.exports = loginRoute;