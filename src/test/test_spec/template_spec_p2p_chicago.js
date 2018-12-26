var OR = require('../json/OR_chicago.json');
var base = require('../pages/Basepage.js');
var loginpage = require('../pages/LoginPage.js');
var homepage = require('../pages/HomePage.js');
var TemplatePage = require('../pages/TemplatePage.js');

describe('Verify that user is able to create a new template', function() {
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL(OR.url);
		loginpage.enterDetails();
        //loginpage.enterSlackDetails();
        //loginpage.enterOrganizationDetails();
	});
	
	it('should click on new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	
	it('Verify that user is able to create a new template', function() {
		//TemplatePage.verifySnapHomePage();
		TemplatePage.enterHeadline();
		TemplatePage.enterSlugName(TemplatePage.getName(10)+"template-2018");
		TemplatePage.clicksaveandCont();
		TemplatePage.verifypopup();
		TemplatePage.headlinePreview();
		
		
	});

});
	
describe('Verify the functionality of Save & Continue button when slug field does not contain word template', function() {
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		TemplatePage.verifySnapHomePage();
		//base.navigateToURL(OR.url);
		//loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});

	it('verify that user is able to create new template',function() {
		  browser.driver.sleep(2000);
		  homepage.createNewTemplate();
	});
		
	
	it('should  enters the slug without template word',function() {
		TemplatePage.enterHeadline();		 
		TemplatePage.enterSlugName(TemplatePage.getName(10)+"-2018");
		TemplatePage.clicksaveandCont();
		TemplatePage.verifyslugpupup();
		browser.refresh();
		browser.switchTo().alert().accept();
		
	});
	
});


describe('Verify that New Headline text is displayed on prview screen when user clear the HEADLINE field', function() {

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
	    TemplatePage.verifySnapHomePage();
		//base.navigateToURL(OR.url);
		//loginpage.enterDetails();
	    //loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should click on  new template',function() {
		  browser.driver.sleep(2000);
		  homepage.createNewTemplate();
	});
	
	
	it('Verify that user is able see headline preview ', function() {
		TemplatePage.enterHeadline();		 
		TemplatePage.headlinePreview();
		browser.refresh();
		browser.switchTo().alert().accept();
		
	});

});
describe('Verify the functionality of HEADLINE field when user enters morethan 200 characters', function() {

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		TemplatePage.verifySnapHomePage();
		//base.navigateToURL(OR.url);
		//loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should click on  new template',function() {
		  browser.driver.sleep(2000);
		  homepage.createNewTemplate();
	});
	

	it('Verify that user is able see headline preview ', function() {
		TemplatePage.enterHeadline200();		 
		TemplatePage.verifyHeadlinePopup();
		browser.refresh();
		browser.switchTo().alert().accept();
        
	
	});

});
describe('Verify the functionality of Save & Continue button when mandatory fields are blank', function() {

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		TemplatePage.verifySnapHomePage();
		//base.navigateToURL(OR.url);
		//loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should click on  new template',function() {
		  browser.driver.sleep(2000);
		  homepage.createNewTemplate();
	});
	

	it('Verify that user is able see headline preview ', function() {
		TemplatePage.clearHeadline();		 
		TemplatePage.clearSlug();
		TemplatePage.clicksaveandCont();
		TemplatePage.verifyErrorPopup();		 
		TemplatePage.clickOnOk();
		browser.refresh();
		browser.switchTo().alert().accept();
		 
	});

});
describe('Verify the functionality of STORY TYPE dropdown list in p2p mode', function() {

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		TemplatePage.verifySnapHomePage();
		//base.navigateToURL(OR.url);
		//loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	
	it('should click on new template', function() {
		  browser.driver.sleep(2000);
		  homepage.createNewTemplate();
	});
	

	it('Verify the options in story type in p2p mode', function() {
		TemplatePage.clickOnStorytype();
		TemplatePage.verifyStorytypeOptions();
		
	});

});



