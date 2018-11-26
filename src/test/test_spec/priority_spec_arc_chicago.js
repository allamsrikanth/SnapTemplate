var baseObject = require('../pages/BasePage.js');
var loginObject = require('../pages/LoginPage.js');
var homeObject = require('../pages/HomePage.js');
var priorityObject = require('../pages/PriorityPage.js');
var OR = require('../json/OR_new_york.json');
var width = 1600;
var height = 1200;


/*
describe('Verify the fields in story creation page for Right rail and Full width story in ARC mode', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify all the fields', function() {
            baseObject.navigateToURL();
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
            priorityObject.verifyStoryTypeForRightRail();
            priorityObject.verifyBasicBuild();
            priorityObject.verifySectionsAndUpdates();
            priorityObject.verifySchedulingForRightRail();
            priorityObject.verifyExpireWindowAndNoDate();
            priorityObject.verifyEditorsNote();
            priorityObject.verifyLeadArtWithSlugType();
            priorityObject.verifyLeadArtWithImageType();
            priorityObject.verifyLeadArtWithVideoType();
            priorityObject.verifyThumbnailForRightRail();
            priorityObject.verifyThumbnailSourceAndPreview();
            priorityObject.verifyTagline();
            priorityObject.verifyAlsos();
            priorityObject.verifyTopics();
            priorityObject.verifyCorrections();
            priorityObject.verifyAdvancedSEO();
            priorityObject.verifyAdvancedSettings();
            priorityObject.verifyWidgetsForRightRail();
            priorityObject.verifyAlertBox();
            priorityObject.verifyState();
            priorityObject.verifySaveOptionsForRightRail();
            priorityObject.verifyMobileIcon();
            priorityObject.verifyCountAndEmailButton();
            browser.switchTo().alert().accept();
            browser.driver.sleep(3000);
            loginObject.logout();
        });
});

describe('Verify lead art functionality with image upload from local storage', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the results', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.verifyLeadArtWithLocalStorageImage();
            loginObject.logout();
        });
});

describe('Verify lead art functionality with P2P photograph', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the results', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.verifyLeadArtWithP2PPhotograph();
            loginObject.logout();
        });
});
*/


describe('Verify that user is able to save the right rail story with multiple widgets', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the preview screen', function() {
            baseObject.navigateToURL();
            homeObject.loginToSnap();
/*            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();*/
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterHeadlineDetails();
            priorityObject.enterTextWidget();
            priorityObject.enterQuoteWidget();
            priorityObject.enterImageWidgetForLocal();
            priorityObject.enterImageWidgetWithP2PUrl();
            priorityObject.enterVideoWidgetWithVimeo();
            priorityObject.enterVideoWidget();

            priorityObject.enterRoadblockWidget();
            priorityObject.enterHTMLWidget();
            priorityObject.enterTweetWidget();
            priorityObject.enterInstagramWidget();
            priorityObject.enterFacebookWidget();
            priorityObject.enterP2PEmbedWidgetForStory();
            priorityObject.enterP2PEmbedWidgetForStoryLink();
            priorityObject.enterP2PEmbedWidgetForPremiumVideo();
            priorityObject.enterAOLVideoWidget();
            priorityObject.saveStory();
            priorityObject.verifyResultsForRightRail();
            loginObject.logout();
        });
});



