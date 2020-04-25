"use strict";

const port = 3000;
const express = require("express"),
    app = express();
const layouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(layouts);
const homeController = require("./controllers/homeController");

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// 経路
app.get("/", (req, res) => {
    res.send("Welcome to Confetti Cuisine!");
});
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.listen(app.get("port"), () => {
    console.log('Server running at http://localhost:3000');
});