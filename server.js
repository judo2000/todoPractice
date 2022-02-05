require('dotenv').config();
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./routes');
const sequelize = require('./config');

// configure handlebars
const hbs = exphbs.create({});

// create our app
const app = express();

// set the port
const PORT = process.env.PORT || 3001;

// configure sessions setting object
const sessionSettings = {
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: false,
}


// tell node we are using handlebars as out templating engine
// configure handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use sessions
app.use(session(sessionSettings));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});