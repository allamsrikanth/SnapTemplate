var BasePage = function(){

    this.navigateToURL = function(url){
        browser.get(url);
    };
    this.getPageTitle = function(){
        return browser.getTitle();
    }
    this.getCurrentURL = function(){
        return browser.driver.getCurrentUrl();
    }
};
module.exports = new BasePage();
