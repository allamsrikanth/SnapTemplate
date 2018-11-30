var base = require('../pages/Basepage.js');
/*describe('Verify that user is able to create a new template', function() {
	var loginpage = require('../pages/LoginPage.js');
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		loginpage.enterSlackDetails();
		loginpage.enterOrganizationDetails();
	});
	
	var homepage = require('../pages/HomePage.js');
	it('should create a new template',function() {
		  browser.driver.sleep(10000);
		  homepage.createNewTemplate();
	});
	
	var templatepage = require('../pages/TemplatePage.js');
	it('Verify that user is able to create a new template', function() {
		templatepage.verifySnapHomePage();
		templatepage.enterTemplateName();
		
		templatepage.enterSlugName();
		//templatepage.enterMandatoryFields();
		templatepage.clicksaveandCont();
		templatepage.verifypopup();
		//templatepage.snapHomePage();
	});

});
	
describe('Verify the functionality of Save & Continue button when slug field does not contain word template', function() {
	
	var loginpage = require('../pages/LoginPage.js');
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		loginpage.enterSlackDetails();
		loginpage.enterOrganizationDetails();
	});
	
	var homepage = require('../pages/HomePage.js');
	it('verify that user is able to create new template',function() {
		  browser.driver.sleep(10000);
		  homepage.createNewTemplate();
	});
		
	var templatepage = require('../pages/TemplatePage.js');
	it('should  enters the slug without template word',function() {
		templatepage.enterTemplateName();		 
		templatepage.enterSlugName1();
		templatepage.clicksaveandCont();
		templatepage.verifyslugpupup();
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
		templatepage.enterHeadline200();		 
		templatepage.verifyHeadlinePopup();
	
	});

});
describe('Verify the functionality of Save & Continue button when mandatory fields are blank', function() {
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
	it('Verify that user is able see headline preview ', function() {
		templatepage.clearHeadline();		 
		templatepage.clearSlug();
		templatepage.clicksaveandCont();
		templatepage.verifyErrorPopup();		 
		templatepage.clickOnOk();
		
		
	
	
	});

});
describe('Verify the functionality of STORY TYPE dropdown list in p2p mode ', function() {
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
		templatepage.clickOnStorytype();		 
		templatepage.verifyStorytypeOptions();
		//templatepage.clicksaveandCont();
		//templatepage.verifyErrorPopup();		 
		//templatepage.clickOnOk();
		
		
	
	
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
		
		
		//expect(templatepage.getHeadline()).toEqual('snap-test-auto-admin-ct-xebia Joshi Template');
		//expect(templatepage.getSlugName()).toContain('ny-snap-test-auto-admin-ct-xebia-template-');
		
		
		
	});
	
});
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


describe('Verify that user is able to add multiple byliness', function() {
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
		templatepage.clickonByline1();
		templatepage.selectBylinefromAutopopulated1();
		templatepage.clickonByline1();
		templatepage.selectBylinefromAutopopulated2();
		templatepage.verifyBylinePreview1();
		templatepage.clicksaveandCont();
		templatepage.verifypopup();
	
	});*/
	describe('Verify that following fields are autoselected',function(){
		var loginpage = require('../pages/LoginPage.js');
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			base.navigateToURL('https://snap-nydailynews-qa.tribdev.com');
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
			templatepage.saveReminder();

		
		});
		
	
});
	
	/*describe('Verify the behavior of Basic Build dropdown Show AD Rail dropdown and widgets for Simple story and HTML story ', function() {
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
			templatepage.verifyStory();		 
			templatepage.verifyBasicbuildIsPresent();
			templatepage.clickOnBasicbuildIsVerifyOptions();
			templatepage.verifyShowADRailIsNotPresent();
			templatepage.verifytheWidgets1();
			templatepage.selectHtmlStory();
			templatepage.verifyBasicbuildIsNotPresent();
			templatepage.verifyShowADRailIsPresent();
			templatepage.verifytheWidgets2();
			//templatepage.clicksaveandCont();
			//templatepage.verifypopup();
		
		});
	});*/
	