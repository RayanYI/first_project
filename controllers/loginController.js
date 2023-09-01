const {Users} = require('../models');
const secretKey = require('../secretKey');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt');

const loginView  = (req,res) => {
    res.render("login", {
        text:"This is the dynamically set text!"
    } );
}

const test  = (req,res) => {
    res.render("login", {
        text:"test!"
    } );
}
const testForm = async (req, res) => {
    try {
        const data = req.body;
        const email = data.email;
        const password = data.password;

        const token = req.cookies.token;

        if (token) {
            try {
                await jwt.verify(token, secretKey);
                res.redirect('/profil');
            } catch (err) {
                loginUser(email, password, res);
            }
        } else {
            loginUser(email, password, res);
        }
    } catch (error) {
        console.error('Error:', error);
        res.redirect('/login');
    }
};

async function loginUser(email, password, res) {
    try {
        const user = await Users.findOne({
            where: {
                email: email
            }
        });

        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                const payload = { email: user.email };
                const token = jwt.sign(payload, secretKey, { expiresIn: '30s' });
                res.cookie('token', token, { maxAge: 30000, httpOnly: true });
                res.redirect('/profil');
            } else {
                console.error('Invalid password');
                res.redirect('/login');
            }
        } else {
            res.redirect('/register');
        }
    } catch (error) {
        console.error('Error:', error);
        res.redirect('/login');
    }
}

module.exports = {loginView, test, testForm};