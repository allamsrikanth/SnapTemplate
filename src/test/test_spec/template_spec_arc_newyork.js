var base = require('../pages/BasePage.js');
/*describe('Verify the functionality of STORY TYPE dropdown list ', function() {
	
	var loginpage = require('../pages/LoginPage.js');
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	var homepage = require('../pages/HomePage.js');
	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	
	var templatepage = require('../pages/TemplatePage.js');
	it('Verify the options in story type ', function() {
		templatepage.clickOnStorytypeArc();		 
		templatepage.verifyStorytypeOptionsArc();
		//templatepage.clicksaveandCont();
		//templatepage.verifyErrorPopup();		 
		//templatepage.clickOnOk();
		
		
	
	
	});

});

	
	
	describe('Verify that following fields are autoselected',function(){
		var loginpage = require('../pages/LoginPage.js');
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
			loginpage.enterDetails();
			//loginpage.enterSlackDetails();
			//loginpage.enterOrganizationDetails();
		});
		var homepage = require('../pages/HomePage.js');
		it('should  enters the slug without template word',function() {
			  browser.driver.sleep(10000);
			  homepage.createNewTemplate();
		});
		var templatepage = require('../pages/TemplatePage.js');
		it('Verify that user is able see autofiled fields', function() {
			templatepage.verifyHeadline();		 
			templatepage.verifySlug();
			templatepage.verifyStory();
			templatepage.verifyBasicbuild();
			templatepage.verifycomments();
		
		});
		
		describe('Verify the behavior of Basic Build dropdown Show AD Rail dropdown and widgets for Simple story and HTML story ARC mode ', function() {
		var loginpage = require('../pages/LoginPage.js');
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
			loginpage.enterDetails();
			//loginpage.enterSlackDetails();
			//loginpage.enterOrganizationDetails();
		});
		
		var homepage = require('../pages/HomePage.js');
		it('should click on new template',function() {
			  browser.driver.sleep(10000);
			  homepage.createNewTemplate();
		});
		
		var templatepage = require('../pages/TemplatePage.js');
		it('verify BasicBuild and ShowAD Rail options',function() {
			templatepage.verifyStoryArc();		 
			templatepage.verifyBasicbuildIsPresent();
			templatepage.clickOnBasicbuildIsVerifyOptions();
			templatepage.verifyShowADRailIsNotPresent();
			templatepage.verifytheWidgets3();
			templatepage.selectFullWidth();
			templatepage.verifyBasicbuildIsPresent();
			templatepage.clickOnBasicbuildIsVerifyOptions();
			templatepage.verifyShowADRailIsNotPresent();
			templatepage.verifytheWidgets4();
			//templatepage.clicksaveandCont();
			//templatepage.verifypopup();
		
		});
	});
describe('Verify that user is able to save the template without adding section', function() {
	
	var loginpage = require('../pages/LoginPage.js');
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	var homepage = require('../pages/HomePage.js');
	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	
	var templatepage = require('../pages/TemplatePage.js');
	it('should save the template without adding section', function() {
		templatepage.enterHeadline16();		 
		templatepage.enterSlugName16();
		templatepage.clicksaveandCont();
		templatepage.verifypopup();		 
		//templatepage.clickOnOk();
		
		
	
	
	});

});

describe('Verify that added section is displayed on SNAP preview', function() {
	
	var loginpage = require('../pages/LoginPage.js');
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	var homepage = require('../pages/HomePage.js');
	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	
	var templatepage = require('../pages/TemplatePage.js');
	it('should save the template without adding section', function() {
		templatepage.enterHeadline17();		 
		templatepage.enterSlugName17();
		templatepage.clickOnSection17();
		templatepage.clicksaveandCont();
		templatepage.verifySectionAdded();		 
		//templatepage.clickOnOk();
		
		
	
	
	});

});

describe('Verify that user is not allowed to add same section multiple timess', function() {
	
	var loginpage = require('../pages/LoginPage.js');
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	var homepage = require('../pages/HomePage.js');
	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	
	var templatepage = require('../pages/TemplatePage.js');
	it('should save the template without adding section', function() {
		templatepage.enterHeadline17();		 
		templatepage.enterSlugName17();
		templatepage.clickOnSection17();
		templatepage.clickOnSectionAgain17();
		
		templatepage.verifySectionErrorpopup();		 
		//templatepage.clickOnOk();
		
		
	
	
	});

});*/
describe('Verify that user is able to update the added section', function() {
	
	var loginpage = require('../pages/LoginPage.js');
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	var homepage = require('../pages/HomePage.js');
	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	
	var templatepage = require('../pages/TemplatePage.js');
	it('should save the template without adding section', function() {
		templatepage.enterHeadline17();		 
		templatepage.enterSlugName17();
		templatepage.clickOnSection17();
		templatepage.clicksaveandCont();
		templatepage.clickOnSectionAgain21();
		templatepage.clicksaveandCont();
		templatepage.verifySectionAdded21();		 
		//templatepage.clickOnOk();
		
		
	
	
	});

});


		