describe('Verify the functionality of BYLINE field', function() {
	
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		TemplatePage.verifySnapHomePage();
		//base.navigateToURL(OR.url);
        //loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should create a new template',function() {
		  browser.driver.sleep(2000);
		  homepage.createNewTemplate();
	});
		

	it('enter the Byline value',function() {
		TemplatePage.enterHeadline();		 
		TemplatePage.enterSlugName(TemplatePage.getName(10)+"template-2018");
		TemplatePage.clickonByline();
		TemplatePage.selectBylinefromAutopopulated();
		TemplatePage.verifyBylinePresentWithinBox();
		TemplatePage.clicksaveandCont();
		TemplatePage.verifyBylinePreview();
		TemplatePage.clickOnCrossSign();
		TemplatePage.verifyBylineEmpty();
		TemplatePage.clicksaveandCont();
		TemplatePage.verifyBylinepreviewEmpty();
		
	});
	
});
describe('should Verify the pop up message when user enters the already taken slug', function() {
	
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		TemplatePage.verifySnapHomePage();
		//base.navigateToURL(OR.url);
		//loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should create a new template',function() {
		  browser.driver.sleep(2000);
		  homepage.createNewTemplate();
	});
		
	
	it('enter the Byline value',function() {
		TemplatePage.enterHeadline();		 
		TemplatePage.enterAlreadyTakenSlugName();
		TemplatePage.clicksaveandCont();
		TemplatePage.alredyTakenPopup();
		browser.refresh();
		browser.switchTo().alert().accept();
		 
		
		
		
	});
	
});


describe('Verify that user is able to add multiple byliness', function() {
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		TemplatePage.verifySnapHomePage();
		//base.navigateToURL(OR.url);
		//loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	
	it('should create a new template',function() {
		  browser.driver.sleep(3000);
		  homepage.createNewTemplate();
	});
	
	it('enter the Byline value',function() {
		TemplatePage.enterHeadline();		 
		TemplatePage.enterSlugName(TemplatePage.getName(10)+"template-2018");
		TemplatePage.clickonByline();
		TemplatePage.selectBylinefromAutopopulated();
		TemplatePage.clickonByline1();
		TemplatePage.selectBylinefromAutopopulated1();
		//TemplatePage.clickonByline1();
		//TemplatePage.selectBylinefromAutopopulated2();
		//TemplatePage.verifyBylinePreview1();
		TemplatePage.clicksaveandCont();
		TemplatePage.verifypopup();
		
	
	});
});


	describe('Verify that following fields are autoselected',function(){
		
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			//base.navigateToURL(OR.url);
			//loginpage.enterDetails();
			TemplatePage.verifySnapHomePage();
			//loginpage.enterSlackDetails();
			//loginpage.enterOrganizationDetails();
		});
		
		it('should able to create a new template',function() {
			  //browser.driver.sleep(2000);
			  homepage.createNewTemplate();
			  browser.driver.sleep(6000);
		});
		
		it('Verify that user is able see autofiled fields', function() {
			TemplatePage.verifyHeadline();		 
			TemplatePage.verifySlug();
			TemplatePage.verifyStory();
			TemplatePage.verifyBasicbuild();
			TemplatePage.verifycomments();
			TemplatePage.verifysaveReminder();
			 	
		});
		
	
});
	
	describe('Verify the behavior of Basic Build dropdown Show AD Rail dropdown and widgets for Simple story and HTML story ', function() {
		
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			TemplatePage.verifySnapHomePage();
			//base.navigateToURL(OR.url);
			//loginpage.enterDetails();
			//loginpage.enterSlackDetails();
			//loginpage.enterOrganizationDetails();
		});
		
		it('should click on new template',function() {
			  browser.driver.sleep(2000);
			  homepage.createNewTemplate();
		});
		
		it('verify BasicBuild and ShowAD Rail options',function() {
			TemplatePage.verifyStory();		 
			TemplatePage.verifyBasicbuildIsPresent();
			TemplatePage.clickOnBasicbuildIsVerifyOptions();
			TemplatePage.verifyShowADRailIsNotPresent();
			TemplatePage.verifytheWidgets1();
			TemplatePage.selectHtmlStory();
			TemplatePage.verifyBasicbuildIsNotPresent();
			TemplatePage.verifyShowADRailIsPresent();
			TemplatePage.verifytheWidgets2();
			browser.refresh();
			browser.switchTo().alert().accept();
			
		
		});
	});
	
	describe('Verify that section field is not present on template creation page.',function(){
		
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			TemplatePage.verifySnapHomePage();
			//base.navigateToURL(OR.url);
			//loginpage.enterDetails();
			//loginpage.enterSlackDetails();
			//loginpage.enterOrganizationDetails();
		});
	
		it('should  create new template',function() {
			  browser.driver.sleep(2000);
			  homepage.createNewTemplate();
		});

		it('Verify if section is not displayed and collection is displayed in template edit page', function() {
			TemplatePage.verifySectionNotDisp();
			TemplatePage.verifyCollection();
			//browser.switchTo().alert().accept();
            //browser.driver.sleep(3000);
			
		
		});
		
	
});