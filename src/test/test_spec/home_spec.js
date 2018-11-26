var baseObject = require('../pages/BasePage.js');
var loginObject = require('../pages/LoginPage.js');
var homeObject = require('../pages/HomePage.js');
var OR = require('../json/OR_new_york.json');


describe('Verify functionality of Options field', function() {
        beforeEach(function(){
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronisation = true;
          browser.driver.manage().window().maximize();
        });
        it('should verify SNAP Home page', function() {
            baseObject.navigateToURL();
            homeObject.loginToSnap();
            loginObject.enterSlackDetails();
            loginObject.enterOrganizationDetails();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
        });
        it('should verify the options in dropdown',function(){
            homeObject.checkOptionsDropdown();
            homeObject.homelogout();
        });

});

/*describe('Verify functionality of Logout option', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify options in dropdown', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.checkOptionsDropdown();

        });
        it('should verify successful logout',function(){
            homeObject.homelogout();
            browser.driver.sleep(7000);
            var title = baseObject.getPageTitle();
            expect(title).toBe(OR.locators.data.loginpage_title);
        });
});

describe('Verify functionality of Contact Helpdesk link', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should be redirected to helpdesk page in the new tab', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            loginObject.contactHelpdesk();
            loginObject.logout();
        });
});

describe('Verify functionality of Read the Guide link', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should redirect to SNAP guide page on the same tab', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.readGuide();
            browser.sleep(3000);
            var guideTitle = baseObject.getPageTitle();
            expect(guideTitle).toEqual(OR.locators.data.guidepage_title);
        });
        it('should redirected to SNAP home page on clicking Back to SNAP link',function(){
            homeObject.backToHomePage();
            browser.driver.sleep(7000);
            var title = baseObject.getPageTitle();
            expect(title).toEqual(OR.locators.data.homepage_title);
            loginObject.logout();
        });
});

describe('Verify search functionality when user enters valid search keyword', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify result displayed in result panel', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.searchValidKeyword();
            loginObject.logout();
        });
});

describe('Verify search functionality when user enters invalid search keyword', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify result displayed in result panel', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.searchInvalidKeyword();
            loginObject.logout();
        });
});


describe('Verify search functionality when user keeps search field empty', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the error message displayed', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.searchEmptyKeyword();
            loginObject.logout();
        });
});


describe('Verify user is able to exit from search', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify exit search functionality', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.exitFromSearch();
            loginObject.logout();
        });
});

describe('Verify search field gets unfolded or not', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify search field gets unfolded', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.searchFieldGetsUnfolded();
            loginObject.logout();
        });
});

describe('Verify search field gets folded or not', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify search field gets folded', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.searchFieldGetsFolded();
            loginObject.logout();
        });
});

describe('Verify search results when user enters keyword and selects different market', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify search results are displayed for that market', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.searchResultsForDifferentMarket();
            loginObject.logout();
        });
});

describe('Verify the functionality of + New template option', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should show template creation page with preview screen', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.createNewTemplate();
            var title = baseObject.getPageTitle();
            expect(title).toEqual(OR.locators.data.templatePage_title);
            browser.navigate().back();
            browser.switchTo().alert().accept();
            browser.driver.sleep(3000);
            loginObject.logout();
        });
});

describe('Verify the functionality of + New blank story option', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should show story creation page with preview screen', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.createNewStory();
            var title = baseObject.getPageTitle();
            expect(title).toEqual(OR.locators.data.storyPage_title);
            browser.navigate().back();
            browser.switchTo().alert().accept();
            browser.driver.sleep(3000);
            loginObject.logout();
        });
});

describe('Verify the functionality of edit option', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify template editing page', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyTemplateEditPage();
            var title = baseObject.getPageTitle();
            expect(title).toEqual("SNAP | Edit template | ny-test-tronc-template-20180622");
            browser.navigate().back();
            browser.switchTo().alert().accept();
            browser.driver.sleep(3000);
            loginObject.logout();
        });
});

describe('Verify that new story creation page is opened when user clicks on a template', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify template editing page', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyNewStoryCreationPage();
            var title = baseObject.getPageTitle();
            expect(title).toEqual("SNAP | New story from template | ny-test-tronc-template-20180622");
            browser.navigate().back();
            browser.driver.sleep(3000);
            loginObject.logout();
        });
});

describe('Verify the templates and stories with different states', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify stories with working state', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyWorkingStories();
            homeObject.verifyLiveStories();
            homeObject.verifyOTCStories();
            homeObject.verifyTemplates();
            loginObject.logout();
        });
});

describe('Verify clone option is present on all stories and templates', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify clone option and hovering over clone option', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloneOption();
            loginObject.logout();
        });
});

describe('Verify clone modal when user clicks on Clone option', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify options present in clone modal', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloneModal();
            loginObject.logout();
        });
});

describe('Verify clone it button gets enabled once user enters slug', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify button is enabled', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloneButtonIsEnabled();
            loginObject.logout();
        });
});
describe('Verify functionality of clone it button when user enters existing slug', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the error message', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloneWithExistingSlug();
            loginObject.logout();
        });
});

describe('Verify functionality of clone it button when user removes market prefix from the slug', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the error message displayed', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloneWithRemovedMarketPrefix();
            loginObject.logout();
        });
});

describe('Verify functionality of clone it button when user removes date postfix from the slug', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the error message displayed', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloneWithRemovedDatePostfix();
            loginObject.logout();
        });
});

describe('Verify functionality of clone it button when user removes market prefix and date postfix from the slug', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the error message displayed', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloneWithRemovedMarketAndDate();
            loginObject.logout();
        });
});

describe('Verify functionality of clone it button when user doesnot separate slug with - in slug', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the error message displayed', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloneWithRemovedHyphen();
            loginObject.logout();
        });
});

describe('Verify functionality of clone it button when user doesnot separate slug with - in slug and adds space', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the error message displayed', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloneWithRemovedHyphenAndSpaces();
            loginObject.logout();
        });
});

describe('Verify the pin icon functionality', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify pinned stories displayed before unpinned stories', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyPinFunctionality();
            loginObject.logout();
        });
});

describe('Verify the hover behaviour for unpinned stories', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify background colour nd pin colour', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyHoverOnPin();
            loginObject.logout();
        });
});

describe('Verify the unpin functionality', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the colour of pin symbol', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyUnpin();
            loginObject.logout();
        });
});

describe('Verify the hover behaviour with unpin functionality', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the css attributes of pin symbol', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyUnpinWithHover();
            loginObject.logout();
        });
});

describe('Verify the pin functionality when user pins the story of same or different market', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the pinned story is displayed in search result panel', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyPinWithMarket();
            loginObject.logout();
        });
});

describe('Verify slug entered in field of popup is powered automatically to cloned story', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the redirection to cloned story page', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyRedirectionToClonedStoryPage();
            loginObject.logout();
        });
});

describe('Verify the functionality of Clone It button when user keeps Keep embedded item checkbox unchecked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningWithoutEmbeddedItems();
            loginObject.logout();
        });
});


describe('Verify the functionality of Clone It button when user keeps Keep embedded item checkbox checked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningWithEmbeddedItems();
            loginObject.logout();
        });
});

describe('Verify the user is able to clone the template making Keep embedded item checkbox checked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned template', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningTemplateWithEmbeddedItems();
            loginObject.logout();
        });
});

describe('Verify the user is able to clone the template making Keep embedded item checkbox unchecked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned template', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningTemplateWithoutEmbeddedItems();
            loginObject.logout();
        });
});

describe('Verify the functionality of nevermind button', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that clone modal disappears', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyNeverMindButton();
            loginObject.logout();
        });
});

describe('Verify the user is able to clone simple story in arc mode by making Keep embedded item checkbox checked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningSimpleStoryWithEmbeddedItems();
            loginObject.logout();
        });
});

describe('Verify the user is able to clone simple story in arc mode by making Keep embedded item checkbox unchecked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningSimpleStoryWithoutEmbeddedItems();
            loginObject.logout();
        });
});

describe('Verify the user is able to clone HTML story in arc mode by making Keep embedded item checkbox checked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningHTMLStoryWithEmbeddedItems();
            loginObject.logout();
        });
});

describe('Verify the user is able to clone HTML story in arc mode by making Keep embedded item checkbox unchecked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningHTMLStoryWithoutEmbeddedItems();
            loginObject.logout();
        });
});

describe('Verify the user is able to clone right rail story in p2p mode by making Keep embedded item checkbox checked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningRightRailStoryWithEmbeddedItems();
            loginObject.logout();
        });
});

describe('Verify the user is able to clone right rail story in p2p mode by making Keep embedded item checkbox unchecked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningRightRailStoryWithoutEmbeddedItems();
            loginObject.logout();
        });
});

describe('Verify the user is able to clone full width story in p2p mode by making Keep embedded item checkbox checked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningFullWidthStoryWithEmbeddedItems();
            loginObject.logout();
        });
});*/
/*
describe('Verify the user is able to clone full width story in p2p mode by making Keep embedded item checkbox unchecked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningFullWidthStoryWithoutEmbeddedItems();
            loginObject.logout();
        });
});

*/
/*
describe('Verify that on cloning the story, original story is not affected with anything', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify original story remains unaffected', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyOriginalStory();
            loginObject.logout();
        });
});*//*


describe('Verify the user is able to clone published story by making Keep embedded item checkbox checked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningPublishedStoryWithEmbeddedItems();
            loginObject.logout();
        });
});

describe('Verify the user is able to clone published story by making Keep embedded item checkbox unchecked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningPublishedStoryWithoutEmbeddedItems();
            loginObject.logout();
        });
});

*/
/*
describe('Verify the user is able to clone OTC story by making Keep embedded item checkbox checked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningOTCStoryWithEmbeddedItems();
            loginObject.logout();
        });
});

describe('Verify the user is able to clone OTC story by making Keep embedded item checkbox unchecked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify that user can save the cloned story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningOTCStoryWithoutEmbeddedItems();
            loginObject.logout();
        });
});

describe('Verify that Clone and Original options are displayed below the story when user searches other market story', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the options', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyOptionsBelowStory();
            loginObject.logout();
        });
});

describe('Verify that Clone It button is disabled by default when user clones the story', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the button', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyDisabledCloneButton();
            loginObject.logout();
        });
});

describe('Verify the slug field when user clones the story', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the slug', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifySlugField();
            loginObject.logout();
        });
});

describe('Verify that user is able to clone the stories with all its embedded contents', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the status and widgets', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCloningStoriesWithAllItems();
            loginObject.logout();
        });
});

describe('Verify the status of the story when user clones any publish story', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the status', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyStatusOnCloningPublishedStory();
            loginObject.logout();
        });
});*/

