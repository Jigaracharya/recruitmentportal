var chalk = require('chalk');
var userContext;
var isAdmin = false;
var isAccountManager = false;
var isClient = false;
var isRecruiter = false;
var isNormal = false;
exports.loginPageHandler = function (req, res) {
    
    res.render('login.handlebars');
};

var setUserRole = function () {
    if (userContext.loginName === 'admin') {
        isAdmin = true;
        isAccountManager = false;
        isClient = false;
        isRecruiter = false;
        isNormal = false;
    }
    else if (userContext.loginName === 'client') {
        isAdmin = false;
        isAccountManager = false;
        isClient = true;
        isRecruiter = false;
        isNormal = false;
    }
    else if (userContext.loginName === 'manager') {
        isAdmin = false;
        isAccountManager = true;
        isClient = false;
        isRecruiter = false;
        isNormal = false;
    }
    else if (userContext.loginName === 'recruiter') {
        isAdmin = false;
        isAccountManager = false;
        isClient = false;
        isRecruiter = true;
        isNormal = false;
    }
    else {
        isAdmin = false;
        isAccountManager = false;
        isClient = false;
        isRecruiter = false;
        isNormal = true;
    }
};

exports.loginAuthPageHandler = function (req, res) {
    userContext = req.body;
    req.session.userContext = userContext;
    setUserRole();
    
    res.render('index.handlebars', { userContext: userContext, isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
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
exports.signupSavePageHandler = function (req, res) {
    
    var registrationDetails = JSON.stringify(req.body);
    req.session.registrationContext = registrationDetails;
    res.render('signup.handlebars', {
        message: 'Registration successful', 
        registrationDetails: registrationDetails
    });
};
exports.accountHomePageHandler = function (req, res) {
    
    setUserRole();
    
    res.render('index.handlebars', { userContext: userContext, isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.manageContactPageHandler = function (req, res) {
    setUserRole();
    res.render('contact/managecontacts.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.viewJobPostringPageHandler = function (req, res) {
    setUserRole();
    res.render('jobposting/viewjobposting.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.newJobPostringPageHandler = function (req, res) {
    setUserRole();
    res.render('jobposting/newjobposting.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.newResumePageHandler = function (req, res) {
    setUserRole();
    res.render('resume/newresume.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};
exports.viewResumePageHandler = function (req, res) {
    setUserRole();
    res.render('resume/viewresume.handlebars', { userContext: userContext, isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.viewMessagePageHandler = function (req, res) {
    setUserRole();
    res.render('message/viewmessage.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};


exports.newMessagePageHandler = function (req, res) {
    setUserRole();
    res.render('message/newmessage.handlebars', { userContext: userContext, isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.viewNotificationPageHandler = function (req, res) {
    setUserRole();
    res.render('notification/viewnotification.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.newNotificationPageHandler = function (req, res) {
    setUserRole();
    res.render('notification/newnotification.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.referralPageHandler = function (req, res) {
    setUserRole();
    res.render('referral/index.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.reportsPageHandler = function (req, res) {
    setUserRole();
    res.render('report/index.handlebars', { userContext: userContext, isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.report1PageHandler = function (req, res) {
    setUserRole();
    res.render('report/report1.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.report2PageHandler = function (req, res) {
    setUserRole();
    res.render('report/report2.handlebars', { userContext: userContext, isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.report3PageHandler = function (req, res) {
    setUserRole();
    res.render('report/report3.handlebars', { userContext: userContext, isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.profilePageHandler = function (req, res) {
    setUserRole();
    res.render('profile/personalprofile.handlebars', { userContext: userContext, isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.recruitmentProfilePageHandler = function (req, res) {
    setUserRole();
    res.render('profile/recruiterprofile.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};

exports.logoutPageHandler = function (req, res) {
    req.session.destroy();
    res.render('login.handlebars');
};


exports.assignManagerPageHandler = function (req, res) {
    setUserRole();
    res.render('account/assignmanager.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};
exports.newAccountManagerPageHandler = function (req, res) {
    setUserRole();
    res.render('account/newaccountmanager.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};
exports.viewAccountManagerPageHandler = function (req, res) {
    setUserRole();
    res.render('account/viewaccountmanager.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};
exports.newClientPageHandler = function (req, res) {
    setUserRole();
    res.render('account/newclient.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};
exports.viewclientsPageHandler = function (req, res) {
    setUserRole();
    res.render('account/viewclients.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};
exports.newRecruiterPageHandler = function (req, res) {
    setUserRole();
    res.render('account/newrecruiter.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};
exports.viewRecruitersPageHandler = function (req, res) {
    setUserRole();
    res.render('account/viewrecruiters.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};
exports.pendingApprovalPageHandler = function (req, res) {
    setUserRole();
    res.render('account/pendingapprovals.handlebars', { userContext: userContext , isAdmin: isAdmin, isClient: isClient, isAccountManager: isAccountManager, isRecruiter: isRecruiter, isNormal: isNormal });
};