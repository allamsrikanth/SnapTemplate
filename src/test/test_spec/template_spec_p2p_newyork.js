var OR = require('../json/OR_new_york.json');
var base = require('../pages/Basepage.js');
var loginpage = require('../pages/LoginPage.js');
var homepage = require('../pages/HomePage.js');
var templatepage = require('../pages/TemplatePage.js');

/*describe('Verify that user is able to create a new template', function() {
        beforeEach(function(){
	    browser.waitForAngularEnabled(false);
	    browser.ignoreSynchronization = true;
	   });
   it('It should display the message as Your story has been successfully saved', function() {
        base.navigateToURL(OR.url);
		browser.driver.sleep(8000);
	    loginpage.enterDetails();
		loginpage.enterSlackDetails();
		loginpage.enterOrganizationDetails();
		browser.driver.sleep(2000);
		homepage.createNewTemplate();
		browser.driver.sleep(2000);
		templatepage.enterHeadline();
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clicksaveandCont();
		templatepage.verifypopup();
	
	});
	
	it('User should remain on newly created templete',function() {
		browser.driver.sleep(2000);
		templatepage.newlyCreatedTemplated();
	});
	
	it('It should show the headline on the preview screen', function() {
		browser.driver.sleep(2000);
		templatepage.headlinePrevieew();
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
		  browser.driver.sleep(2000);
		  homepage.createNewTemplate();
	});
		
	
	it('should  enters the slug without template word',function() {
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"-2018");
		templatepage.clicksaveandCont();
		templatepage.verifyslugpupup();
        browser.refresh();
		browser.switchTo().alert().accept();
		
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
		  browser.driver.sleep(2000);
		  homepage.createNewTemplate();
	});
	
	
	it('Verify that user is able see headline preview ', function() {
		templatepage.enterHeadline();		 
		templatepage.headlinePrevieew();
		browser.refresh();
		browser.switchTo().alert().accept();
		
	});

});*/
describe('Verify the functionality of HEADLINE field when user enters morethan 200 characters', function() {

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		//templatepage.verifySnapHomePage();
		base.navigateToURL(OR.url);
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should click on  new template',function() {
		  browser.driver.sleep(2000);
		  homepage.createNewTemplate();
	});
	

	it('Verify that user is able see headline preview ', function() {
		templatepage.enterHeadlinee();
	    templatepage.verifyHeadlinePopup();
		browser.refresh();
		browser.switchTo().alert().accept();
        
	
	});

});
/*describe('Verify the functionality of Save & Continue button when mandatory fields are blank', function() {

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
		  browser.driver.sleep(2000);
		  homepage.createNewTemplate();
	});
	

	it('Verify that user is able see headline preview ', function() {
		templatepage.clearHeadline();		 
		templatepage.clearSlug();
		templatepage.clicksaveandCont();
		templatepage.verifyErrorPopup();		 
		templatepage.clickOnOk();
		browser.refresh();
		browser.switchTo().alert().accept();
		 
	});

});
describe('Verify the functionality of STORY TYPE dropdown list in p2p mode', function() {

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		//templatepage.verifySnapHomePage();
		base.navigateToURL(OR.url);
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	
	it('should click on new template', function() {
		  browser.driver.sleep(2000);
		  homepage.createNewTemplate();
	});
	

	it('Verify the options in story type in p2p mode', function() {
		templatepage.clickOnStorytype();
		templatepage.verifyStorytypeOptions();
		
	});

});*/



