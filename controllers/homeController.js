"use strict";

let courses = [
    {
        title: "コース1",
        cost: 50
    },
    {
        title: "コース2",
        cost: 25
    },
    {
        title: "コース3",
        cost: 10
    }
];

exports.showCourses = (req, res) => {
    res.render("courses", {offeredCourses: courses});
};

exports.showSignUp = (req, res) => {
    res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};