
const cookieController = {

    setCookie(req, res, next) {
        res.cookie('secret', Math.floor(Math.random() * 100).toString());
        return next();
    },



};

module.exports = cookieController;