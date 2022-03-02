let loginpage = require('../pages/login');
let dashpage = require('../pages/dashboard');
let editpatpage = require('../pages/editpatient');
describe('Basic check',function(){

    it('Login test',function(){
        
        loginpage.get('https://qa.practicecatapult.com');
        loginpage.username('mac');
        loginpage.password('Mac@123');
        loginpage.login_button();
        browser.sleep(2000);
    });

    it('add patient',function(){
        dashpage.addp_button();
        browser.sleep(2000);
    });

    it('Edit patient',function(){
        editpatpage.fname('Basic Check');
        browser.sleep(2000);
    });

    


})
