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
    let plocn = element(by.xpath("//div[@class='common-card detail-section']/div[@class='common-card-content']/div[1]//input[@class='mdl-textfield__input']")); 
    let rsourcs = element(by.xpath("//mdl-textfield[@class='dropbtn required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let itxpref = element(by.xpath("//div[@class='common-card detail-section']//div[3]//input[@class='mdl-textfield__input']"));
    let doc = element(by.xpath("//div[@class='common-card detail-section']//mdl-select[@class='mdl-select mdl-select--floating-label ng-untouched ng-valid ng-dirty']//input[@class='mdl-textfield__input']"));
    let notes = element(by.xpath("//textarea[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let pfname = element(by.xpath("//div[@class='common-card responsible-party-info-section']/div[@class='common-card-content']/div[2]//mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let pmname = element(by.xpath("//input[@class='mdl-textfield__input ng-pristine ng-valid ng-star-inserted ng-touched']"));
    let plname = element(by.xpath("//div[@class='common-card responsible-party-info-section']//div[3]//mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let pdob = element(by.xpath("//div[@class='one common-date-field']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let reln = element(by.xpath("//mdl-select[@class='capitalize-text required-label mdl-select ng-untouched ng-valid ng-dirty']//input[@class='mdl-textfield__input']"));
    let porelapse = element(by.xpath("//span[@class='mdl-checkbox__ripple-container mdl-ripple--center']"));
    let relapcandid = element(by.xpath("//mdl-select[@class='mdl-select ng-untouched ng-valid ng-dirty']//input[@class='mdl-textfield__input']"));
    let saddr1 = element(by.xpath("//div[@class='common-card responsible-party-info-section']//div[7]//mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let addr2 = element(by.xpath("//div[@class='common-card responsible-party-info-section']//div[7]//mdl-textfield[@class='mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let city = element(by.xpath("//div[8]//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let country = element(by.xpath("//div[8]//input[@class='mdl-textfield__input']"));
    let state = element(by.xpath("//div[9]//input[@class='mdl-textfield__input']"));
    let zip = element(by.xpath("//mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid ng-star-inserted']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let email = element(by.xpath("//div[@class='common-card responsible-party-info-section']/div[@class='common-card-content']/mdl-textfield[1]//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']")); 
    let cemail = element(by.xpath("//mdl-textfield[2]//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let phone = element(by.xpath("//input[@name='phone_number']"));
    let phtype = element(by.xpath("//mdl-select[@name='phone_number_type']//input[@class='mdl-textfield__input']"));
    let pcontact = element(by.xpath("//mdl-select[@class='required-label long-text capitalize-text mdl-select mdl-select--floating-label ng-untouched ng-valid ng-dirty']//input[@class='mdl-textfield__input']"));
    
    this.get = function(url){
        browser.get(url);
    };

    this.fill_pat = function(){
        helper.waitForElementpresent(add_btn);
        add_btn.click();
    };

};

module.exports = new editpatpage();