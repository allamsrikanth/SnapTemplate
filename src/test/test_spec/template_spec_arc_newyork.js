var base = require('../pages/Basepage.js');
var loginpage = require('../pages/LoginPage.js');
var homepage = require('../pages/HomePage.js');
var templatepage = require('../pages/TemplatePage.js');

/*describe('Verify the functionality of STORY TYPE dropdown list ', function() {
	

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	
	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	

	it('Verify the options in story type ', function() {
		templatepage.clickOnStorytypeArc();		 
		templatepage.verifyStorytypeOptionsArc();
		//templatepage.clicksaveandCont();
		//templatepage.verifyErrorPopup();		 
		//templatepage.clickOnOk();
		
		
	
	
	});

});

	
	
	describe('Verify that following fields are autoselected',function(){
		
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
			loginpage.enterDetails();
			//loginpage.enterSlackDetails();
			//loginpage.enterOrganizationDetails();
		});
		
		it('should  enters the slug without template word',function() {
			  browser.driver.sleep(10000);
			  homepage.createNewTemplate();
		});
	
		it('Verify that user is able see autofiled fields', function() {
			templatepage.verifyHeadline();		 
			templatepage.verifySlug();
			templatepage.verifyStory();
			templatepage.verifyBasicbuild();
			templatepage.verifycomments();
		
		});
		
		describe('Verify the behavior of Basic Build dropdown Show AD Rail dropdown and widgets for Simple story and HTML story ARC mode ', function() {
		
		it('Launch and login  Tribune Application', function() {
			browser.waitForAngularEnabled(false);
			browser.ignoreSynchronization = true;
			base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
			loginpage.enterDetails();
			//loginpage.enterSlackDetails();
			//loginpage.enterOrganizationDetails();
		});
		
	
		it('should click on new template',function() {
			  browser.driver.sleep(10000);
			  homepage.createNewTemplate();
		});
		
	
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
	

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	
	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	
	
	it('should save the template without adding section', function() {
		templatepage.enterHeadline16();		 
		templatepage.enterSlugName16();
		templatepage.clicksaveandCont();
		templatepage.verifypopup();		 
		//templatepage.clickOnOk();
		<div class="alert pop bullseye error" style="cursor: pointer; display: none;"><div id="alert-body">Cannot assign a story to the same section multiple times</div><button class="close"><i class="fa fa-times"></i></button></div>
		//div[text()='Cannot assign a story to the same section multiple times']
	
	});

});

describe('Verify that added section is displayed on SNAP preview', function() {
	
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	
	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	
	
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
	
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	

	it('should save the template without adding section', function() {
		templatepage.enterHeadline17();		 
		templatepage.enterSlugName17();
		templatepage.clickOnSection17();
		templatepage.clickOnSectionAgain17();
		
		templatepage.verifySectionErrorpopup();		 
		//templatepage.clickOnOk();
		
		
	
	
	});

});
describe('Verify that user is able to update the added section', function() {
	

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	

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
describe('Verify that deleting primary section, the top remaining section becomes the primary section', function() {
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	it('should should search  template',function() {
		  browser.driver.sleep(6000);
		  homepage.searchTemplate();
	});
	
	it('should save the template without adding section', function() {
		templatepage.clickOnEditTemlate();		 
		templatepage.clickOnSection23();
		templatepage.verifyPrimarySectionIsPresent();
		templatepage.deletePrimarySection();
		templatepage.verifyPrimarySectionIsPresent23();		 
		templatepage.clicksaveandCont();
		templatepage.verifypopup();		 
		templatepage.verifySectionAdded();
		
	
	
	});

});
describe('Verify that user is able to add multiple sections to the template and make any section as a primary section', function() {
	

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	

	it('should save the template without adding section', function() {
		templatepage.enterHeadline18();		 
		templatepage.enterSlugName18();
		templatepage.clickOnSection18();
		templatepage.clickOnSectionAgain18();
		templatepage.clickOnSectionAgainand18();
		templatepage.clicksaveandCont();
		templatepage.verifySectionAdded21();		 
		//templatepage.clickOnOk();
		
		
	
	
	});

});
describe('Verify that section field is blank when user opens the P2P mode template in ARC mode', function() {
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	
	it('should  search  template',function() {
		  browser.driver.sleep(6000);
		  homepage.searchTemplate25();
	});
	
	it('should save the template without adding section', function() {
		
		templatepage.clickOnEditTemplate25();
		templatepage.clickOnSection25();
		templatepage.verifySectionField25();
		//templatepage.deletePrimarySection();
				 
		templatepage.clicksaveandCont25();
		templatepage.verifypopup();
		templatepage.verifySectionFieldIsEmpty25();
		                  
		templatepage.addSection25();
		templatepage.clicksaveandCont25();
		templatepage.verifypopup();
		templatepage.verifySectionFieldIsPresent25();
	
	
	});

});
describe('Verify COMMENT dropdown options', function() {
	
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
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
		//templatepage.clickOnSection17();
		//templatepage.clicksaveandCont();
		//templatepage.verifySectionAdded();		 
		//templatepage.clickOnOk();
		
		
	
	
	});

});
describe('Verify that user is able to comment on the story by selecting Show option in Comment dropdown', function() {
	

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	

	it('should save the template without adding section', function() {
		templatepage.enterHeadline32();		 
		templatepage.enterSlugName32();
		templatepage.clickOnComments();
		//templatepage.clickOnSectionAgain18();
		templatepage.clicksaveandCont();
		templatepage.verifypopup();
		templatepage.clickOnCreateStoryFromTemplate();		 
		templatepage.verifyStoryCreationPagePresent();
		templatepage.clickShowAdvancedSettings();		 
		templatepage.enterStoryHeadline32();
		templatepage.enterStorySlug32();		 
		templatepage.clickOnSection32();
		templatepage.addSection32();
		templatepage.clicksaveandCont();	
		templatepage.clickOnSaveWithoutDeadline32();		 
		templatepage.clickOnArc32();
	
	
	
	});

});
describe('Verify the functionality of SAVE REMINDER dropdown list', function() {
	
	
	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
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

});*/
describe('Verify that template history revisions show correct sections relevant to the given revision', function() {
	

	it('Launch and login  Tribune Application', function() {
		browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
		base.navigateToURL('https://snap-nydailynews-qa.tribdev.com/');
		loginpage.enterDetails();
		//loginpage.enterSlackDetails();
		//loginpage.enterOrganizationDetails();
	});
	

	it('should click on  new template',function() {
		  browser.driver.sleep(6000);
		  homepage.createNewTemplate();
	});
	

	it('should enter all mandatory fields and verify correct is section added or not', function() {
		templatepage.enterHeadline32();		 
		templatepage.enterSlugName26();
		templatepage.clicksaveandCont();
		templatepage.addSection25();
		templatepage.clicksaveandCont();
		templatepage.clickOnSectionAgain17();		 
		templatepage.clicksaveandCont();
		templatepage.clickOnViewRevisions26();
		templatepage.clickOnView26();
		templatepage.verifySectionField26();
	
	
	
	});

});


		