const { User } = require('../models/songModel');

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
                const check = bcrypt.compare(password, user.password);
                if (!check){
                    res.locals.status = false;
                } else {
                    res.locals.user = user.id;
                    return next()
                }
            }
        }
        catch {
            return next({
                err: {err : 'Invalid username or password'}
            });
        }
    },


    //declare method createUser that creates a new user in database 
    async createUser(req, res, next) {
        console.log('createUser controller running')
        const { username, password } = req.body;
        try{
            res.locals.user = await User.create( { username, password } );
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