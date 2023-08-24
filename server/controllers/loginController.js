const { User } = require('../models/songModel');
const bcrypt = require('bcryptjs')

const loginController = {

    //declare method verifyInfo that checks if input password matches database password to login user
    async verifyInfo(req, res, next) {
        console.log('verifyInfo controller running')
        const { username, password } = req.body;
        try{
            const user = await User.findOne( { username } );
            if (!user){
                res.locals.status = false;
                return next();
            } else {
                const check = await bcrypt.compare(password, user.password);
                console.log('check:', check)
                if (!check){
                    res.locals.status = false;
                    return next()
                } else {
                    res.locals.status = true;
                    res.locals.user = user.username;
                    return next()
                }
            }
        }
        catch(err) {
            return next({
                log: `Error occured in verifyInfo controller: ${err}`,
                status: 400,
                message: { err: "An error occurred" },
            });
        }
    },


    //declare method createUser that creates a new user in database 
    async createUser(req, res, next) {
        console.log('createUser controller running')
        const { username, password } = req.body;
        try{
            await User.create( { username, password } );
            res.locals.user = username;
            res.locals.status = true
            return next()
        }
        catch(err){
            return next({
                log: `Error occured in createUser controller: ${err}`,
                status: 400,
                message: { err: "An error occurred" },
            });
       }
    }
    

};


module.exports = loginController;