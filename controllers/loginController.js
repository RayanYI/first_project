const {Users} = require('../models');
const profilView = require('./profilController');


const loginView  = (req,res) => {
    res.render("login", {
        text:"This is the dynamically set text!"
    } );
}

const testForm = async (req,res) =>{
    const data = req.body;
    const email = data.email;
    const pswd = data.password;

    Users.findOne({
      where : {

      }
    });

    Users.findOne({
        where: {
          email : email,
          password : pswd
        }
      }).then(user => {
        if (user) {
          console.log('User found:', user.toJSON());
          req.session.user = {email : email , password : pswd};
          res.redirect('/profil');
        } else {
          console.log('User not found.');
          res.redirect('/login');
        }
      }).catch(error => {
        console.error('Error:', error);
      });
}

const test  = (req,res) => {
    res.render("login", {
        text:"test!"
    } );
}

module.exports = {loginView, test, testForm};