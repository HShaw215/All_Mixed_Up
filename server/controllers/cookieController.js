
const cookieController = {

    //controller creates secret key cookie for verification
    setCookie(req, res, next) {
        try{
            res.cookie('secret', Math.floor(Math.random() * 100).toString());
            return next();
        }
        catch {
            return next({
                log: `Error occured in setSSIDCookie controller: ${err}`,
                status: 400,
                message: { err: "An error occurred" },
            });
        }
    },

    //controller creates session cookie assigned to usersname for session authentication
    setSSIDCookie(req, res, next) {
        try{
            res.cookie('ssid', res.locals.user, { httpOnly: true });
            return next()
        }
        catch {
            return next({
                log: `Error occured in setSSIDCookie controller: ${err}`,
                status: 400,
                message: { err: "An error occurred" },
            });
        }
    }

};

module.exports = cookieController;