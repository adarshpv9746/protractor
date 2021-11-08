let loginpage = function(){
    let user_field = element(by.id('username'));
    let pass_field = element(by.name('password'));
    let login_btn = element(by.css('.mdl-button__ripple-container'));

    this.get = function(url){
        browser.get(url);
    };

    this.username = function(user){
        user_field.sendKeys(user);
    };

    this.password = function(pass){
        pass_field.sendKeys(pass);
    };

    this.login_button = function(){
        login_btn.click();
    };

};

module.exports = new loginpage();