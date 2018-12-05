var OR = require('../json/OR_new_york.json');
var baseObject = require('../pages/BasePage.js');

var TemplatePage=function () {
	
	this.snapHomePage = function(){
		element(by.xpath("//i[@id='home']")).isDisplayed().toBe(true);
		//browser.driver.sleep(4000);
		return this;
	};
	
	this.enterHeadline = function(){
		browser.driver.sleep(10000);		
		element(by.xpath(OR.locators.TemplatePage.headline)).clear();
		element(by.xpath(OR.locators.TemplatePage.headline)).sendKeys("snap-Templatetest-auto-admin-ct-xebia");
		browser.driver.sleep(6000);
		return this;
	};
	this.enterHeadline200 = function(){
		browser.driver.sleep(6000);
		element(by.xpath("//input[@name='headline']")).clear();
		 element(by.xpath("//input[@name='headline']")).sendKeys("snap automationo snap automation snap automation snap autoaamation snap automaaaaassaaaaaaaasaaaaaatissaaossaan aassaaaaautomation snap automation snap auotomation automation snapsnapp automation snap au");
	
		return this;	
	};
	this.enterStoryHeadline32 = function(){
		browser.driver.sleep(6000);
		element(by.xpath("//input[@name='headline']")).clear();
		 element(by.xpath("//input[@name='headline']")).sendKeys("Show comment story");
	
		return this;	
	};
	this.enterStorySlug32 = function(){
		browser.driver.sleep(6000);
		 element(by.xpath("//input[@name='slug']")).clear();
		  element(by.xpath("//input[@name='slug']")).sendKeys("show-commentt-story-20180622");
		return this;	
	};
	this.enterHeadline16 = function(){
		browser.driver.sleep(6000);
		element(by.xpath("//input[@name='headline']")).clear();
		 element(by.xpath("//input[@name='headline']")).sendKeys("ny-template-without-section-20180606");
	
		return this;	
	};
	this.enterHeadline17 = function(){
		browser.driver.sleep(6000);
		element(by.xpath("//input[@name='headline']")).clear();
		 element(by.xpath("//input[@name='headline']")).sendKeys("ny-template-without-section-20180606");
	
		return this;	
	};
	this.enterHeadline18= function(){
		browser.driver.sleep(6000);
		element(by.xpath("//input[@name='headline']")).clear();
		 element(by.xpath("//input[@name='headline']")).sendKeys("ny-template-withdoout-section-20180606");
	
		return this;	
	};
	this.enterHeadline32= function(){
		browser.driver.sleep(6000);
		element(by.xpath("//input[@name='headline']")).clear();
		 element(by.xpath("//input[@name='headline']")).sendKeys("Test tronc template");
	
		return this;	
	};
	this.clearHeadline = function(){
		browser.driver.sleep(6000);
		element(by.xpath("//input[@name='headline']")).clear();
		
		return this;	
	};
	this.clearSlug = function(){
		 element(by.xpath((OR.locators.TemplatePage.clear_slug)).clear();
		 //element(by.xpath(OR.locators.TemplatePage.headline)).clear();
		  return this;
	};
	this.verifyErrorPopup= function(){
		expect(element(by.xpath(OR.locators.TemplatePage.headline_error)).isDisplayed()).toBe(true);
		browser.driver.sleep(3000);
	    //expect(element(by.xpath("//p[contains(text(),'Please enter a Slug')]")).isDisplayed()).toBe(true);
	    expect(element(by.xpath(OR.locators.TemplatePage.ok_ispresent)).isDisplayed()).toBe(true);
		 
    return this;
		  
	};
	this.clickOnOk = function(){
		element(by.xpath(OR.locators.TemplatePage.clickon_ok)).click();
		browser.driver.sleep(3000);
		expect(element(by.xpath(OR.locators.TemplatePage.story_notcreate)).isPresent()).toBeFalsy();
		expect(element(by.xpath(OR.locators.TemplatePage.please_enterheadline)).isPresent()).toBeFalsy();
	   // expect(element(by.xpath("//p[contains(text(),'Please enter a Slug')]")).isDisplayed()).toBe(false);
		expect(element(by.xpath(OR.locators.TemplatePage.template_editpage)).isDisplayed()).toBe(true);
		  return this;
	};
	this.verifyHeadlinePopup = function(){
		 //browser.driver.sleep(1000);
		 var disp= element(by.xpath(by.xpath(OR.locators.TemplatePage.verify_headline200popup)).isDisplayed()
		 expect(disp).toBe(true);
		return this;
	};
	
	this.getName = function(characterLength){
		var randomText = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	    for (var i = 0; i < characterLength; i++)
	        randomText += possible.charAt(Math.floor(Math.random() * possible.length));
	    return randomText;
	};
	this.enterSlugName = function(slugName){
		  element(by.xpath(OR.locators.TemplatePage.slugname)).clear();
		  element(by.xpath(OR.locators.TemplatePage.slugname)).sendKeys(slugName);
		  browser.driver.sleep(6000);
		  return this;
	};
	this.enterSlugName1 = function(){
		  element(by.xpath("//input[@name='slug']")).clear();
		  element(by.xpath("//input[@name='slug']")).sendKeys("ny-snap-test-auto-admin-xeb-20181127");
		  browser.driver.sleep(6000);
		  return this;
	};
	this.enterSlugName16 = function(){
		  element(by.xpath("//input[@name='slug']")).clear();
		  element(by.xpath("//input[@name='slug']")).sendKeys("ny-snap-teeste-auto1o-admin-xebbiii-template-2018");
		  browser.driver.sleep(6000);
		  return this;
	};
	this.enterSlugName18 = function(){
		  element(by.xpath("//input[@name='slug']")).clear();
		  element(by.xpath("//input[@name='slug']")).sendKeys("ny-snap-teestexw-auuto1o-admin-xebbiioi-template-2018");
		  browser.driver.sleep(6000);
		  return this;
	};
	this.enterSlugName32 = function(){
		  element(by.xpath("//input[@name='slug']")).clear();
		  element(by.xpath("//input[@name='slug']")).sendKeys("ny-testttbt-troncccdc-template-20180622");
		  browser.driver.sleep(6000);
		  return this;
	};
	this.enterSlugName26 = function(){
		  element(by.xpath("//input[@name='slug']")).clear();
		  element(by.xpath("//input[@name='slug']")).sendKeys("ny-testttbt-tronccacdc-template-20180622");
		  browser.driver.sleep(6000);
		  return this;
	};
	this.enterSlugName17 = function(){
		
		  element(by.xpath("//input[@name='slug']")).clear();
		  element(by.xpath("//input[@name='slug']")).sendKeys("ny-snap-tilrhgcliasdedfghhjcksaveandConttee-auuto1oo-aaadmin-xeeebbbiii-template"+this._counter+"-2018");
		  browser.driver.sleep(6000);""
		  return this;
	};
	this.verifySectionErrorpopup = function(){
		browser.driver.sleep(1000);
		expect(element(by.id(OR.locators.TemplatePage.verify_sectionerror)).isDisplayed()).toBe(true);
		//expect(element(by.xpath("//div[@id='react-modal-message']")).isDisplayed()).toBe(true);
		//expect(element(by.xpath("//div[text()='Cannot assign a story to the same section multiple times']")).isDisplayed()).toBe(true);
		return this;
	};
	
	this.getSlugName = function(){
		return element(by.xpath(OR.locators.TemplatePage.get_slugtext)).getText();
	}
	this.clickOnStorytype = function(){
		 element.all(by.xpath(OR.locators.TemplatePage.click_storytypep2p)).click();
	}
	this.clickOnStorytypeArc = function(){
		 element.all(by.xpath(OR.locators.TemplatePage.click_storytypearc)).click();
	}
	this.verifyStorytypeOptions = function(){
		 expect(element(by.id(OR.locators.TemplatePage.vrify_storyoptionsp2p)).all(by.tagName('option')).getText()).toEqual(['Simple Story','HTMLStory','Big Story']);
	}
	this.verifyStorytypeOptionsArc = function(){
		 expect(element(by.id(OR.locators.TemplatePage.verify_storyoptionsArc)).all(by.tagName('option')).getText()).toEqual(['Right Rail','Full Width']);
		 
	}
	
	
	this.getHeadline = function(){
		return element(by.xpath(OR.locators.TemplatePage.get_headlinetext)).getText();
	}
	
	this.clicksaveandCont = function(){
		element(by.xpath(OR.locators.TemplatePage.click_saveandcont)).click();
		browser.driver.sleep(8000);
		return this;
	};
	this.clicksaveandCont25 = function(){
		element(by.xpath("//button[@id='save']")).click();
		//browser.driver.sleep(10000);
		return this;
	};
	this.clickShowAdvancedSettings = function(){
		element(by.xpath(OR.locators.TemplatePage.click_showadvancedsettings)).click();
		//browser.driver.sleep(10000);
		return this;
	};
	this.clickOnCreateStoryFromTemplate = function(){
		browser.driver.sleep(5000);
		element(by.xpath(OR.locators.TemplatePage.click_createstoryfromtemplate)).click();
		//browser.driver.sleep(10000);
		return this;
	};
	this.verifyStoryCreationPagePresent = function(){
		expect(element(by.xpath(OR.locators.TemplatePage.verify_storycreationpagepresent)).isDisplayed()).toBe(true);
		//browser.driver.sleep(10000);
		return this;
	};
	
	
	this.verifypopup = function(){
		//browser.driver.sleep(1000);
		expect(element(by.xpath("//p[text()='Your story has been successfully saved!']")).isDisplayed()).toBe(true);
		//expect(element(by.xpath("//div[@id='react-modal-message']")).isDisplayed()).toBe(true);
		return this;
	};
	
	this.verifyslugpupup = function(){
		browser.driver.sleep(2000);
		var alert = element(by.xpath(OR.locators.TemplatePage.verify_slugpopuperror)).isDisplayed()
		expect(alert).toBe(true);
		//expect(element(by.xpath("//p[text()='Template slug must include the word \"template\"']")).isDisplayed()).toBe(true);
		element(by.xpath("//button/span[text()='OK']")).click();
		return this;
	};
	
	this.enterSlug = function(){
		element(by.xpath("//input[@name='slug']")).clear();
		element(by.xpath("//input[@name='slug']")).sendKeys("ny-snap-test-auto-admin-ct-xebia-template");
		browser.driver.sleep(10000);
		return this;
	};
	
    this.enterMandatoryFields = function(){
	element.all(by.xpath('option[.="Full Width"]')).click();
	element.all(by.xpath('option[.="SendtoNews"]')).click();

	return this;
	};
    this.headlinePreview = function(){
	 browser.driver.sleep(10000);
	 var disp= element(by.xpath(OR.locators.TemplatePage.verify_headlinepreview)).isDisplayed()
	expect( disp).toBe(true);
	return this;
	};
    this.enterTemplateName123=function(){
	element(by.id("dashboard-search-input")).sendKeys("New Template2");
	element(by.xpath("//button[contains(text(),'Search')]")).click();
	return this;
    };
    this.editTemplate=function(){
	
	element(by.xpath(OR.locators.TemplatePage.click_edittepmlate)).click();
	element(by.xpath("//input[@name='headline']")).clear();
	element(by.xpath("//input[@name='headline']")).sendKeys("New Template123");
	return this;
    };
    this.updateDetails=function(){
	
	element(by.xpath("//input[@name='headline']")).clear();
	element(by.xpath("//input[@name='headline']")).sendKeys("New Template123");
	return this;
    };
    this.clickOnSection=function()	{	
	element(by.xpath(OR.locators.TemplatePage.click_section)).click();
	element(by.xpath(OR.locators.TemplatePage.click_addnewsection)).click();
	element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).click();
	let eles = element.all(by.xpath("//div/input[@placeholder='Type to search Arc sections...']/../div/div"))
	expect(eles.count()).toBeGreaterThan(0);
	  browser.driver.sleep(10000);
	 element(by.xpath("//div[@name='/new-york/brooklyn'")).click();
	element(by.xpath("//div[text()='/entertainment/tv']")).click();
	var isdsp = element(by.xpath("//span[contains(text(),'entertainment/tv')]")).isDisplayed();
	expect(isdsp).toBe(true);
	element(by.id("home")).click();
	return this;
	};
	this.clickOnSection17=function(){	
	element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
	element(by.xpath("//button/span[text()='Add new section']")).click();
	element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).click();
	let eles = element.all(by.xpath("//div/input[@placeholder='Type to search Arc sections...']/../div/div"))
	expect(eles.count()).toBeGreaterThan(0); 
	browser.driver.sleep(10000);
	//element(by.xpath("//div[@name='/new-york/brooklyn'")).click();
	element(by.xpath("//div[text()='/entertainment/tv']")).click();
	browser.driver.sleep(10000);
	//var isdsp = element(by.xpath("//span[contains(text(),'entertainment/tv')]")).isDisplayed();
	//expect(isdsp).toBe(true);
	//element(by.id("home")).click();
	return this;
	};
		this.clickOnSection18=function(){	
			element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
			element(by.xpath("//button/span[text()='Add new section']")).click();
			element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).click();
			let eles = element.all(by.xpath("//div/input[@placeholder='Type to search Arc sections...']/../div/div"))
			expect(eles.count()).toBeGreaterThan(0);
			  browser.driver.sleep(10000);
			  //element(by.xpath("//div[@name='/new-york/brooklyn'")).click();
			element(by.xpath("//div[text()='/entertainment/tv']")).click();
			  browser.driver.sleep(6000);
			//var isdsp = element(by.xpath("//span[contains(text(),'entertainment/tv')]")).isDisplayed();
			//expect(isdsp).toBe(true);
			//element(by.id("home")).click();
			return this;
		};
		this.addSection25=function()	{	
		element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
				element(by.xpath("//button/span[text()='Add new section']")).click();
				element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).click();
				let eles = element.all(by.xpath("//div/input[@placeholder='Type to search Arc sections...']/../div/div"))
				expect(eles.count()).toBeGreaterThan(0);
				  browser.driver.sleep(10000);
				  //element(by.xpath("//div[@name='/new-york/brooklyn'")).click();
				element(by.xpath("//div[text()='/entertainment/tv']")).click();
				  browser.driver.sleep(6000);
				//var isdsp = element(by.xpath("//span[contains(text(),'entertainment/tv')]")).isDisplayed();
				//expect(isdsp).toBe(true);
				//element(by.id("home")).click();
				return this;
		};
		this.addSection32=function()	{	
			//element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
					//element(by.xpath("//button/span[text()='Add new section']")).click();
					element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).click();
					let eles = element.all(by.xpath("//div/input[@placeholder='Type to search Arc sections...']/../div/div"))
					expect(eles.count()).toBeGreaterThan(0);
					  browser.driver.sleep(10000);
					
					element(by.xpath("//div[text()='/entertainment/tv']")).click();
					  browser.driver.sleep(6000);
					
					return this;
			};
			this.clickOnSection25=function()	{	
				element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
				element(by.xpath("//button/span[text()='Add new section']")).click();
				browser.driver.sleep(6000);
				
				return this;
				};
	this.clickOnSection32=function()	{	
		element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
		element(by.xpath("//button/span[text()='Add new section']")).click();
		browser.driver.sleep(6000);			
		return this;
	};
	this.clickOnSaveWithoutDeadline32=function()	{	
		element(by.xpath(OR.locators.TemplatePage.click_savewithoutdeadline)).click();
		browser.driver.sleep(6000);			
		return this;
	};
	this.clickOnArc32=function()	{	
		element(by.xpath(OR.locators.TemplatePage.click_Arc)).click();
		browser.driver.sleep(6000);			
		return this;
	};	
		
	this.clickOnSectionAgain17=function()	{	
			element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
			element(by.xpath("//button/span[text()='Add new section']")).click();
			 browser.driver.sleep(5000);
			
			element(by.xpath("(//input[@placeholder='Type to search Arc sections...'])[2]")).click();
			  browser.driver.sleep(10000);
			let eles = element.all(by.xpath("//div/input[@placeholder='Type to search Arc sections...']/../div/div"))
			expect(eles.count()).toBeGreaterThan(0);
			  browser.driver.sleep(6000);
			  element(by.xpath("//div[text()='/sports/hockey/rangers']")).click();
			  //element(by.xpath("//div[@name='/new-york/brooklyn'")).click();
			 // eles.get(2).click();
			//element(by.xpath("//div[text()='/entertainment/tv']")).click();
			 // browser.driver.sleep(10000);
			//var isdsp = element(by.xpath("//span[contains(text(),'entertainment/tv')]")).isDisplayed();
			//expect(isdsp).toBe(true);
			//element(by.id("home")).click();
			return this;
		};
		this.clickOnSectionAgain18=function()	{	
			//element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
			element(by.xpath("//button/span[text()='Add new section']")).click();
			element(by.xpath("(//input[@placeholder='Type to search Arc sections...'])[2]")).click();
			let eles = element.all(by.xpath("//div/input[@placeholder='Type to search Arc sections...']/../div/div"))
			expect(eles.count()).toBeGreaterThan(0);
			  browser.driver.sleep(10000);
			  //element(by.xpath("//div[@name='/new-york/brooklyn'")).click();
			element(by.xpath("//div[text()='/new-york/brooklyn']")).click();
			  browser.driver.sleep(6000);
			//element(by.xpath("//button/span[text()='Add new section']")).click();
			 //browser.driver.sleep(6000);
			
			//element(by.xpath("(//input[@placeholder='Type to search Arc sections...'])[2]")).click();
			  //browser.driver.sleep(10000);
			//let eles = element.all(by.xpath("//div/input[@placeholder='Type to search Arc sections...']/../div/div"))
			//expect(eles.count()).toBeGreaterThan(0);
			 //browser.driver.sleep(5000);
			  //element(by.xpath("//input[@value='/new-york/brooklyn']")).click();
			 // element(by.xpath("//div[@name='/new-york/brooklyn')).click();
			  //eles.get(2).click();
			//element(by.xpath("//div[text()='/entertainment/tv']")).click();
			 // browser.driver.sleep(10000);
			//var isdsp = element(by.xpath("//span[contains(text(),'entertainment/tv')]")).isDisplayed();
			//expect(isdsp).toBe(true);
			//element(by.id("home")).click();
			return this;
		};
		this.clickOnSectionAgainand18=function()	{	
			//element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
			element(by.xpath("//button/span[text()='Add new section']")).click();
			 browser.driver.sleep(10000);
			
			element(by.xpath("(//input[@placeholder='Type to search Arc sections...'])[3]")).click();
			  browser.driver.sleep(10000);
			let eles = element.all(by.xpath("//div/input[@placeholder='Type to search Arc sections...']/../div/div"))
			expect(eles.count()).toBeGreaterThan(0);
			  browser.driver.sleep(10000);
			  //element(by.xpath("//div[@name='/new-york/brooklyn'")).click();
			  eles.get(3).click();
			//element(by.xpath("//div[text()='/entertainment/tv']")).click();
			 // browser.driver.sleep(10000);
			//var isdsp = element(by.xpath("//span[contains(text(),'entertainment/tv')]")).isDisplayed();
			//expect(isdsp).toBe(true);
			//element(by.id("home")).click();
			return this;
		};
	
			this.clickOnSectionAgain21=function()	{	
				element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
				//element(by.xpath("//button/span[text()='Add new section']")).click();
				 browser.driver.sleep(10000);
				
				element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).click();
				element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).clear();
				  browser.driver.sleep(10000);
				//let eles = element.all(by.xpath("//div/input[@placeholder='Type to search Arc sections...']/../div/div"))
				//expect(eles.count()).toBeGreaterThan(0);
				  //browser.driver.sleep(10000);
				  //element(by.xpath("//div[@name='/new-york/brooklyn'")).click();
				  element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).click();
					 browser.driver.sleep(10000);
				element(by.xpath("//div[text()='/new-york/brooklyn']")).click();
				  browser.driver.sleep(10000);
				//var isdsp = element(by.xpath("//span[contains(text(),'')]")).isDisplayed();
				//expect(isdsp).toBe(true);
				//element(by.id("home")).click();
				return this;
				};		
