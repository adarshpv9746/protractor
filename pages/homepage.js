let homepage = function(){
    let first_number = element(by.model('first'));
    let second_number = element(by.model('second'));
    let go_button = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.eneterfirstnumber = function(firstno){
        first_number.sendKeys(firstno);
    };

    this.enetrsecondnumber = function(secondno){
        second_number.sendKeys(secondno);
    };

    this.go_button = function(){
        go_button.click();
    };

    this.verify_result = function(result){
        let Result = element(by.cssContainingText('.ng-binding',result));
        expect(Result.getText()).toEqual(result);
    };

};

module.exports = new homepage();