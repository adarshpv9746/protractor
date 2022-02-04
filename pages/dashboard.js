let helper = require('../helpers/helper');
let dashpage = function(){
    let add_btn = element(by.xpath("//mdl-button[@class='primary patient-add-btn ng-tns-c5-0 mdl-button ng-star-inserted']"));

    this.get = function(url){
        browser.get(url);
    };

    this.addp_button = function(){
        helper.waitForElementpresent(add_btn);
        add_btn.click();
    };

};

module.exports = new dashpage();