/*describe('Verify that user is shown for an error message when user makes the slug field blank and tries to clone the story', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the error', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyErrorOnEmptySlug();
            loginObject.logout();
        });
});*/

/*describe('Verify that user is shown for an error message when user cuts either market prefix or date from slug field and tries to clone the story', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the error', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyErrorOnSlugWithoutDate();
            loginObject.logout();
        });
});

describe('Verify that user is shown for an error message when user enters incorrect slug field and tries to clone the story', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the error', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyErrorOnInvalidSlug();
            loginObject.logout();
        });
});

describe('Verify the functionality of Keep embedded items checkbox', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the checkbox to be unchecked', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyEmbeddedItemsCheckbox();
            loginObject.logout();
        });
});

describe('Verify the functionality of Keep embedded items checkbox when it is checked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the checkbox to be unchecked', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyEmbeddedItemsCheckboxChecked();
            loginObject.logout();
        });
});

describe('Verify the functionality of Keep embedded items checkbox when it is unchecked', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the checkbox to be unchecked', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyEmbeddedItemsCheckboxUnchecked();
            loginObject.logout();
        });
});

describe('Verify the error message when user enters existing slug while cloning the story', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the error', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyErrorWithExistingSlug();
            loginObject.logout();
        });
});

describe('Verify that whether user is able to cancel cloning of the stories or not', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the error', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyCancelingCloning();
            loginObject.logout();
        });
});


describe('Verify that original story is not getting updated when user makes changes in cloned story', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the original story', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyOriginalStoryIsNotChanged();
            loginObject.logout();
        });
});

describe('Verify the tooltip of SNAP logo', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the tooltip', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifySNAPLogoTooltip();
            loginObject.logout();
        });
});

describe('Verify the tooltip of SLACK user logo', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the tooltip', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifySLACKLogoTooltip();
            loginObject.logout();
        });
});

describe('Verify the tooltip of MARKET dropdown list', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the tooltip', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyMarketTooltip();
            loginObject.logout();
        });
});

describe('Verify the tooltip of template', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the tooltip', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyTemplateTooltip();
            loginObject.logout();
        });
});

describe('Verify the tooltip of story', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the tooltip', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyStoryTooltip();
            loginObject.logout();
        });
});

describe('Verify the tooltip of template edit option', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the tooltip', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyTemplateEditTooltip();
            loginObject.logout();
        });
});*/

describe('Verify the tooltips of Clone and Original options', function() {
        beforeEach(function(){
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronisation = true;
            browser.driver.manage().window().maximize();
        });
        it('should verify the tooltip', function() {
            baseObject.navigateToURL();
            homeObject.secondLogin();
            browser.driver.sleep(7000);
            var actualTitle = baseObject.getPageTitle();
            expect(actualTitle).toEqual(OR.locators.data.homepage_title);
            homeObject.verifyDifferentMarketTooltip();
            loginObject.logout();
        });
});