/*describe('Verify the functionality of BYLINE field', function() {
	
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		templatepage.verifySnapHomePage();
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
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clickonByline();
		templatepage.selectBylinefromAutopopulated1();
		templatepage.verifyBylinePresentWithinBox();
		templatepage.clicksaveandCont();
		templatepage.verifyBylinePreview();
		templatepage.clickOnCrossSign();
		templatepage.verifyBylineEmpty();
		templatepage.clicksaveandCont();
		templatepage.verifyBylinepreviewEmpty();
		
		});
	
});
describe('should Verify the pop up message when user enters the already taken slug', function() {
	
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		templatepage.verifySnapHomePage();
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
		templatepage.enterHeadline();		 
		templatepage.enterAlreadyTakenSlugName();
		templatepage.clicksaveandCont();
		templatepage.alredyTakenPopup();
		browser.refresh();
		browser.switchTo().alert().accept();
		 
		
		
		
	});
	
});


describe('Verify that user is able to add multiple byliness', function() {
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		templatepage.verifySnapHomePage();
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
		
	
	});
});


	describe('Verify that following fields are autoselected',function(){
		
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			//base.navigateToURL(OR.url);
			//loginpage.enterDetails();
			templatepage.verifySnapHomePage();
			//loginpage.enterSlackDetails();
			//loginpage.enterOrganizationDetails();
		});
		
		it('should able to create a new template',function() {
			  //browser.driver.sleep(2000);
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
			 	
		});
		
	
});
	
	describe('Verify the behavior of Basic Build dropdown Show AD Rail dropdown and widgets for Simple story and HTML story ', function() {
		
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			templatepage.verifySnapHomePage();
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
			templatepage.verifyStory();		 
			templatepage.verifyBasicbuildIsPresent();
			templatepage.clickOnBasicbuildIsVerifyOptions();
			templatepage.verifyShowADRailIsNotPresent();
			templatepage.verifytheWidgets1();
			templatepage.selectHtmlStory();
			templatepage.verifyBasicbuildIsNotPresent();
			templatepage.verifyShowADRailIsPresent();
			templatepage.verifytheWidgets2();
			browser.refresh();
			browser.switchTo().alert().accept();
			
		
		});
	});
	
	describe('Verify that section field is not present on template creation page.',function(){
		
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			templatepage.verifySnapHomePage();
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
			templatepage.verifySectionNotDisp();
			templatepage.verifyCollection();
			//browser.switchTo().alert().accept();
            //browser.driver.sleep(3000);
			
		
		});
		
	
});*/


/*describe('Verify that user is able to comment on the story by selecting Show option in Comment dropdown', function() {
	     beforeEach(function(){
	     browser.waitForAngularEnabled(false);
	     browser.ignoreSynchronization = true;
	   //templatepage.verifySnapHomePage();
	   //loginpage.enterSlackDetails();
	   //loginpage.enterOrganizationDetails();
	});
	
it('On Clicking Create Story From the Template user should be navigated to story creation page and Comment dropdown should be set to Show by default', function() {
	    base.navigateToURL(OR.url);
	    browser.driver.sleep(4000);
	    loginpage.enterDetails();
		browser.driver.sleep(2000);
		homepage.createNewTemplate();
		browser.driver.sleep(2000);
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clickOnComments();
		//browser.driver.sleep(2000);
		//templatepage.selectComments("Show");
		templatepage.clicksaveandCont();
		templatepage.verifypopup();
		templatepage.clickOnCreateStoryFromTemplate();		 
		templatepage.verifyStoryCreationPagePresent();
		templatepage.clickShowAdvancedSettings();
	});
it('On saving the story and opening it on  front end comment section should be present in the story',function() {
		browser.driver.sleep(4000);
		templatepage.enterStoryHeadline();
		browser.driver.sleep(2000);
		templatepage.enterStorySlug(templatepage.getName(10)+"-2018");
		browser.driver.sleep(4000);
		templatepage.EnterSeoDescription();
		templatepage.SelectedPublished();
		
		templatepage.clicksaveandCont();	
		templatepage.ClickOnWebsite();		 
		//templatepage.clickOnArc();
		browser.refresh();
		browser.switchTo().alert().accept();
		  
	});
	
});
   
describe('Verify that user is able to comment on the story by selecting Hide option in Comment dropdown', function() {
    beforeEach(function(){
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    templatepage.verifySnapHomePage();
  //loginpage.enterSlackDetails();
  //loginpage.enterOrganizationDetails();
});

it('On Clicking Create Story From the Template user should be navigated to story creation page and Comment dropdown should be set to Show by default', function() {
    //base.navigateToURL(OR.url);
    //browser.driver.sleep(2000);
    //loginpage.enterDetails();
	//browser.driver.sleep(2000);
	homepage.createNewTemplate();
	browser.driver.sleep(2000);
	templatepage.enterHeadline();		 
	templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
	templatepage.clickOnComments();
	browser.driver.sleep(5000);
	templatepage.selectComments("Hide");
	templatepage.clicksaveandCont();
	templatepage.verifypopup();
	templatepage.clickOnCreateStoryFromTemplate();		 
	templatepage.verifyStoryCreationPagePresent();
	templatepage.clickShowAdvancedSettings();
	browser.driver.sleep(2000);
	templatepage.clickOnComments();
});
it('On saving the story and opening it on  front end comment section should be present in the story',function() {
	browser.driver.sleep(2000);
	templatepage.enterStoryHeadline();
	browser.driver.sleep(2000);
	templatepage.enterStorySlug(templatepage.getName(10)+"-2018");
	browser.driver.sleep(3000);
	templatepage.EnterSeoDescription();
	templatepage.SelectedPublished();
	templatepage.clicksaveandCont();	
	templatepage.ClickOnWebsite();		 
	//templatepage.clickOnArc();
	//browser.refresh();
	//browser.switchTo().alert().accept();
	  
});

});*/
   