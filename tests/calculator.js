let homepage = require('../pages/homepage');

describe('Calculator test',function(){

    it('Addition test',function(){
        
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.eneterfirstnumber('5');
        homepage.enetrsecondnumber('6');
        homepage.go_button();
        homepage.verify_result('11');
        browser.sleep(2000);
    });

    it('Subtraction test',function(){
        
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.eneterfirstnumber('5');
        homepage.enetrsecondnumber('6');
        homepage.go_button1();
        homepage.verify_result('11');
        browser.sleep(2000);
    });
})
