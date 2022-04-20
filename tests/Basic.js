let loginpage = require('../pages/login');
let dashpage = require('../pages/dashboard');
let editpatpage = require('../pages/editpatient');
let edittxpage = require('../pages/edittxpage');
let dashboard = require('../pages/dashboard');
let users = ["mac","antc","sachinc+1@qburst.com"];
let pass = ["Mac@123","Password123@","987654"];

describe('Basic check for',function(){
    browser.manage().window().maximize();
    it('Login to orthocatapult',function(){
        
        //password: "antc", username: "Password123@"
        //password:"987654", username: "sachinc+1@qburst.com"
        loginpage.get('https://qa.practicecatapult.com');
        loginpage.username(users[0]);
        loginpage.password(pass[0]);
        loginpage.login_button();
        browser.sleep(1000);
    });
    it('click add patient button on dashboard',function(){
        dashpage.addp_button();
        browser.sleep(200);
    });

    it('filling detals and submitting them on Edit patient page',function(){
        editpatpage.add_patient('.com');
        browser.sleep(100);
    });

    it('filling the tx plan and submitting', function(){
        edittxpage.submittx();
    });


})
