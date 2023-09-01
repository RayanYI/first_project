const {Users} = require('../models');
const bcrypt = require("bcrypt");

const registerView = async (req,res) => {
    res.render('register');
}
const registerUser = async (req,res) =>{

    const saltRounds = 10;

    const data = req.body;
    const email = data.email;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    const isEmailUsed = await Users.count({
        where: {
            email : email
        }
    });

    if(isEmailUsed === 0){
        await Users.create({
            email : email,
            password : hashedPassword
        });

        console.log('added');
    }

    res.redirect('/login');
}

module.exports = {registerView,registerUser};