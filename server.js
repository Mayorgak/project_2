const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const session = require('express-session');

const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };
// app.use(session(sess));


const app = express(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//sets up direct access to webpage
app.use(express.static(path.join(__dirname, 'public')));

//handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defautlLayout:"main"}));
app.set('view engine', 'handlebars');


// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
