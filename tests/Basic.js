let loginpage = require('../pages/login');
let dashpage = require('../pages/dashboard');
let editpatpage = require('../pages/editpatient');
describe('Basic check for',function(){

    it('Login to orthocatapult',function(){
        
        loginpage.get('https://qa.practicecatapult.com');
        loginpage.username('mac');
        loginpage.password('Mac@123');
        loginpage.login_button();
        browser.sleep(2000);
    });

    it('click add patient button on dashboard',function(){
        dashpage.addp_button();
        browser.sleep(2000);
    });

    it('filling detals and submitting them on Edit patient page',function(){
        editpatpage.add_patient();
        browser.sleep(2000);
    });

    


})
