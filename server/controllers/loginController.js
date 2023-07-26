const { User } = require('../models/songModel');

const loginController = {

    //declare method verifyInfo that checks if input password matches database password to login user
    async verifyInfo(req, res, next) {
        
        return next()
    },


    //declare method createUser that creates a new user in database 
    async createUser(req, res, next) {
       
        return next()
    }
    

};


module.exports = loginController;