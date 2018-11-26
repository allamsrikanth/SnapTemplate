/*
	
	
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
		
		};
		describe('Verify the pop up message when user enters the already taken slug',function(){
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
			it('Verify that user can see error messge please selecta unique slug', function() {
				templatepage.verifyHeadline();		 
				templatepage.alreadyTakenslug();
				templatepage.clicksaveandCont();
				templatepage.slugErrorPopup();
				
			
			};
			describe('Verify the functionality of Save & Continue button when slug field does not contain word template',function(){
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
				it('should  create a new template',function() {
					  browser.driver.sleep(10000);
					  homepage.createNewTemplate();
				});
				var templatepage = require('../pages/TemplatePage.js');
				it('should  enters the slug without template word', function() {
					templatepage.enterTemplateName();		 
					templatepage.slugwithoutTemplate();
					templatepage.clicksaveandCont();
					templatepage.errorTemplate();
					
				
				};
				describe('Verify that New Headline text is displayed on prview screen when user clears the HEADLINE field', function() {
					
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
					it('should  create a new template',function() {
						  browser.driver.sleep(10000);
						  homepage.createNewTemplate();
					});
						
					var templatepage = require('../pages/TemplatePage.js');
					it('Verify popup in template',function() {
						templatepage.enterTemplateName();		 
						templatepage.headlinePreview();
						
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
						it('enter the byline value',function() {
							templatepage.enterTemplateName();		 
							templatepage.enterSlugName();
							templatepage.clicksaveandCont();
							templatepage.verifypopup();
						});
						
					});*/
					

				
			