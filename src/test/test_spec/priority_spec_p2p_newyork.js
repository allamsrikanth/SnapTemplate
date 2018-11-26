var baseObject = require('../pages/BasePage.js');
var loginObject = require('../pages/LoginPage.js');
var homeObject = require('../pages/HomePage.js');
var priorityObject = require('../pages/PriorityPage.js');
var OR = require('../json/OR_new_york.json');
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
            priorityObject.verifyBasicBuild(OR.locators.data.basic_build_options_ny);
            priorityObject.verifyCollectionsAndUpdates();
            priorityObject.verifyEditorsNote();
            priorityObject.verifyMultipleDates();
            priorityObject.verifyExpireWindowAndNoDate(OR.locators.data.expire_window_options_ny);
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
        });
});

describe('Verify that user is able to save the simple story with multiple widgets', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the preview screen', function() {
            baseObject.navigateToURL(OR.url);
            browser.driver.sleep(4000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_simple_story_multiple_widgets_ny,OR.locators.data.headline_for_simple_story_multiple_widgets_ny);
            priorityObject.enterTextWidget();
            priorityObject.enterQuoteWidget();
            priorityObject.enterImageWidgetForLocal();
            priorityObject.cropImage();
            priorityObject.enterImageWidgetWithP2PUrl();
            priorityObject.enterVideoWidgetWithVimeo();
            priorityObject.enterVideoWidget();
            priorityObject.enterRoadblockWidget();
            priorityObject.enterHTMLWidget();
            priorityObject.enterInfoboxWidget();
            priorityObject.enterTweetWidget();
            priorityObject.enterP2PEmbedWidgetForStory();
            priorityObject.enterP2PEmbedWidgetForStoryLink();
            priorityObject.enterP2PEmbedWidgetForPremiumVideo();
            priorityObject.saveStory();
            priorityObject.verifyResultsForRightRail();
        });
});

describe('Verify that user is able to save the html story with multiple widgets', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the preview screen', function() {
            baseObject.navigateToURL(OR.url);
            browser.driver.sleep(4000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_html_story_multiple_widgets_ny,OR.locators.data.headline_for_html_story_multiple_widgets_ny);
            priorityObject.selectHTMLStory();
            priorityObject.enterTextWidget();
            priorityObject.enterQuoteWidget();
            priorityObject.enterImageWidgetForLocal();
            priorityObject.cropImage();
            priorityObject.enterImageWidgetWithP2PUrl();
            priorityObject.enterVideoWidgetWithVimeo();
            priorityObject.enterVideoWidget();
            priorityObject.enterRoadblockWidget();
            priorityObject.enterHTMLWidget();
            priorityObject.enterInfoboxWidget();
            priorityObject.enterTweetWidget();
            priorityObject.enterP2PEmbedWidgetForStory();
            priorityObject.enterP2PEmbedWidgetForStoryLink();
            priorityObject.enterP2PEmbedWidgetForPremiumVideo();
            priorityObject.saveStory();
            priorityObject.verifyResultsForRightRail();
            loginObject.logout();
        });
});
 






