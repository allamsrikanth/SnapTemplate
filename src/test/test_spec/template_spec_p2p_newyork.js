var OR = require('../json/OR_new_york.json');
var base = require('../pages/Basepage.js');
var loginpage = require('../pages/LoginPage.js');
var homepage = require('../pages/HomePage.js');
var templatepage = require('../pages/TemplatePage.js');

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
		  browser.driver.sleep(3000);
		  homepage.createNewTemplate();
	});
	
	it('Verify that user is able to create a new template', function() {
		//templatepage.verifySnapHomePage();
		templatepage.enterHeadline();
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clicksaveandCont();
		templatepage.verifypopup();
		templatepage.headlinePreview();
		// base.killbrowser();headlinePreview
		
	});

});
	
describe('Verify the functionality of Save & Continue button when slug field does not contain word template', function() {
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		templatepage.verifySnapHomePage();
		//base.navigateToURL(OR.url);
		//loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});

	it('verify that user is able to create new template',function() {
		  browser.driver.sleep(5000);
		  homepage.createNewTemplate();
	});
		
	
	it('should  enters the slug without template word',function() {
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"-2018");
		templatepage.clicksaveandCont();
		templatepage.verifyslugpupup();
		templatepage.handlepopup();
		
		browser.refresh();
		browser.switchTo().alert().accept();
		 //base.killbrowser();
	});
	
});


describe('Verify that New Headline text is displayed on prview screen when user clear the HEADLINE field', function() {

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		templatepage.verifySnapHomePage();
		//base.navigateToURL(OR.url);
		//loginpage.enterDetails();
	    //loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should click on  new template',function() {
		  browser.driver.sleep(3000);
		  homepage.createNewTemplate();
	});
	
	
	it('Verify that user is able see headline preview ', function() {
		templatepage.enterHeadline();		 
		templatepage.headlinePreview();
		
		//browser.switchTo().alert().accept();
        //browser.driver.sleep(3000)
        //base.killbrowser();
		
	});

});
/*describe('Verify the functionality of HEADLINE field when user enters morethan 200 characters', function() {

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL(OR.url);
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should click on  new template',function() {
		  browser.driver.sleep(10000);
		  homepage.createNewTemplate();
	});
	

	it('Verify that user is able see headline preview ', function() {
		templatepage.enterHeadline200();		 
		templatepage.verifyHeadlinePopup();
		//browser.switchTo().alert().accept();
       // browser.driver.sleep(3000)
        base.killbrowser();
	
	});

});
describe('Verify the functionality of Save & Continue button when mandatory fields are blank', function() {

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL(OR.url);
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	

	it('Verify that user is able see headline preview ', function() {
		templatepage.clearHeadline();		 
		templatepage.clearSlug();
		templatepage.clicksaveandCont();
		templatepage.verifyErrorPopup();		 
		templatepage.clickOnOk();
		 base.killbrowser();
	});

});
describe('Verify the functionality of STORY TYPE dropdown list in p2p mode', function() {

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL(OR.url);
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	
	it('should click on new template', function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	

	it('Verify the options in story type in p2p mode', function() {
		templatepage.clickOnStorytype();
		templatepage.verifyStorytypeOptions();
		 base.killbrowser();
	});

});



describe('Verify the functionality of BYLINE field', function() {
	
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL(OR.url);
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should create a new template',function() {
		  browser.driver.sleep(10000);
		  homepage.createNewTemplate();
	});
		

	it('enter the Byline value',function() {
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clickonByline();
		templatepage.selectBylinefromAutopopulated();
		templatepage.verifyBylinePresentWithinBox();
		templatepage.clicksaveandCont();
		templatepage.verifyBylinePreview();
		templatepage.clickOnCrossSign();
		templatepage.verifyBylineEmpty();
		templatepage.clicksaveandCont();
		templatepage.verifyBylinepreviewEmpty();
		base.killbrowser();
	});
	
});
describe('should Verify the pop up message when user enters the already taken slug', function() {
	
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL(OR.url);
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should create a new template',function() {
		  browser.driver.sleep(10000);
		  homepage.createNewTemplate();
	});
		
	
	it('enter the Byline value',function() {
		templatepage.enterHeadline();		 
		templatepage.enteralreadytakenSlugName();
		templatepage.clicksaveandCont();
		templatepage.alredyTakenPopup();
		base.killbrowser();
		
		
	});
	
});


describe('Verify that user is able to add multiple byliness', function() {
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL(OR.url);
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	
	it('should create a new template',function() {
		  browser.driver.sleep(3000);
		  homepage.createNewTemplate();
	});
	
	it('enter the Byline value',function() {
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clickonByline();
		templatepage.selectBylinefromAutopopulated();
		templatepage.clickonByline1();
		templatepage.selectBylinefromAutopopulated1();
		//templatepage.clickonByline1();
		//templatepage.selectBylinefromAutopopulated2();
		templatepage.verifyBylinePreview1();
		templatepage.clicksaveandCont();
		templatepage.verifypopup();
		base.killbrowser();
	
	});
});


	describe('Verify that following fields are autoselected',function(){
		
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			base.navigateToURL(OR.url);
			loginpage.enterDetails();
			//loginpage.enterSlackDetails();
			//loginpage.enterOrganizationDetails();
		});
		
		it('should able to create a new template',function() {
			  //browser.driver.sleep(10000);
			  homepage.createNewTemplate();
			  browser.driver.sleep(6000);
		});
		
		it('Verify that user is able see autofiled fields', function() {
			templatepage.verifyHeadline();		 
			templatepage.verifySlug();
			templatepage.verifyStory();
			templatepage.verifyBasicbuild();
			templatepage.verifycomments();
			templatepage.verifysaveReminder();
			 base.killbrowser();	
		});
		
	
});
	
	describe('Verify the behavior of Basic Build dropdown Show AD Rail dropdown and widgets for Simple story and HTML story ', function() {
		
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			base.navigateToURL(OR.url);
			loginpage.enterDetails();
			//loginpage.enterSlackDetails();
			//loginpage.enterOrganizationDetails();
		});
		
		it('should click on new template',function() {
			  browser.driver.sleep(10000);
			  homepage.createNewTemplate();
		});
		
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
			base.killbrowser();
		
		});
	});
	
	describe('Verify that section field is not present on template creation page.',function(){
		
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			base.navigateToURL(OR.url);
			loginpage.enterDetails();
			//loginpage.enterSlackDetails();
			//loginpage.enterOrganizationDetails();
		});
	
		it('should  create new template',function() {
			  browser.driver.sleep(10000);
			  homepage.createNewTemplate();
		});

		it('Verify if section is not displayed and collection is displayed in template edit page', function() {
			templatepage.verifySectionNotDisp().verifyCollection();
			//browser.switchTo().alert().accept();
            //browser.driver.sleep(3000);
			// base.killbrowser();
		
		});
		
	
});*/