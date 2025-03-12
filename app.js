//* Require the necessary modules
require("dotenv").config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");

//* Connect to the database
mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((err) => {
        console.log("Error connecting to the database", err);
    });

//* Require the routes
const indexRouter = require('./routes/index');

//* Set up the express app
const port = process.env.PORT || 3000;
const app = express();

//* view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//* Use the necessary middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//* Use the routes
app.use('/', indexRouter);

//* Catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

//* Error handler
app.use(function (err, req, res) {
    //* set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //* render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

module.exports = app;
