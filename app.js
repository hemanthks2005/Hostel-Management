
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./db/database'); // This will run the db connection and table creation

const app = express();
const port = 3000;

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key', // Replace with a real secret key in production
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using https
}));

// Middleware to make session available in all views
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// Routes
const indexRoutes = require('./routes/index');
const studentRoutes = require('./routes/students');
const roomRoutes = require('./routes/rooms');
const hostelRoutes = require('./routes/hostels');
const visitorRoutes = require('./routes/visitors');

app.use('/', indexRoutes);
app.use('/students', studentRoutes);
app.use('/rooms', roomRoutes);
app.use('/hostels', hostelRoutes);
app.use('/visitors', visitorRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('To initialize and seed the database, run the following command in your terminal:');
  console.log('node db/seed.js');
});
