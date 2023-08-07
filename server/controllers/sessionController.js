const Session = require('../models//sessionModel');

const sessionController = {

    async isLoggedIn(req, res, next){
        console.log('isLoggedIn controller is running');
        console.log('req.cookies:', req.cookies);
        
        try{
            const session = await Session.findOne({ cookieId: req.cookies.ssid });

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
            })
        }
    },

};

module.exports = sessionController;