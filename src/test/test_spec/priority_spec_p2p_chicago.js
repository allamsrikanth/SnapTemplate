var baseObject = require('../pages/BasePage.js');
var loginObject = require('../pages/LoginPage.js');
var homeObject = require('../pages/HomePage.js');
var priorityObject = require('../pages/PriorityPage.js');
var OR = require('../json/OR_chicago.json');
var width = 1600;
var height = 1200;


describe('Verify the fields in story creation page for simple story in P2P mode', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify all the fields', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.verifyBasicIconsAndUsername();
            priorityObject.verifyHeadlineAndByline();
            priorityObject.verifyCopyEditorAndSlug();
            priorityObject.verifySEO();
            priorityObject.verifyStoryType();
            priorityObject.verifyBasicBuild(OR.locators.data.basic_build_options_chicago);
            priorityObject.verifyCollectionsAndUpdates();
            priorityObject.verifyEditorsNote();
            priorityObject.verifyMultipleDates();
            priorityObject.verifyExpireWindowAndNoDate(OR.locators.data.expire_window_options_chicago);
            priorityObject.verifyLeadArt();
            priorityObject.verifyThumbnail();
            priorityObject.verifyThumbnailSourceAndPreview();
            priorityObject.verifyTagline();
            priorityObject.verifyAlsos();
            priorityObject.verifyTopics();
            priorityObject.verifyCorrections();
            priorityObject.verifyAdvancedSEO();
            priorityObject.verifyAdvancedSettings();
            priorityObject.verifyURLPath();
            priorityObject.verifyWidgets();
            priorityObject.verifyAlertBox();
            priorityObject.verifyState();
            priorityObject.verifySaveOptions();
            priorityObject.verifyMobileIcon();
            priorityObject.verifyCountAndEmailButton();
            loginObject.logout();
        });
});






