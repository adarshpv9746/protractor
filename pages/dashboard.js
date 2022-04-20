let helper = require('../helpers/helper');
let dashpage = function(){
    let add_btn = element(by.xpath("/html/body/my-app/div[2]/ng-component/ng-component/div/div[3]/div[2]/mdl-card/div[2]/div[2]/mdl-button"));
    let f_pat =element(by.xpath("//table[@class='mdl-data-table mdl-js-data-table mdl-data-table--selectable']//tr[1]//div[.='csicoet18@gmail.com']"));
    this.get = function(url){
        browser.get(url);
    };

    this.addp_button = function(){
        //helper.waitForElementpresent(add_btn);
        browser.sleep(1000);
        add_btn.click();
    };

    this.gotodash = function(){
        browser.get('https://qa.practicecatapult.com/home/dashboard');
    }
    this.firstpat = function(){
        browser.sleep(100);
        f_pat.click();

    }

};

module.exports = new dashpage();