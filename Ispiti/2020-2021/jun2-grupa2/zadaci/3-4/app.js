const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Ispiti", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ispitiRoutes = require("./routes/ispiti");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/ispiti", ispitiRoutes);

app.use(function (req, res, next) {
    const err = new Error("Pokušali ste da učitate stranicu koja ne postoji: " + req.url);
    err.status = 404;

    next(err);
});

// eslint-disable-next-line no-unused-vars
app.use(function (error, req, res, next) {
    console.error(error.stack);

    const statusCode = error.status || 500;
    res.status(statusCode).json({
        errorMessage: error.message,
        errorCode: statusCode,
    });
});

module.exports = app;
