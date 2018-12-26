//var OR = require('../json/OR_new_york.json');
//var OR = require('../json/OR_los_angeles.json');
var OR = require('../json/OR_chicago.json');
require('../utilities/customlocators.js');
require('../utilities/select-wrapper.js');
var LoginPage=function () {

    this.enterDetails = function () {
        element(by.css(OR.locators.LoginPage.username)).sendKeys(OR.locators.data.username);
        element(by.css(OR.locators.LoginPage.password)).sendKeys(OR.locators.data.password);
        element(by.css(OR.locators.LoginPage.button)).click();
    };
    this.enterSlackDetails = function () {
    	browser.driver.sleep(6000);
        element(by.css(OR.locators.SlackLoginPage.signInWithSlackButton)).click();
        element(by.css(OR.locators.SlackLoginPage.workspace)).sendKeys(OR.locators.data.workspace_name);
        element(by.css(OR.locators.SlackLoginPage.continueButton)).click();
        element(by.css(OR.locators.SlackLoginPage.signInWithADFSButton)).click();
    };
    this.enterOrganizationDetails= function(){
        element(by.css(OR.locators.OrganisationalLoginPage.username)).sendKeys(OR.locators.data.org_username);
        element(by.css(OR.locators.OrganisationalLoginPage.password)).sendKeys(OR.locators.data.org_password);
        element(by.css(OR.locators.OrganisationalLoginPage.signin)).click();
        element(by.css(OR.locators.OrganisationalLoginPage.authorise)).click();
    };

    this.logout = function() {
        element(by.css(OR.locators.LogoutPage.useroptions)).click();
        element(by.css(OR.locators.LogoutPage.logout)).click();
    };

    this.enterEmptyUsername = function () {
        element(by.css(OR.locators.LoginPage.username)).sendKeys("");
        element(by.css(OR.locators.LoginPage.password)).sendKeys(OR.locators.data.password);
        element(by.css(OR.locators.LoginPage.button)).click();
        /**
             * [selectWindow Focus the browser to the index window. Implementation by http://stackoverflow.com/questions/21700162/protractor-e2e-testing-error-object-object-object-has-no-method-getwindowha]
             * @param  {[Object]} index [Is the index of the window. E.g., 0=browser, 1=Snappopup]
             * @return {[!webdriver.promise.Promise.<void>]}       [Promise resolved when the index window is focused.]
             */
            this.selectWindow = function (index) {

              // wait for handels[index] to exists
              browser.driver.wait(function() {
                return browser.driver.getAllWindowHandles().then(function (handles) {
                    /**
                     * Assume that handles.length >= 1 and index >=0.
                     * So when i call selectWindow(index) i return
                     * true if handles contains that window.
                     */
                    if(handles.length > index) {
                      return true;
                    }
                  });
              });
              // switch to the window
              return browser.driver.getAllWindowHandles().then(function (handles) {
                return browser.driver.switchTo().window(handles[index]);
              });
            };

    };

    this.enterInvalidUsername = function () {
        element(by.css(OR.locators.LoginPage.username)).sendKeys(OR.locators.data.invalid_username);
        element(by.css(OR.locators.LoginPage.password)).sendKeys(OR.locators.data.password);
        element(by.css(OR.locators.LoginPage.button)).click();
        browser.driver.sleep(7000);
        return error_element = element(by.xpath(OR.locators.LoginPage.error_div));

    };
    this.enterEmptyPassword = function () {
        element(by.css(OR.locators.LoginPage.username)).sendKeys(OR.locators.data.username);
        element(by.css(OR.locators.LoginPage.password)).sendKeys("");
        element(by.css(OR.locators.LoginPage.button)).click();
        /**
             * [selectWindow Focus the browser to the index window. Implementation by http://stackoverflow.com/questions/21700162/protractor-e2e-testing-error-object-object-object-has-no-method-getwindowha]
             * @param  {[Object]} index [Is the index of the window. E.g., 0=browser, 1=Snappopup]
             * @return {[!webdriver.promise.Promise.<void>]}       [Promise resolved when the index window is focused.]
             */
            this.selectWindow = function (index) {

              // wait for handels[index] to exists
              browser.driver.wait(function() {
                return browser.driver.getAllWindowHandles().then(function (handles) {
                    /**
                     * Assume that handles.length >= 1 and index >=0.
                     * So when i call selectWindow(index) i return
                     * true if handles contains that window.
                     */
                    if(handles.length > index) {
                      return true;
                    }
                  });
              });
              // switch to the window
              return browser.driver.getAllWindowHandles().then(function (handles) {
                return browser.driver.switchTo().window(handles[index]);
              });
            };
    };
    this.enterInvalidPassword = function () {
        element(by.css(OR.locators.LoginPage.username)).sendKeys(OR.locators.data.username);
        element(by.css(OR.locators.LoginPage.password)).sendKeys(OR.locators.data.invalid_password);
        element(by.css(OR.locators.LoginPage.button)).click();
        browser.driver.sleep(7000);
        return error_element = element(by.xpath(OR.locators.LoginPage.error_div));
    };
    this.enterInvalidCredentials = function () {
        element(by.css(OR.locators.LoginPage.username)).sendKeys(OR.locators.data.invalid_username);
        element(by.css(OR.locators.LoginPage.password)).sendKeys(OR.locators.data.invalid_password);
        element(by.css(OR.locators.LoginPage.button)).click();
        browser.driver.sleep(7000);
        return error_element = element(by.xpath(OR.locators.LoginPage.error_div));
    };
    this.enterEmptyCredentials = function () {
        element(by.css(OR.locators.LoginPage.username)).sendKeys("");
        element(by.css(OR.locators.LoginPage.password)).sendKeys("");
        element(by.css(OR.locators.LoginPage.button)).click();
        /**
             * [selectWindow Focus the browser to the index window. Implementation by http://stackoverflow.com/questions/21700162/protractor-e2e-testing-error-object-object-object-has-no-method-getwindowha]
             * @param  {[Object]} index [Is the index of the window. E.g., 0=browser, 1=Snappopup]
             * @return {[!webdriver.promise.Promise.<void>]}       [Promise resolved when the index window is focused.]
             */
            this.selectWindow = function (index) {

              // wait for handels[index] to exists
              browser.driver.wait(function() {
                return browser.driver.getAllWindowHandles().then(function (handles) {
                    /**
                     * Assume that handles.length >= 1 and index >=0.
                     * So when i call selectWindow(index) i return
                     * true if handles contains that window.
                     */
                    if(handles.length > index) {
                      return true;
                    }
                  });
              });
              // switch to the window
              return browser.driver.getAllWindowHandles().then(function (handles) {
                return browser.driver.switchTo().window(handles[index]);
              });
            };
    };
    this.contactHelpdesk = function () {
        element(by.linkText(OR.locators.LoginPage.contact_link)).click();
        browser.getAllWindowHandles().then(function (handles) {
          var newTabHandle = handles[1];
          browser.switchTo().window(newTabHandle).then(function () {
             element(by.css(OR.locators.LoginPage.contact_tab_header)).click();
          });
          var nextHandle = handles[0];
          browser.switchTo().window(nextHandle);
        });
    };

};

module.exports = new LoginPage();