let helper = require('../helpers/helper');
let editpatpage = function(){
    let f_name = element(by.xpath("//input[@class='mdl-textfield__input ng-pristine ng-valid ng-star-inserted ng-touched']"));
    let m_name = element(by.xpath("//mdl-textfield[@class='mdl-textfield is-upgraded mdl-textfield--floating-label ng-pristine ng-valid ng-touched']//input[@class='mdl-textfield__input ng-pristine ng-valid ng-star-inserted ng-touched']"));
    let l_name = element(by.xpath("//div[@class='common-card personal-detail-section']/div[@class='common-card-content']/div[2]//input[@class='mdl-textfield__input ng-pristine ng-valid ng-star-inserted ng-touched']"));
    let n_name = element(by.xpath("//div[@class='common-card personal-detail-section']//mdl-textfield[@class='mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let dob = element(by.xpath("//mdl-textfield[@class='required-label has-placeholder mdl-textfield is-upgraded mdl-textfield--floating-label ng-pristine ng-valid is-dirty ng-touched']//input[@class='mdl-textfield__input ng-pristine ng-valid ng-star-inserted ng-touched']"));
    let hid = element(by.xpath("//div[@class='common-card personal-detail-section']//div[2]/mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let riskcat = element(by.xpath("//div[@class='common-card personal-detail-section']//div[2]/mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let pgender = element(by.xpath("//div[@class='one selector relation-box']//mdl-radio[1]/span[@class='mdl-radio__ripple-container mdl-ripple--center']"));
    let plocn = element(by.xpath("")); 
    this.get = function(url){
        browser.get(url);
    };

    this.fill_pat = function(){
        helper.waitForElementpresent(add_btn);
        add_btn.click();
    };

};

module.exports = new editpatpage();