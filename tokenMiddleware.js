const jwt = require("jsonwebtoken");
const secretKey = require("./secretKey");
const verifyTokenMiddleware = (req, res, next) => {
    // Vérifier si le token est présent dans les cookies
    const token = req.cookies.token;

    if (token) {
        try {
            jwt.verify(token, secretKey);
            res.redirect('/profil');
        } catch (err) {
            next();
        }
    } else {
        next();
    }
};

const verifyTokenAvailabilityMiddleware = (req, res, next) => {
    // Vérifier si le token est présent dans les cookies
    const token = req.cookies.token;

    if (token) {
        try {
            jwt.verify(token, secretKey);
            next();
        } catch (err) {
            res.redirect('/login');
        }
    } else {
        res.redirect('/login');
    }
};

module.exports = {verifyTokenMiddleware , verifyTokenAvailabilityMiddleware};