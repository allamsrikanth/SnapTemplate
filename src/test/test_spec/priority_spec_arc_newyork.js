var baseObject = require('../pages/BasePage.js');
var loginObject = require('../pages/LoginPage.js');
var homeObject = require('../pages/HomePage.js');
var priorityObject = require('../pages/PriorityPage.js');
var OR = require('../json/OR_new_york.json');
var width = 1600;
var height = 1200;


/*describe('Verify the fields in story creation page for Right rail and Full width story in ARC mode', function() {
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
            priorityObject.verifyStoryTypeForRightRail();
            priorityObject.verifyBasicBuild(OR.locators.data.basic_build_options_ny);
            priorityObject.verifySectionsAndUpdates();
            priorityObject.verifySchedulingForRightRail();
            priorityObject.verifyExpireWindowAndNoDate(OR.locators.data.expire_window_options_ny);
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
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_local_storage_ny,OR.locators.data.headline_for_local_storage_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
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
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_p2p_image_ny,OR.locators.data.headline_for_p2p_image_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifyLeadArtWithP2PPhotograph();
            loginObject.logout();
        });
});*/


/*
describe('Verify that user is able to save the right rail story with multiple widgets', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the preview screen', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_right_rail_story_multiple_widgets_ny,OR.locators.data.headline_for_right_rail_story_multiple_widgets_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
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

describe('Verify that user is able to save the full width story with multiple widgets', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the preview screen', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_full_width_story_multiple_widgets_ny,OR.locators.data.headline_for_full_width_story_multiple_widgets_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.selectFullWidthOption();
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



describe('Verify the source field in story creation page of the story if multiple authors with mixed distribution rights added in the story(DR to WDR)', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the source field', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_multiple_authors_ny,OR.locators.data.headline_for_multiple_authors_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifySourceWithMultipleAuthorsDRtoWDR();
            loginObject.logout();
        });
});

describe('Verify the source field in story creation page of the story if multiple authors with mixed distribution rights added in the story(WDR to DR)', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the source field', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_multiple_authors_wdrtodr_ny,OR.locators.data.headline_for_multiple_authors_wdrtodr_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifySourceWithMultipleAuthorsWDRtoDR();
            loginObject.logout();
        });
});

describe('Verify the source field in story creation page of the story if multiple authors with distribution rights and author without any staff pages added in the story', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the source field', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_multiple_authors_dr_without_staff_pages_ny,OR.locators.data.headline_for_multiple_authors_dr_without_staff_pages_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifySourceWithMultipleAuthorsDRWithoutStaffPages();
            loginObject.logout();
        });
});

describe('Verify the source field in story creation page of the story if multiple authors without distribution rights and author without any staff pages added in the story', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the source field', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_multiple_authors_wdr_without_staff_pages_ny,OR.locators.data.headline_for_multiple_authors_wdr_without_staff_pages_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifySourceWithMultipleAuthorsWDRWithoutStaffPages();
            loginObject.logout();
        });
});

describe('Verify the source field in story creation page of the story if Multiple authors added in the story having without staff page', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the source field', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_multiple_authors_without_staff_pages_ny,OR.locators.data.headline_for_multiple_authors_without_staff_pages_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifySourceWithMultipleAuthorsWithoutStaffPages();
            loginObject.logout();
        });
});

describe('Verify the source of the story if multiple authors with mixed distribution rights added in the story', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the source field', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_multiple_authors_mixed_ny,OR.locators.data.headline_for_multiple_authors_mixed_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifySourceWithMultipleAuthorsMixed();
            loginObject.logout();
        });
});

describe('Verify that user is able to change the story status', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should be able to save story in required status', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_change_story_status_ny,OR.locators.data.headline_for_change_story_status_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifyChangeStoryStatus();
            loginObject.logout();
        });
});

describe('Verify Expire Window field on Story creation page', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify all the options', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.verifyStoryExpireWindow(OR.locators.data.expire_window_options_ny);
            loginObject.logout();
        });
});

describe('Verify Expire Window field on template creation page', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify all the options', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.verifyTemplateExpireWindow(OR.locators.data.expire_window_options_ny);
            loginObject.logout();
        });
});

describe('Verify Expire Window changes to Expire Date when story updated from Working to Publish', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the expected result', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_expire_window_change_story_status_ny,OR.locators.data.headline_for_expire_window_change_story_status_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifyExpireWindowOnStatusChange();
            loginObject.logout();
        });
});

describe('Verify Expire Window changes to Expire Date when story updated from Working to OTC', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the expected result', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_expire_window_change_otc_story_status_ny,OR.locators.data.headline_for_expire_window_change_otc_story_status_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifyExpireWindowOnStatusChangeOTC();
            loginObject.logout();
        });
});

describe('Verify that user is able to set the Expire date', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the expected result', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.verifySettingExpireDate(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            loginObject.logout();
        });
});*/

describe('Verify that Expire window in story created from template is as per the Expire window set in template', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the expected result', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.verifyExpireWindowTemplate();
            loginObject.logout();
        });
});
/*
describe('Verify that Expire Date follows user local timezone and removes the content from SNAP once Expire Date is passed', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify the expected result', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.verifyExpireDateTimezone();
            loginObject.logout();
        });
});

describe('Verify the Embargo field functionality', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify that user is able to save the story', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_embargo_date_ny,OR.locators.data.headline_for_embargo_date_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifyEmbargoDateFunctionality();
            loginObject.logout();
        });
});

describe('Verify that user is unable to save the story when Embargo date is after On the clock date', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify that user is able to save the story', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_invalid_embargo_date_ny,OR.locators.data.headline_for_invalid_embargo_date_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifyInvalidEmbargoDateFunctionality();
            loginObject.logout();
        });
});

describe('Verify that user is able to remove the set Embargo date', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify that user is able to save the story', function() {
            baseObject.navigateToURL(OR.url);
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            priorityObject.enterSlugAndHeadline(OR.locators.data.slug_for_remove_embargo_date_ny,OR.locators.data.headline_for_remove_embargo_date_ny);
            priorityObject.selectSection(OR.locators.data.search_section_keyword_ny,OR.locators.StoryPage.section_selected_ny);
            priorityObject.verifyRemoveEmbargoDate();
            loginObject.logout();
        });
});
*/
