
const cookieController = {

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