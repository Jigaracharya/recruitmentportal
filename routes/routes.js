var chalk = require('chalk');

exports.loginPageHandler = function (req, res) {
    res.render('login.handlebars');
};

exports.loginAuthPageHandler = function (req, res) {
    res.render('index.handlebars');
};

exports.referPageHandler = function (req, res) {
    res.render('refer.handlebars');
};
exports.hirePageHandler = function (req, res) {
    res.render('hire.handlebars');
};
exports.aboutusPageHandler = function (req, res) {
    res.render('aboutus.handlebars');
};
exports.contactusPageHandler = function (req, res) {
    res.render('contactus.handlebars');
};
exports.signupPageHandler = function (req, res) {
    res.render('signup.handlebars');
};

exports.accountHomePageHandler = function (req, res) {
    res.render('index.handlebars');
};

exports.manageContactPageHandler = function (req, res) {
    res.render('contact/managecontacts.handlebars');
};

exports.viewJobPostringPageHandler = function (req, res) {
    res.render('jobposting/viewjobposting.handlebars');
};

exports.newJobPostringPageHandler = function (req, res) {
    res.render('jobposting/newjobposting.handlebars');
};

exports.newResumePageHandler = function (req, res) {
    res.render('resume/newresume.handlebars');
};
exports.viewResumePageHandler = function (req, res) {
    res.render('resume/viewresume.handlebars');
};

exports.viewMessagePageHandler = function (req, res) {
    res.render('message/viewmessage.handlebars');
};


exports.newMessagePageHandler = function (req, res) {
    res.render('message/newmessage.handlebars');
};

exports.viewNotificationPageHandler = function (req, res) {
    res.render('notification/viewnotification.handlebars');
};

exports.newNotificationPageHandler = function (req, res) {
    res.render('notification/newnotification.handlebars');
};

exports.referralPageHandler = function (req, res) {
    res.render('referral/index.handlebars');
};

exports.reportsPageHandler = function (req, res) {
    res.render('report/index.handlebars');
};

exports.report1PageHandler = function (req, res) {
    res.render('report/report1.handlebars');
};

exports.report2PageHandler = function (req, res) {
    res.render('report/report2.handlebars');
};

exports.report3PageHandler = function (req, res) {
    res.render('report/report3.handlebars');
};

exports.profilePageHandler = function (req, res) {
    res.render('profile/personalprofile.handlebars');
};

exports.recruitmentProfilePageHandler = function (req, res) {
    res.render('profile/recruiterprofile.handlebars');
};

exports.logoutPageHandler = function (req, res) {
    res.render('login.handlebars');
};
