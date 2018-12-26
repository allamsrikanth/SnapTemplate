var OR = require('../json/OR_chicago.json');
var base = require('../pages/Basepage.js');
var loginpage = require('../pages/LoginPage.js');
var homepage = require('../pages/HomePage.js');
var templatepage = require('../pages/TemplatePage.js');

describe('Verify the functionality of STORY TYPE dropdown list ', function() {
	

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL(OR.url);
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	
	it('should click on  new template',function() {
		  homepage.createNewTemplate();
	});
	

	it('Verify the options story type in arc mode ', function() {
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clickOnStorytypeArc();
		templatepage.verifyStorytypeOptionsArc();
		browser.refresh();
		browser.switchTo().alert().accept();
		
	});

});

/*describe('Verify that user can update existing template with additional details or not', function() {
	
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		templatepage.verifySnapHomePage()
		//base.navigateToURL(OR.url);
		//loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	it('Verify that user is able to search an old template',function() {
		  browser.driver.sleep(4000);
		  homepage.verifyTemplateEditPage();
	});
	

	it('Verify that user is able to Update an old template', function() {		
		templatepage.updateDetails();
		templatepage.clickOnSection();
		templatepage.selectSection("/entertainment/tv");
		//templatepage.AddNewSection();
		templatepage.clicksaveandCont();
		//templatepage.verifySectionPreview();
		templatepage.headlinePreview();
		templatepage.verifySnapHomePage();
		templatepage.verifyUpdatedTemplate();
		//templatepage.clickOnExit();
	});
});*/
describe('Verify the behavior of Basic Build dropdown Show AD Rail dropdown and widgets for Right Rail story and Full Width story', function() {
		
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
			  browser.driver.sleep(3000);
			  homepage.createNewTemplate();
		});
		
	
		it('verify BasicBuild and ShowAD Rail options in Arc mode',function() {
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
		
		});
	});
describe('Verify that user is able to save the template without adding section', function() {
	

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
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	
	
	it('should save the template without adding section', function() {
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.verifySectionNotDisp();
		templatepage.clicksaveandCont();
		templatepage.verifypopup();	
	
	});

});

describe('Verify that added section is displayed on SNAP preview', function() {
	
	
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
	
	
	it('should save the template without adding section', function() {
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clickOnSection();
		templatepage.selectSection("/entertainment/tv");
		templatepage.clicksaveandCont();
		templatepage.verifySectionAdded();		 
	});

});

describe('Verify that user is not allowed to add same section multiple timess', function() {
	
	
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
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	

	it('should save the template without adding section', function() {
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clickOnSection();
		//templatepage.selectSection("/entertainment/tv");
		templatepage.selectSection("/sports/hockey/rangers");
		templatepage.selectSectionAgain();
		//templatepage.clickOnSectionAgainn();
		templatepage.verifySectionErrorpopup();	
		browser.refresh();
		browser.switchTo().alert().accept();
		});

});
describe('Verify that user is able to update the added section', function() {
	

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
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	

	it('should save the template without adding section', function() {
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clickOnSection();
		templatepage.selectSection("/entertainment/tv");
		templatepage.clicksaveandCont();
		templatepage.clearSectionField();
		//templatepage.selectSection21();
		templatepage.selectSection("/sports/hockey/rangers");
		templatepage.verifySectionAddedd();
		browser.refresh();
		browser.switchTo().alert().accept();
		
	});

    });
describe('Verify that deleting primary section, the top remaining section becomes the primary section', function() {
	
	    it('Launch and login  Tribune Application', function() {
		    browser.waitForAngularEnabled(false);
	 	   browser.ignoreSynchronization = true;
	 	templatepage.verifySnapHomePage();
	  	  //base.navigateToURL(OR.url);
		  //loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	it('should should search  template',function() {
		  browser.driver.sleep(6000);
		  homepage.searchTemplate();
	});
	
	it('should save the template without adding section', function() {
		templatepage.clickOnEditTemlate();		 
		templatepage.clickOnSection();
		templatepage.verifyPrimarySectionIsPresent();
		templatepage.deletePrimarySection();
		templatepage.verifyPrimarySectionIsPresentt();		 
		templatepage.clicksaveandCont();
		templatepage.verifypopup();		 
		templatepage.verifySectionAddedd();
		
	
	
	});

});
/*describe('Verify that user is able to add multiple sections to the template and make any section as a primary section', function() {
	

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
	

	it('should save the template without adding section', function() {
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clickOnSection18();
		templatepage.clickOnSectionAgain18();
		templatepage.clickOnSectionAgainand18();
		templatepage.clicksaveandCont();
		templatepage.verifySectionAdded21();		 
		//templatepage.clickOnOk();
		//not done
		
	
	
	});

});*/
describe('Verify that section field is blank when user opens the P2P mode template in ARC mode', function() {
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		templatepage.verifySnapHomePage();
		//base.navigateToURL(OR.url);
		//loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	it('should  search  template',function() {
		  browser.driver.sleep(6000);
		  homepage.searchTemplatee();
	});
	
	it('should save the template without adding section', function() {
		
		templatepage.clickOnEditTemlate();
		templatepage.clickOnSection();
        templatepage.verifySectionFieldIsEmpty();
        templatepage.clicksaveandCont();
		templatepage.verifypopup();
		templatepage.clickOnSection();
		templatepage.selectSection("/entertainment/tv");
		templatepage.clicksaveandCont();
		templatepage.verifypopup();
		templatepage.verifySectionFieldIsPresent();
	
	
	});

});
describe('Verify COMMENT dropdown options', function() {
	
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL(OR.url);
		templatepage.verifySnapHomePage();
		//loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	
	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	
	
	it('verify Show and Hide options in comments', function() {
		templatepage.clickOnComments();		 
		templatepage.verifyOptionsInComments();
		
	});

});
/*describe('Verify that user is able to comment on the story by selecting Show option in Comment dropdown', function() {
	

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
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	

	it('should save the template without adding section', function() {
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clickOnComments();
		templatepage.clicksaveandCont();
		templatepage.verifypopup();
		templatepage.clickOnCreateStoryFromTemplate();		 
		templatepage.verifyStoryCreationPagePresent();
		templatepage.clickShowAdvancedSettings();		 
		templatepage.enterStoryHeadline();
		templatepage.enterStorySlug();
		//templatepage.clickOnSection();
		//templatepage.selectSection("/entertainment/tv");
		templatepage.clickOnSection32();
		templatepage.addSection32();
		templatepage.clicksaveandCont();	
		templatepage.clickOnSaveWithoutDeadline();		 
		templatepage.clickOnArc();
		browser.refresh();
		browser.switchTo().alert().accept();
	
	
	
	});

});*/
describe('Verify the functionality of SAVE REMINDER dropdown list', function() {
	
	
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
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	
	
	it('verify  options in savereminder', function() {
		templatepage.clickOnSaveReminder();		 
		templatepage.verifyOptionsSaveReminder();
	
	});

});
describe('Verify that template history revisions show correct sections relevant to the given revision', function() {
	

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
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	

	it('should enter all mandatory fields and verify correct is section added or not', function() {
		templatepage.enterHeadline();		 
		templatepage.enterSlugName(templatepage.getName(10)+"template-2018");
		templatepage.clicksaveandCont();
		templatepage.clickOnSection();
		templatepage.selectSection("/entertainment/tv");
		templatepage.clicksaveandCont();
        templatepage.clickOnSectionAgainn();		 
		templatepage.clicksaveandCont();
		templatepage.clickOnViewRevisions();
		templatepage.clickOnView();
		templatepage.verifySectionFieldd();
		});

});


		