this.verifySnapHomePage = function(){
	 browser.driver.sleep(10000);
		var home = element(by.xpath(OR.locators.TemplatePage.verify_snaphomepage)).isDisplayed();
		expect(home).toBe(true);
		return this;

	};
this.verifySectionAdded = function(){
		
	var isdsp = element(by.xpath(OR.locators.TemplatePage.verify_sectionisadded)).isDisplayed();
	expect(isdsp).toBe(true);
	 browser.driver.sleep(10000);
		return this;

	};
	this.clickOnComments = function(){
		
	 element(by.xpath(OR.locators.TemplatePage.click_comments)).click();
	 browser.driver.sleep(10000);
			return this;

	};
	this.clickOnViewRevisions26 = function(){
		
		 element(by.xpath(OR.locators.TemplatePage.click_viewrevisions)).click();
		 browser.driver.sleep(10000);
				return this;

	};
	this.clickOnView26 = function(){
		
		 element(by.xpath(OR.locators.TemplatePage.click_view)).click();
		 browser.driver.sleep(10000);
				return this;

		};
		
	this.clickOnSaveReminder = function(){
		
		 element(by.xpath(OR.locators.TemplatePage.click_savereminder)).click();
		 browser.driver.sleep(10000);
				return this;

			};
		
		
	this.verifyOptionsInComments = function(){			
 	    var strValues = element(by.xpath(OR.locators.TemplatePage.verify_optionsincomments)).all(by.tagName("option")).getAttribute("value");
		expect(strValues).toEqual(['show','hide'])
		return this;
	};
	this.verifyOptionsSaveReminder = function(){			
 	    var strValues = element(by.xpath(OR.locators.TemplatePage.verify_optionsinsavereminder)).all(by.tagName("option")).getAttribute("value");
		expect(strValues).toEqual(['5','15','30','60','off'])
		 //expect(element(by.id('save_reminder')).all(by.tagName('option')).getText()).toEqual(['5 minutes','15 minutes','30 minutes','60 minutes','No reminder']);
		return this;
	};
	this.verifySectionField25 = function(){
		expect(element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).getAttribute("value")).toEqual("");
		///element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).getText().toEqual('');
		//var isdsp = element(by.xpath("//span[contains(text(),'sports/hockey/rangers')]")).isDisplayed();
		//expect(isdsp).toBe(true);
		 browser.driver.sleep(10000);
			return this;

		};
		this.verifySectionFieldIsEmpty25 = function(){
			expect(element(by.xpath(OR.locators.TemplatePage.verify_sectionfieldisempty)).getAttribute("value")).toEqual("");
			//expect(element(by.xpath("//div[text()='/entertainment/tv']")).isDisplayed()).toBe(false);
			//var isdsp = element(by.xpath("//span[contains(text(),'sports/hockey/rangers')]")).isDisplayed();
			//expect(isdsp).toBe(true);
			 browser.driver.sleep(10000);
				return this;

		};
		this.verifySectionFieldIsEmpty = function(){
			expect(element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).getAttribute("value")).toEqual("");
			 browser.driver.sleep(10000);
				return this;

		};
		this.verifySectionFieldIsPresent25 = function(){
				expect(element(by.xpath(OR.locators.TemplatePage.verify_sectionispresent)).getAttribute("value")).toEqual("/entertainment/tv");
				//expect(element(by.xpath("//div[text()='/entertainment/tv']")).isDisplayed()).toBe(true);
				//var isdsp = element(by.xpath("//span[contains(text(),'/entertainment/tv')]")).isDisplayed();
				//expect(isdsp).toBe(true);
				 browser.driver.sleep(10000);
					return this;
         };
         this.verifySectionField26 = function(){
       	 element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
        	browser.driver.sleep(6000);
 		 expect(element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).getAttribute("value")).toEqual("/entertainment/tv");
 		browser.driver.sleep(10000);
				//expect(element(by.xpath("//div[text()='/entertainment/tv']")).isDisplayed()).toBe(true);
				//var isdsp = element(by.xpath("//span[contains(text(),'/entertainment/tv')]")).isDisplayed();
				//expect(isdsp).toBe(true);
				// browser.driver.sleep(10000);
		return this;
      };
		
	
	this.verifySectionAdded21 = function(){
		
		var isdsp = element(by.xpath("//span[contains(text(),'new-york/brooklyn')]")).isDisplayed();
		expect(isdsp).toBe(true);
		 browser.driver.sleep(10000);
			return this;

		};
	this.verifyUpdatedTemplate=function(){
		element(by.id(OR.locators.TemplatePage.search_updatedtemplate)).sendKeys("New Template123");
		element(by.xpath(OR.locators.TemplatePage.click_search)).click();
		browser.driver.sleep(6000);
		var dsp = element(by.xpath("//div/h3[text()='New Template123']")).isDisplayed();
		expect(dsp).toBe(true);	
		return this;
		
	};
	this.verifyHeadline=function(){
		browser.driver.sleep(6000);
		//var ele = element(by.xpath("//input[@name='headline']")).getAttribute("value");
		//expect(ele).toEqual("snap-test-auto-admin-ct-xebia Joshi Template");
	    expect(element(by.xpath(OR.locators.TemplatePage.verify_defaultvalueheadline)).getAttribute('value')).toEqual('snap-test-auto-admin-ct-xebia Joshi Template');
	    //expect(element(by.xpath("//input[@name='headline']")).getText()).toEqual('snap-test-auto-admin-ct-xebia Joshi Template');
		return this;
		};
	this.verifySlug = function(){
			browser.driver.sleep(6000);
			//var slug = element(by.xpath("//input[@name='slug']")).getAttribute("value");
			//expect(slug).toEqual("ny-snap-test-auto-admin-ct-xebia-template-20181121");
			//element(by.xpath("//input[@name='slug']")).getText().toEqual('ny-snap-test-auto-admin-ct-xebia-template-20181128');
			expect(element(by.xpath(OR.locators.TemplatePage.verify_defaultslugvalue)).getAttribute('value')).toEqual('ny-snap-test-auto-admin-ct-xebia-template-20181130');	 
			 
			return this;
		
		};
	this.verifyStory=function(){
		browser.driver.sleep(4000);
		//var story = element.all(by.xpath("//option[.='Simple Story']")).getText();
		//expect(story).toEqual("Simple Story");
		expect(element(by.id(OR.locators.TemplatePage.verify_defaultstoryvalue)).$('option:checked').getText()).toEqual('Simple Story');
		return this;
		};
		this.verifyStoryArc=function(){
			browser.driver.sleep(4000);
			expect(element(by.id(OR.locators.TemplatePage.verify_defaultstoryvalueArc)).$('option:checked').getText()).toEqual('Right Rail');
			return this;
			};
		
	this.verifyBasicbuild=function(){	
		browser.driver.sleep(4000);
			//var basicb = element.all(by.xpath("//option[.='No section']")).getText();
			//expect(basicb).toEqual("No section");
		 expect(element(by.id(OR.locators.TemplatePage.verify_defaultbasicbuildvalue)).$('option:checked').getText()).toEqual('No section');
			return this;
		};
		this.verifyBasicbuildIsPresent=function(){	
			
			browser.driver.sleep(4000);
			expect(element(by.xpath(OR.locators.TemplatePage.verify_basicbuildispresent)).isDisplayed()).toBe(true);
			return this;
			};
     	this.clickOnBasicbuildIsVerifyOptions=function(){
     		browser.driver.sleep(4000);
     		//element.all(by.xpath("//option[.='No section']")).click();
     		element(by.xpath(OR.locators.TemplatePage.click_basicbuild)).click();
   		 browser.driver.sleep(6000);
   		 expect(element(by.id(OR.locators.TemplatePage.verify_basicbuildoptions)).all(by.tagName('option')).getText()).toEqual(['No section','Breaking Graphic','SendtoNews']);
   		return this;
				};
		 this.verifyShowADRailIsNotPresent=function(){	
			 browser.driver.sleep(4000);
			 expect(element(by.xpath(OR.locators.TemplatePage.verify_showADrail)).isDisplayed()).toBe(false);
			 //isPresent()).toBeFalsy();
			 return this;
		 };
		 this.verifytheWidgets1=function(){
			 expect(element(by.xpath(OR.locators.TemplatePage.verify_text)).isDisplayed()).toBe(true);
			 expect(element(by.xpath(OR.locators.TemplatePage.verify_quote)).isDisplayed()).toBe(true);
			 expect(element(by.xpath(OR.locators.TemplatePage.verify_image)).isDisplayed()).toBe(true);
			 expect(element(by.xpath(OR.locators.TemplatePage.verify_embeddedvideo)).isDisplayed()).toBe(true);
			 expect(element(by.xpath(OR.locators.TemplatePage.verify_roadblock)).isDisplayed()).toBe(true);
			 expect(element(by.xpath(OR.locators.TemplatePage.verify_html)).isDisplayed()).toBe(true);
			 expect(element(by.xpath(OR.locators.TemplatePage.verify_tweet)).isDisplayed()).toBe(true);
			 expect(element(by.xpath(OR.locators.TemplatePage.verify_P2Pembed)).isDisplayed()).toBe(true);
			 expect(element(by.xpath(OR.locators.TemplatePage.verify_infobox)).isDisplayed()).toBe(true);	 
			 
		 }
		 this.selectHtmlStory=function(){	
				
			 element.all(by.xpath(OR.locators.TemplatePage.click_htmlstory)).click();
			 return this;
		 };
		 this.selectFullWidth=function(){	
			 //element.all(by.xpath("//select[@id='meta-story-type']")).click();
			 browser.driver.sleep(4000);
			 element(by.xpath("//select[@id='meta-story-type']")).click();
			 browser.driver.sleep(4000);
			 element.all(by.css(OR.locators.TemplatePage.select_fullwidth)).click();
			 return this;
		 };
		 this.verifyShowADRailIsPresent=function(){	
				
			 expect(element(by.xpath(OR.locators.TemplatePage.verify_showADrail)).isDisplayed()).toBe(true);
			 expect(element(by.xpath(OR.locators.TemplatePage.verify_defaultaAdrailvalue)).$('option:checked').getText()).toEqual('Show');
			 return this;
		 };
		 this.verifyBasicbuildIsNotPresent=function(){	
				
				browser.driver.sleep(4000);
				expect(element(by.xpath("//div[@id='bake-embeds-box']")).isDisplayed()).toBe(false);;
				return this;
				};
		this.verifytheWidgets2=function(){	
			 expect(element(by.xpath("//li[@title='Text']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Quote']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Image']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Embedded Video']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Roadblock']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='HTML']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Tweet']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Instagram']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Facebook']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Infobox']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Break']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Adholder']")).isDisplayed()).toBe(true);
				browser.driver.sleep(4000);
				return this;
			 
		};
		this.verifytheWidgets3=function(){	
			 expect(element(by.xpath("//li[@title='Text']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Quote']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Image']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Embedded Video']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Roadblock']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='HTML']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Tweet']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Instagram']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Facebook']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='P2PEmbed']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Video']")).isDisplayed()).toBe(true);
			 browser.driver.sleep(6000);
			 return this;
		};
		this.verifytheWidgets4=function(){	
			 expect(element(by.xpath("//li[@title='Text']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Quote']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Image']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Embedded Video']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Roadblock']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='HTML']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Tweet']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Instagram']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Facebook']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Video']")).isDisplayed()).toBe(true);
			 browser.driver.sleep(6000);
			 return this;
		};
		
		
					
	this.verifycomments=function(){
		browser.driver.sleep(4000);
		
		expect(element(by.name(OR.locators.TemplatePage.verify_defaultcommentsvalue)).$('option:checked').getText()).toEqual('Show');
		return this;
			//var comm=element.all(by.xpath("//option[.='Show']")).getText();
			//expect(comm).toEqual("Show");
			return this;
		};
	this.saveReminder=function(){
		expect(element(by.name()).$(OR.locators.TemplatePage.verify_defaultsaveremindervalue).getText()).toEqual('15 minutes');
		return this;
		
		//var save=element.all(by.xpath("//option[.='15 minutes']")).getText();
			//expect(save).toEqual("15 minutes");
			return this;
		};

	this.alreadyTakenslug=function(){
			element(by.xpath("//input[@name='slug']")).clear();
			 element(by.xpath("//input[@name='slug']")).sendKeys("SlugTemplate09876543");
				return this;
		};
	this.slugErrorPopup=function(){
		var alert = element(by.xpath("//div[@class='alert pop bullseye warn']")).isDisplayed()
		expect(alert).toBe(true);
		return this;
		
      };
	this.slugwithoutTemplate=function(){
		 element(by.xpath("//input[@name='slug']")).clear();
		 element(by.xpath("//input[@name='slug']")).sendKeys("Slug09876543");
			return this;
	};
    this.errorTemplate=function(){
    	 var mesg = element(by.xpath("//div[@id='react-modal-message']")).isDisplayed()
		 expect(mesg).toBe(true);
    		return this;
    };
    this.headlinePreview=function(){
    	var disp= element(by.xpath("//h1[@id='headline']")).isDisplayed()
		expect( disp).toBe(true);
    	return this;
    	
    };
    this.alredyTakenPopup=function(){
    	 browser.driver.sleep(6000);
 		var alert = element(by.xpath("//div[@class='alert pop bullseye warn']")).isDisplayed()
 		expect(alert).toBe(true);
 		 browser.driver.sleep(6000);
    	return this;
    	
    };
    this.clickonByline=function(){
    element(by.xpath("(//input[@class='tag-search ui-autocomplete-input'])[1]")).clear();
    element(by.xpath("(//input[@class='tag-search ui-autocomplete-input'])[1]")).sendKeys("jim");
	return this;
    	
    };
    this.clickonByline1=function(){
        element(by.xpath("(//input[@class='tag-search ui-autocomplete-input'])[1]")).sendKeys("jim");
    	return this;
        	
        };
    this.selectBylinefromAutopopulated=function(){
    	 browser.driver.sleep(6000);
    	 var eles = element.all(by.xpath("//li[@class='ui-menu-item']"));
		 expect(eles.get(0).getText()).toEqual("Jim Carrey");
		 expect(eles.get(1).getText()).toEqual("Jim Rich");	 
		 eles.get(0).click();
			return this;
    };
    this.selectBylinefromAutopopulated1=function(){
    	 browser.driver.sleep(6000);
    	 element.all(by.xpath("//li[@class='ui-menu-item']")).get(1).click();
			return this;
   };
   this.selectBylinefromAutopopulated2=function(){
	   browser.driver.sleep(6000);
	   element.all(by.xpath("//li[@class='ui-menu-item']")).get(3).click();
			return this;
 };
    this.verifyBylinePresentWithinBox=function(){
    	 var disp= element(by.xpath("(//ul[@class='tag-list collection-list selectable'])[1]")).isDisplayed();
		 expect(disp).toBe(true);
			return this;
    };
    this.verifyBylinePreview=function(){
    	browser.driver.sleep(5000);
    	var show = element(by.xpath("//a/span[text()='JIM CARREY']")).isDisplayed()
		 expect(show).toBe(true);
    	return this;
    };
    this.verifyBylinePreview1=function(){
    	browser.driver.sleep(5000);
    	expect(element(by.xpath("//span[contains(text(),'By')]")).isDisplayed()).toBe(true);
    	return this;
    };
    this.clickOnCrossSign=function(){
    	
    	element(by.xpath("//i[@class='fa fa-times remove']")).click();
    	return this;
    };
 this.clickOnEditTemplate25=function(){
    	
    	element(by.xpath("//td[@class='dashboard-search-result-action-button dashboard-user-template-open']")).click();
    	browser.driver.sleep(8000);
    	return this;
    };
 this.clickOnEditTemlate=function(){
    	
    	element(by.xpath("(//td[@class='dashboard-search-result-action-button dashboard-user-template-open'])[1]")).click();
    	browser.driver.sleep(5000);
    	return this;
    };
    
    this.verifyBylineEmpty=function(){
    	 expect(element(by.xpath("(//input[@class='tag-search ui-autocomplete-input'])[1]")).getText()).toEqual("");
    	 expect(element(by.xpath("//span[text()='Jim Carrey']")).isPresent()).toBeFalsy();
    		return this;    	
    }; 
    this.verifywidgets = function(){
    	 expect(element(by.xpath("//li[@title='Text']")).isDisplayed()).toBe(true);
		 expect(element(by.xpath("//li[@title='Quote']")).isDisplayed()).toBe(true);
		 expect(element(by.xpath("//li[@title='Image']")).isDisplayed()).toBe(true);
		 expect(element(by.xpath("//li[@title='Embedded Video']")).isDisplayed()).toBe(true);
		 expect(element(by.xpath("//li[@title='Embedded Video']")).isDisplayed()).toBe(true);
		 expect(element(by.xpath("//li[@title='HTML']")).isDisplayed()).toBe(true);
		 expect(element(by.xpath("//li[@title='Tweet']")).isDisplayed()).toBe(true);
		 expect(element(by.xpath("//li[@title='P2PEmbed']")).isDisplayed()).toBe(true);
		 expect(element(by.xpath("//li[@title='Infobox']")).isDisplayed()).toBe(true);
		    return this;
	};
	
	this.verifySectionNotDisp = function(){
		expect(element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).isPresent()).toBeFalsy();
		return this;
	};
	
	this.verifyCollection = function(){
		expect(element(by.xpath("//input[@placeholder='Type to search p2p collections...']")).isDisplayed()).toBe(true);
		return this;
	};
	
	//expect(element(by.xpath("//input[@value='/entertainment/tv']/../../following-sibling::div/input")).isChecked()).toBe(false);
	//input[@value='/entertainment/tv']/../../following-sibling::div/input
	
	this.verifyPrimarySectionIsPresent = function(){
		expect(element(by.xpath("//input[@value='/entertainment/tv']/../../following-sibling::div/input")).isDisplayed()).toBe(true);
		 browser.driver.sleep(6000);
		return this;
	};
	this.verifyPrimarySectionIsPresent23 = function(){
		expect(element(by.xpath("//input[@value='/sports/hockey/rangers']/../../following-sibling::div/input")).isDisplayed()).toBe(true);
		 browser.driver.sleep(6000);
		return this;
	};
	this.clickOnSection23 = function(){
		 browser.driver.sleep(6000);
		element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
		 browser.driver.sleep(6000);
		return this;
	};
	this.deletePrimarySection = function(){
		element(by.xpath("(//i[@class='fa fa-trash'])[1]")).click();
		 browser.driver.sleep(8000);
		return this;
    };   
		};

module.exports = new TemplatePage();