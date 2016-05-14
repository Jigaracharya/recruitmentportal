var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');
var hbs = require('express-handlebars');
var chalk = require('chalk')

var routes = require('./routes/routes.js');

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(session({ secret: "secret", resave : true, saveUninitialized : false }));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs({}));

app.get('/', routes.loginPageHandler);
app.get('/login', routes.loginPageHandler);
app.get('/logout', routes.logoutPageHandler);
app.post('/loginAuth', routes.loginAuthPageHandler);
app.get('/refer', routes.referPageHandler);
app.get('/hire', routes.hirePageHandler);
app.get('/aboutus', routes.aboutusPageHandler);
app.get('/contactus', routes.contactusPageHandler);
app.get('/signup', routes.signupPageHandler);
app.post('/signup', routes.signupSavePageHandler);
app.get('/account/', routes.accountHomePageHandler);
app.get('/account/index', routes.accountHomePageHandler);
app.get('/account/contact/manage', routes.manageContactPageHandler);
app.get('/account/jobposting/view', routes.viewJobPostringPageHandler);
app.get('/account/jobposting/new', routes.newJobPostringPageHandler);
app.get('/account/resume/view', routes.viewResumePageHandler);
app.get('/account/resume/new', routes.newResumePageHandler);
app.get('/account/message/view', routes.viewMessagePageHandler);
app.get('/account/message/new', routes.newMessagePageHandler);
app.get('/account/notification/view', routes.viewNotificationPageHandler);
app.get('/account/notification/new', routes.newNotificationPageHandler);
app.get('/account/referral', routes.referralPageHandler);
app.get('/account/reports', routes.reportsPageHandler);
app.get('/account/reports/report1', routes.report1PageHandler);
app.get('/account/reports/report2', routes.report2PageHandler);
app.get('/account/reports/report3', routes.report3PageHandler);
app.get('/account/profile', routes.profilePageHandler);
app.get('/account/recruiterprofile', routes.recruitmentProfilePageHandler);

app.get('/account/assignmanager', routes.assignManagerPageHandler);
app.get('/account/newaccountmanager', routes.newAccountManagerPageHandler);
app.get('/account/viewaccountmanager', routes.viewAccountManagerPageHandler);
app.get('/account/newclient', routes.newClientPageHandler);
app.get('/account/viewclients', routes.viewclientsPageHandler);
app.get('/account/newrecruiter', routes.newRecruiterPageHandler);
app.get('/account/viewrecruiters', routes.viewRecruitersPageHandler);
app.get('/account/pendingapprovals', routes.pendingApprovalPageHandler);

////error handling
//app.use("*", function (req, res) {
//    res.status(404);
//    res.render('message.handlebars', 
//    	{ message: '<blockquote class="mainLines"><code> The page you are looking for is not available or may have been moved.</code> </blockquote>' }
//    );
//});

//app.use(function (error, req, res, next) {
//    console.log(chalk.red('Error : 500::' + error))
//    res.status(500);
//    res.render('message.handlebars', 
//    	{ message: '<blockquote class="mainLines"><code>something went wrong as you tried to access this page</code>Probably this happened because there are some bugs in the application</blockquote>' }
//    );
//});

var port = process.env.PORT || 5001;
app.listen(port, function () {
    console.log(chalk.green('HTTP server is listening on port: ' + port));
});