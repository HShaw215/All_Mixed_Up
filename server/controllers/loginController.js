const { User } = require('../models/songModel');

const loginController = {

    //declare method verifyInfo that checks if input password matches database password to login user
    async verifyInfo(req, res, next) {
        console.log('verifyInfo controller running')
       
    },


    //declare method createUser that creates a new user in database 
    async createUser(req, res, next) {
        console.log('createUser controller running')
        const { username, password } = req.body;
        try{
            res.locals.user = User.create( { username, password } );
            return next()
        }
       catch{
        return next({
            err: {err : 'Username already taken'}
        });
       }
    }
    

};


module.exports = loginController;