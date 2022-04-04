let helper = require('../helpers/helper');
let dashpage = function(){
    let add_btn = element(by.xpath("//mdl-button[@class='primary patient-add-btn ng-tns-c5-0 mdl-button ng-star-inserted']"));
    let f_pat =element(by.xpath("/html/body/my-app/div[2]/ng-component/ng-component/div/div[3]/div[2]/mdl-card/div[3]/table/tbody/tr[1]/td[1]/div[1]"));
    this.get = function(url){
        browser.get(url);
    };

    this.addp_button = function(){
        helper.waitForElementpresent(add_btn);
        browser.sleep(1000);
        add_btn.click();
    };

    this.firstpat = function(){
        browser.sleep(1000);
        f_pat.click();

    }

};

module.exports = new dashpage();