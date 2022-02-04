var helper = function(){
    
    this.waitForElementpresent = function(element){
        return browser.wait(() => (element.isPresent()), 60000);
    }

    this.waitForElementDisplayed = function(element){
        return browser.wait(() => (element.isDisplayed()), 60000);
    }

    this.sleep = function(time){
        browser.sleep(time);
    }
    
    this.WaitForElementVisibility = function(element){
        let EC = ExpectedConditions;
        let condition = EC.visibilityof(element);
        browser.wait(condition, 30000);

    }
}

module.exports = new helper();