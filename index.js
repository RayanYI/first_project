const express = require('express');
const bodyParser = require('body-parser'); // Module pour analyser les données du corps de la requête
const app = express();
const port = 3000;
const loginController = require("./controllers/loginController");
const registerController = require ("./controllers/registerController");
const db = require('./models');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');

// Middleware pour analyser les données du corps de la requête au format JSON
app.use(bodyParser.json());
// Middleware pour analyser les données du corps de la requête au format x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/public', express.static('public'));

app.use('/hello', require('./routes/hello'));

app.use('/login', require('./routes/login'));
app.post('/login', loginController.testForm);

app.use('/register', require('./routes/register'));
app.post('/register', registerController.registerUser);

app.use('/profil',require('./routes/profil'));

db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
});