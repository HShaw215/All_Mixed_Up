const Session = require('../models//sessionModel');

const sessionController = {

    //controller checks if user has a session cookie ID already
    async isLoggedIn(req, res, next){
        console.log('isLoggedIn controller is running');
        console.log('req.cookies:', req.cookies);
        try{
            const session = await Session.findOne({ cookieID: req.cookies.ssid });

            if (!session){
                return res.send(false)
            } else{
                return next()
            }
        } catch(err){
            return next({
                log: `Error occured in isLoggedIn controller: ${err}`,
                status: 400,
                message: { err: "An error occurred" },
            });
        };
    },

    //controller creates a session when user logs in
    async startSession(req, res, next){
        console.log('startSession controller is running');
        console.log('user:', res.locals.user);
        try{
            await Session.findOneAndUpdate(
                { cookieID: res.locals.user },
                { createdAt: Date.now() },
                { upsert: true, setDefaultsOnInsert: true }
            );
            return next()
        } catch(err){
            return next({
                log: `Error occured in startSession controller: ${err}`,
                status: 400,
                message: { err: "An error occurred" },
            });
        };
    }

};

module.exports = sessionController;