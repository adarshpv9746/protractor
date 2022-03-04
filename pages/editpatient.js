let helper = require('../helpers/helper');
let editpatpage = function(){
    //values
    let v_f_name = "Basic" 
    let v_m_name = "MBasic"
    let v_l_name = "LBasic"
    let v_n_name = "NBasic"
    let v_dob = "12/12/2000"
    let v_hid = Date.now()
    let v_notes = "Basic note"
    let v_pfname = "BasicP"
    let v_pmname = "BasicPM"
    let v_plname = "BasicPL"
    let v_pdob = "12/12/2000"
    let v_saddr1 = "Basic address 1"
    let v_addr2 = "Basic address 2"
    let v_city = "Basic city"
    let v_country = "Basic Country"
    let v_state = "Basic State"
    let v_zip = "99999"
    let v_email = "csicoet18@gmail.com"
    let v_cemail = "csicoet18@gmail.com"
    let v_phone = "9999999999"

    //locators
    let f_name = element(by.xpath("//div[@class='common-card personal-detail-section']/div[@class='common-card-content']/div[1]//mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let m_name = element(by.xpath("//div[@class='common-card personal-detail-section']//div[1]//mdl-textfield[@class='mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let l_name = element(by.xpath("//div[@class='common-card personal-detail-section']/div[@class='common-card-content']/div[2]//mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let n_name = element(by.xpath("//div[@class='common-card personal-detail-section']/div[@class='common-card-content']/div[2]//mdl-textfield[@class='mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let dob = element(by.xpath("//div[@class='common-date-field']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let hid = element(by.xpath("//div[@class='common-card personal-detail-section']//div[2]/mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let riskcat = element(by.xpath("//div[@class='common-card personal-detail-section']//div[@class='two']//input[@class='mdl-textfield__input']"));
    let riskcat1 = element(by.xpath("//mdl-option[1]//div[@class='mdl-list__item-primary-content']"));
    let pgender = element(by.xpath("//div[@class='one selector relation-box']//mdl-radio[1]/span[@class='mdl-radio__ripple-container mdl-ripple--center']"));
    let plocn = element(by.xpath("//div[@class='common-card detail-section']/div[@class='common-card-content']/div[1]//input[@class='mdl-textfield__input']")); 
    let plocn1 = element(by.xpath("//mdl-option[1]//div[@class='mdl-list__item-primary-content']"));
    let rsourcs = element(by.xpath("//mdl-textfield[@class='dropbtn required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let rsourcs1 = element(by.xpath("//a[.='Patient Referral']")); 
    let itxpref = element(by.xpath("//div[@class='common-card detail-section']//div[3]//input[@class='mdl-textfield__input']"));
    let itxpref1 = element(by.xpath("//mdl-option[1]//div[@class='mdl-list__item-primary-content']")); 
    let doc = element(by.xpath("//div[@class='common-card detail-section']//mdl-select[@class='mdl-select mdl-select--floating-label ng-untouched ng-valid ng-dirty']//input[@class='mdl-textfield__input']"));
    let doc1 = element(by.xpath("//mdl-option[1]//div[@class='mdl-list__item-primary-content']"));
    let notes = element(by.xpath("//textarea[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let pfname = element(by.xpath("//div[@class='common-card responsible-party-info-section']/div[@class='common-card-content']/div[2]//mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let pmname = element(by.xpath("//div[@class='common-card responsible-party-info-section']/div[@class='common-card-content']/div[2]//mdl-textfield[@class='mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let plname = element(by.xpath("//div[@class='common-card responsible-party-info-section']//div[3]//mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let pdob = element(by.xpath("//div[@class='one common-date-field']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"));
    let reln = element(by.xpath("//mdl-select[@class='capitalize-text required-label mdl-select ng-untouched ng-valid ng-dirty']//input[@class='mdl-textfield__input']"));
    let reln1 = element(by.xpath("//mdl-option[1]/div[@class='mdl-list__item']"));
    let porelapse = element(by.xpath("//span[@class='mdl-checkbox__ripple-container mdl-ripple--center']"));
    let relapcandid = element(by.xpath("//mdl-select[@class='mdl-select ng-untouched ng-valid ng-dirty']//input[@class='mdl-textfield__input']"));
    let relapcandid1 = element(by.xpath("//mdl-option[1]//div[@class='mdl-list__item-primary-content']"));
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
    let pcontact1 = element(by.xpath("//mdl-option[1]//div[@class='mdl-list__item-primary-content']"));
    let savecreate = element(by.xpath("//mdl-button[@class='draft send-tx-plan mdl-button ng-star-inserted']/span[@class='mdl-button__ripple-container']"));

    this.get = function(url){
        browser.get(url);
    };

    this.add_patient = function(){
        f_name.sendKeys(v_f_name);
        m_name.sendKeys(v_m_name);
        l_name.sendKeys(v_l_name);
        //n_name.sendKeys(v_n_name);
        plocn.click();
        plocn1.click();
        rsourcs.click();
        rsourcs1.click();
        itxpref.click();
        itxpref1.click();
        doc.click();
        doc1.click();
        dob.sendKeys(v_dob);
        hid.sendKeys(v_hid);
        pgender.click();
        riskcat.click();
        riskcat1.click();
        notes.sendKeys(v_notes);
        pfname.sendKeys(v_pfname);
        pmname.sendKeys(v_pmname);
        plname.sendKeys(v_plname);
        pdob.sendKeys(v_pdob);
        reln.click();
        reln1.click();
        porelapse.click();
        relapcandid.click();
        relapcandid1.click();
        saddr1.sendKeys(v_saddr1);
        addr2.sendKeys(v_addr2);
        city.sendKeys(v_city);
        country.sendKeys(v_country);
        state.sendKeys(v_state);
        zip.sendKeys(v_zip);
        email.sendKeys(v_email);
        cemail.sendKeys(v_cemail);
        phone.sendKeys(v_phone);
        pcontact.click();
        pcontact1.click();
        savecreate.click();
    };

};

module.exports = new editpatpage();