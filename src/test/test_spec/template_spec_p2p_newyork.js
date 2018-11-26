var base = require('../pages/Basepage.js');
/*describe('Verify that user is able to create a new template', function() {
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
	it('should create a new template',function() {
		  browser.driver.sleep(10000);
		  homepage.createNewTemplate();
	});
	
	var templatepage = require('../pages/TemplatePage.js');
	it('Verify that user is able to create a new template', function() {
		templatepage.enterTemplateName();		 
		templatepage.enterSlugName();
		//templatepage.enterMandatoryFields();
		templatepage.clicksaveandCont();
		templatepage.verifypopup();
	});

});
	
describe('Verify the functionality of Save & Continue button when slug field does not contain word template', function() {
	
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
	it('verify that user is able to create new template',function() {
		  browser.driver.sleep(10000);
		  homepage.createNewTemplate();
	});
		
	var templatepage = require('../pages/TemplatePage.js');
	it('should  enters the slug without template word',function() {
		templatepage.enterTemplateName();		 
		templatepage.enterSlugName();
		templatepage.clicksaveandCont();
		templatepage.verifypopup();
	});
	
});

describe('Verify that user can update existing template with additional details or not', function() {
	
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
	it('Verify that user is able to search an old template',function() {
		  browser.driver.sleep(10000);
		  homepage.verifyTemplateEditPage();
	});
	
	var templatepage = require('../pages/TemplatePage.js');
	it('Verify that user is able to Update an old template', function() {		
		templatepage.updateDetails();
		templatepage.clickOnSection();
		templatepage.verifyUpdatedTemplate();
	});
});
describe('Verify that New Headline text is displayed on prview screen when user clear the HEADLINE field', function() {
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
		  browser.driver.sleep(10000);
		  homepage.createNewTemplate();
	});
	
	var templatepage = require('../pages/TemplatePage.js');
	it('Verify that user is able see headline preview ', function() {
		templatepage.enterTemplateName();		 
		templatepage.headlinePreview();
		
	});

});
describe('Verify the functionality of HEADLINE field when user enters morethan 200 characters', function() {
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
		  browser.driver.sleep(10000);
		  homepage.createNewTemplate();
	});
	
	var templatepage = require('../pages/TemplatePage.js');
	it('Verify that user is able see headline preview ', function() {
		templatepage.enterTemplateName();		 
		//templatepage.enterSlugName();
		//templatepage.enterMandatoryFields();
		templatepage.headlinePreview();
		
	});

});

describe('Verify the functionality of BYLINE field', function() {
	
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
	it('should create a new template',function() {
		  browser.driver.sleep(10000);
		  homepage.createNewTemplate();
	});
		
	var templatepage = require('../pages/TemplatePage.js');
	it('enter the Byline value',function() {
		templatepage.enterTemplateName();		 
		templatepage.enterSlugName();
		templatepage.clickonByline();
		templatepage.selectBylinefromAutopopulated();
		templatepage.verifyBylinePresentWithinBox();
		templatepage.clicksaveandCont();
		templatepage.verifyBylinePreview();
		templatepage.clickOnCrossSign();
		templatepage.verifyBylineEmpty();
		templatepage.clicksaveandCont();
		
	});
	
});*/
describe('should Verify the pop up message when user enters the already taken slug', function() {
	
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
	it('should create a new template',function() {
		  browser.driver.sleep(10000);
		  homepage.createNewTemplate();
	});
		
	var templatepage = require('../pages/TemplatePage.js');
	it('enter the Byline value',function() {
		templatepage.enterTemplateName();		 
		templatepage.enterSlugName();
		templatepage.clicksaveandCont();
		templatepage.alredyTakenPopup();
		
		
	});
	
});


