let loginpage = require('../pages/login');

describe('Basic check',function(){

    it('Login test',function(){
        
        loginpage.get('https://qa.practicecatapult.com');
        loginpage.username('mac');
        loginpage.password('Mac@123');
        loginpage.login_button();
        browser.sleep(2000);
    });
})
