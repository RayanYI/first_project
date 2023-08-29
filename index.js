const express = require('express');
const bodyParser = require('body-parser'); // Module pour analyser les données du corps de la requête
const session = require('express-session'); // Import the express-session module
const app = express();
const port = 3000;
const loginController = require("./controllers/loginController");
const db = require('./models');

app.set('view engine', 'ejs');

// Middleware pour analyser les données du corps de la requête au format JSON
app.use(bodyParser.json());
// Middleware pour analyser les données du corps de la requête au format x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize the express-session middleware before routes
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use('/public', express.static('public'));

app.use('/hello', require('./routes/hello'));

app.use('/login', require('./routes/login'));
app.post('/login', loginController.testForm);

app.use('/profil',require('./routes/profil'));

db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
});

