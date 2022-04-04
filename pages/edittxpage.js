let helper = require('../helpers/helper')
let edittxpage = function() {

//locators
    let expat = element(by.xpath("//div[@class=' relation-radio-section flexbox align-center(flex-end)']/mdl-radio[1]/span[@class='mdl-radio__ripple-container mdl-ripple--center']"));
    let exfam = element(by.xpath("//div[@class=' relation-radio-section flexbox align-center(flex-end)']/mdl-radio[2]/span[@class='mdl-radio__ripple-container mdl-ripple--center']"));
    let np = element(by.xpath("//mdl-radio[3]/span[@class='mdl-radio__ripple-container mdl-ripple--center']"));
    let txcat = element(by.xpath("//div[@class='mdl-textfield is-upgraded']/span[@class='mdl-select__toggle material-icons']"));
    let txcat3 = element(by.xpath("//mdl-option[3]/div[@class='mdl-list__item']"));
    let txsubcat = element(by.xpath("//div[@class='mdl-textfield is-upgraded']/span[@class='mdl-select__toggle material-icons']"));
    let txsubcat1 = element(by.xpath("//mdl-option[1]//div[@class='mdl-list__item-primary-content']"));
    let pinsrnc = element(by.xpath("//div[@class='insurance-section row']//mdl-select[@class='mdl-select mdl-select--floating-label ng-untouched ng-valid ng-dirty']//span[@class='mdl-select__toggle material-icons']"));
    let pinsrnc2 = element(by.xpath("//mdl-option[2]//div[@class='mdl-list__item-primary-content']"));
    let pmaxcov = element(by.xpath("//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-star-inserted ng-valid']"));
    //let pmaxpcnt = element(by.xpath("//input[@class='mdl-textfield__input ng-pristine ng-valid ng-star-inserted ng-touched']"));
    let ppaidto_pract = element(by.xpath("//div[@class='insurance-section row']//div[5]//div[@class=' flexbox flexbox-space-bet align-center(flex-end)']"));
    let ppaidto_insr =  element(by.xpath("//div[@class='insurance-section row']//mdl-radio[@class='is-upgraded mdl-radio ng-untouched ng-pristine ng-valid']/span[@class='mdl-radio__ripple-container mdl-ripple--center']"));
    let sinsrnc = element(by.xpath("//mdl-select[@class='mdl-select mdl-select--floating-label ng-untouched ng-dirty ng-valid']//span[@class='mdl-select__toggle material-icons']"));
    let sinsrnc2 = element(by.xpath("//mdl-option[3]//div[@class='mdl-list__item-primary-content']"));
    let smaxcov = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[4]/div[2]/div[3]/div/mdl-textfield/div/input"));
    let smaxpcnt = element(by.xpath("//mdl-textfield[@class='mdl-textfield is-upgraded mdl-textfield--floating-label ng-pristine ng-valid is-dirty ng-touched is-focused']//input[@class='mdl-textfield__input ng-pristine ng-valid ng-touched']"));
    let spaidto_pract = element(by.xpath("//div[@class='insurance-section row']/div[2]//div[@class=' flexbox flexbox-space-bet align-center(flex-end)']"));
    let spaidto_insr = element(by.xpath("//mdl-textfield[@class='mdl-textfield is-upgraded mdl-textfield--floating-label ng-pristine ng-valid is-dirty ng-touched is-focused']//input[@class='mdl-textfield__input ng-pristine ng-valid ng-touched']"));
    let miscdicopt = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[5]/div[1]/mdl-checkbox/span[4]")); 
    let miscdic = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[5]/div[1]/div/mdl-textfield/div/input"));
    let viewall = element(by.xpath("//a[contains(.,'View All')]"));
    let cstudy1 = element(by.xpath("//div[@class='all-cases view-all-case-studies scroll-style']/div[1]//span[@class='mdl-checkbox__ripple-container mdl-ripple--center']"));
    let brace = element(by.xpath("//div[@class='row options-checkbox-section']//mdl-checkbox[@class='mdl-checkbox is-upgraded ng-untouched ng-pristine ng-valid is-checked']/span[@class='mdl-checkbox__ripple-container mdl-ripple--center']"));
    let bracetxtime = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[1]/div/mdl-textfield/div/input"));
    let bracetxfee = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[2]/div/mdl-textfield/div/input"));
    let bracetxdown = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[3]/div/mdl-textfield/div/input"));
    let aligner = element(by.xpath("//mdl-checkbox[@class='mdl-checkbox is-upgraded ng-untouched ng-valid is-checked ng-dirty']/span[@class='mdl-checkbox__ripple-container mdl-ripple--center']"));
    let alignertab = element(by.xpath("//mdl-tabs[@class='tab-right tab-head-padding pricing-section mdl-tabs is-upgraded']//div[2]//span[@class='mdl-tabs__ripple-container mdl-layout__tab-ripple-container']"));
    let alignertxtime = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[1]/div/mdl-textfield/div/input"));
    let alignertxfee = element(by.xpath("//mdl-textfield[@class='currency-unit-input mdl-textfield is-upgraded mdl-textfield--floating-label ng-valid is-dirty ng-dirty ng-touched is-focused']//input[@class='mdl-textfield__input ng-valid ng-dirty ng-touched']"));
    let alignertxdown = element(by.xpath("//mdl-textfield[@class='currency-unit-input mdl-textfield is-upgraded mdl-textfield--floating-label ng-pristine ng-valid is-dirty ng-touched is-focused']//input[@class='mdl-textfield__input ng-pristine ng-valid ng-touched']"));
    let combo = element(by.xpath("//div[@class='row options-checkbox-section']//div[4]//span[@class='mdl-checkbox__ripple-container mdl-ripple--center']"));
    let combotab = element(by.xpath("//mdl-tabs[@class='tab-right tab-head-padding pricing-section mdl-tabs is-upgraded']//div[3]//span[@class='mdl-tabs__ripple-container mdl-layout__tab-ripple-container']"));
    let combotxtime = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[1]/div/mdl-textfield/div/input"));
    let combotxfee = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[2]/div/mdl-textfield/div/input"));
    let combotxdown = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[2]/div/mdl-textfield/div/input"));
    let extendmonth = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[2]/div[1]/div/mdl-textfield/div/input"));
    let acceltxfee = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[2]/div[2]/div/mdl-textfield/div/input"));
    let addnaplnc = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[2]/div[3]/div/mdl-select/div/span[2]"));  
    let addnaplnc2 = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[2]/div[3]/div/mdl-select/div/mdl-popover/div/mdl-option[2]/div/div"));
    let downpaydisc = element(by.xpath("//mdl-checkbox[@class='checkbox-section mdl-checkbox is-upgraded ng-pristine ng-valid is-checked ng-touched']/span[@class='mdl-checkbox__ripple-container mdl-ripple--center']"));
    let present = element(by.xpath("//mdl-button[@class='mdl-button present']/span[@class='mdl-button__ripple-container']"));
    let outsideclk = element(by.xpath("//mdl-tabs[@class='tab-right tab-head-padding pricing-section mdl-tabs is-upgraded ng-star-inserted']/div[@class='mdl-tabs__tab-bar']"));
    let addnaplncfee = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[2]/div[4]/div/mdl-textfield/div/input"));
    let acccontainer = element(by.xpath("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[2]"));
    //values to be passed
    v_pmaxcov = 10
    v_pmaxpcnt = 100
    v_smaxcov = 10
    v_smaxpcnt = 50
    v_miscdic = 10
    v_bracetxtime = 10
    v_bracetxfee = 30
    v_bracetxdown = 1
    v_alignertxtime = 10
    v_alignertxfee = 100
    v_alignertxdown = 10
    v_combotxtime = 10
    v_combotxfee = 100
    v_combotxdown = 10
    v_extendmonth = 10
    v_acceltxfee = 10
    v_addnaplncfee = 1

    this.get = function(url){
        browser.get(url);
    };

    this.submittx =  function(){
        expat.click();
        txcat.click();
        txcat3.click();
        txsubcat.click();
        txsubcat1.click();
        pinsrnc.click();
        pinsrnc2.click();
        pmaxcov.sendKeys(v_pmaxcov);
        //pmaxpcnt.sendKeys(v_pmaxpcnt);
        sinsrnc.click();
        sinsrnc2.click();
        smaxcov.sendKeys(v_smaxcov);
        //smaxpcnt.sendKeys(v_smaxpcnt);
        helper.scrollTo(viewall);
        browser.sleep(100);
        miscdicopt.click();
        miscdic.sendKeys(v_miscdic);
        helper.scrollTo(brace);
        browser.sleep(100);
        viewall.click();
        cstudy1.click();
        helper.scrollTo(extendmonth);
        browser.sleep(100);

        bracetxtime.sendKeys(v_bracetxtime);
        outsideclk.click();
        browser.sleep(500)
        acceltxfee.sendKeys(v_acceltxfee);
        bracetxfee.clear();
        bracetxfee.sendKeys(v_bracetxfee);
        bracetxdown.clear();
        bracetxdown.sendKeys(v_bracetxdown);
        //aligner.click();
        
        //alignertab.click();
        //alignertxtime.sendKeys(v_alignertxtime);
        
        //alignertxfee.sendKeys(v_alignertxfee);
        //alignertxdown.sendKeys(v_alignertxdown);
        //combo.click();
        
        //combotab.click();
        //combotxtime.sendKeys(v_combotxtime);
        
        //combotxfee.sendKeys(v_combotxfee);
        //combotxdown.sendKeys(v_combotxdown);
        extendmonth.sendKeys(v_extendmonth);
        helper.scrollTo(acccontainer);
        addnaplnc.click();
        addnaplnc2.click();
        addnaplncfee.sendKeys(v_addnaplncfee);
        present.click();
        


    };


}
module.exports = new edittxpage();
