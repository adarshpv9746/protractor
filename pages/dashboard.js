let dashpage = function(){
    let add_btn = element(by.css('.primary'));

    this.get = function(url){
        browser.get(url);
    };

    this.addp_button = function(){
        add_btn.click();
    };

};

module.exports = new dashpage();