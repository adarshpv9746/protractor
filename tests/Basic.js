let loginpage = require('../pages/login');
let dashpage = require('../pages/dashboard');
let editpatpage = require('../pages/editpatient');
let edittxpage = require('../pages/edittxpage');
const dashboard = require('../pages/dashboard');

describe('Basic check for',function(){
    browser.manage().window().maximize();
    it('Login to orthocatapult',function(){
        
        loginpage.get('https://qa.practicecatapult.com');
        loginpage.username('mac');
        loginpage.password('Mac@123');
        loginpage.login_button();
        browser.sleep(1000);
    });
    it('click add patient button on dashboard',function(){
        dashpage.addp_button();
        browser.sleep(100);
    });

    it('filling detals and submitting them on Edit patient page',function(){
        editpatpage.add_patient('.com');
        browser.sleep(100);
    });

    it('filling the tx plan and submitting', function(){
        edittxpage.submittx();
    });


})
