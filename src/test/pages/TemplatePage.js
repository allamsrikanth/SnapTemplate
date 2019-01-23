var OR = require('../json/OR_new_york.json');
//var OR = require('../json/OR_los_angeles.json');
//var OR = require('../json/OR_chicago.json');
var baseObject = require('../pages/BasePage.js');

var TemplatePage=function () {
	
	this.getDate = function(){
		var d = new Date();
		var dd = d.getDate();
		var mm = d.getMonth() + 1;
		var yyyy = d.getYear();
		
		if(mm < 10){
			mm = "0" + mm;
		}
		if(dd < 10){
			dd = "0" + dd; 
		}
		
		return yyyy+""+mm+""+dd;
	}
	
	this.enterHeadline = function(){
		browser.driver.sleep(4000);		
		element(by.xpath(OR.locators.TemplatePage.headline)).clear();
		element(by.xpath(OR.locators.TemplatePage.headline)).sendKeys(OR.locators.data.headlinee);
		browser.driver.sleep(4000);
		return this;
	};
	this.enterHeadlinne = function(){
		browser.driver.sleep(4000);		
		element(by.xpath(OR.locators.TemplatePage.headline)).clear();
		element(by.xpath(OR.locators.TemplatePage.headline)).sendKeys(OR.locators.data.headlinne);
		browser.driver.sleep(4000);
		return this;
	};
	this.enterHeadlinee = function(){
		browser.driver.sleep(3000);
		element(by.xpath(OR.locators.TemplatePage.headline)).clear();
	    element(by.xpath(OR.locators.TemplatePage.headline)).sendKeys(OR.locators.TemplatePage.headline_value);
	    return this;	
	};
	this.enterStoryHeadline = function(){
		browser.driver.sleep(6000);
		element(by.xpath(OR.locators.TemplatePage.headline)).clear();
		element(by.xpath(OR.locators.TemplatePage.headline)).sendKeys(OR.locators.TemplatePage.story_headline);
		return this;	
	};
	this.enterStorySlug = function(slugName){
		 browser.driver.sleep(2000);
		 element(by.xpath(OR.locators.TemplatePage.slugname)).clear();
		 element(by.xpath(OR.locators.TemplatePage.slugname)).sendKeys(slugName);
		 browser.driver.sleep(6000);
		 return this;	
	};
	
	this.clearHeadline = function(){
		 element(by.xpath(OR.locators.TemplatePage.headline)).clear();
		 browser.driver.sleep(6000);
		 return this;	
	};
	this.clearSlug = function(){
		 element(by.xpath(OR.locators.TemplatePage.slugname)).clear();
		 browser.driver.sleep(6000);
		 return this;
	};
	this.verifyErrorPopup= function(){
		 browser.driver.sleep(1000);
		 expect(element(by.xpath(OR.locators.TemplatePage.headline_error)).isDisplayed()).toBe(true);
		 
	     expect(element(by.xpath(OR.locators.TemplatePage.ok_ispresent)).isDisplayed()).toBe(true);
	     browser.driver.sleep(3000);
		 return this;
	};
	this.clickOnOk = function(){
		 element(by.xpath(OR.locators.TemplatePage.clickon_ok)).click();
		 browser.driver.sleep(2000);
		 expect(element(by.xpath(OR.locators.TemplatePage.story_notcreate)).isPresent()).toBeFalsy();
		 expect(element(by.xpath(OR.locators.TemplatePage.please_enterheadline)).isPresent()).toBeFalsy();
		 expect(element(by.xpath(OR.locators.TemplatePage.template_editpage)).isDisplayed()).toBe(true);
		 browser.driver.sleep(2000);
		 return this;
	};
	this.verifyHeadlinePopup = function(){
		 browser.driver.sleep(100);
		 var disp= element(by.xpath(OR.locators.TemplatePage.verify_headline200popup)).isDisplayed()
		 expect(disp).toBe(true);
		 browser.driver.sleep(2000);
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
		 browser.driver.sleep(3000);
		  element(by.xpath(OR.locators.TemplatePage.slugname)).clear();
		  element(by.xpath(OR.locators.TemplatePage.slugname)).sendKeys(slugName);
		  browser.driver.sleep(2000);
		  return this;
	};
	this.enterAlreadyTakenSlugName = function(){
		 element(by.xpath(OR.locators.TemplatePage.slugname)).clear();
		 element(by.xpath(OR.locators.TemplatePage.slugname)).sendKeys(OR.locators.data.taken_slug);
		 browser.driver.sleep(6000);
		 return this;
	};
    this.verifySectionErrorpopup = function(){
		browser.driver.sleep(1000);
		expect(element(by.id(OR.locators.TemplatePage.verify_sectionerror)).isDisplayed()).toBe(true);
		return this;
	};
	this.getSlugName = function(){
		 element(by.xpath(OR.locators.TemplatePage.get_slugtext)).getText();
		 return this;
	};
	this.clickOnStorytype = function(){
		 element(by.xpath(OR.locators.TemplatePage.clickstorytypep2p)).click();
		 browser.driver.sleep(6000);
		 return this;
	};
	this.clickOnStorytypeArc = function(){
		 element(by.xpath(OR.locators.TemplatePage.click_storytypearc)).click();
		 browser.driver.sleep(3000);
		 return this;
	};
	this.verifyStorytypeOptions = function(){
		 expect(element(by.id(OR.locators.TemplatePage.vrify_storyoptionsp2p)).all(by.tagName('option')).getText()).toEqual([ 'Simple Story', 'HTMLStory', 'Big Story' ]);
		 browser.driver.sleep(3000);
		 return this;
	};
	this.verifyStorytypeOptionsArc = function(){
		 expect(element(by.id(OR.locators.TemplatePage.verify_storyoptionsArc)).all(by.tagName('option')).getText()).toEqual(['Right Rail','Full Width']);
		 browser.driver.sleep(4000);
		 return this;
	};
	this.getHeadline = function(){
         element(by.xpath(OR.locators.TemplatePage.get_headlinetext)).getText();
         return this;
	};
	this.clicksaveandCont = function(){
		 element(by.xpath(OR.locators.TemplatePage.click_saveandcont)).click();
		 //browser.driver.sleep(8000);
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
		 browser.driver.sleep(1000);
		 expect(element(by.xpath(OR.locators.TemplatePage.verify_templatecreated)).isDisplayed()).toBe(true);
		 browser.driver.sleep(5000);
		 return this;
	};
	
	this.verifyslugpupup = function(){
		 //browser.driver.sleep(2000);
		 var alert = element(by.xpath(OR.locators.TemplatePage.verify_slugpopuperror)).isDisplayed()
		 expect(alert).toBe(true);
		 element(by.xpath(OR.locators.TemplatePage.click_ok)).click();
		 return this;
	};
    
    this.editTemplate=function(){
	     element(by.xpath(OR.locators.TemplatePage.click_edittepmlate)).click();
	     element(by.xpath(OR.locators.TemplatePage.headline)).clear();
	     element(by.xpath(OR.locators.TemplatePage.headline)).sendKeys(OR.locators.data.upadte_headline);
	     return this;
    };
    this.updateDetails=function(){
    	browser.driver.sleep(6000);
	     element(by.xpath(OR.locators.TemplatePage.headline)).clear();
	     element(by.xpath(OR.locators.TemplatePage.headline)).sendKeys(OR.locators.data.upadte_headline);
	     return this;
    };
    this.clickOnSection=function()	{
    	element(by.xpath(OR.locators.TemplatePage.click_section)).click();
    	browser.driver.sleep(5000);
    };
    this.EnterSeoDescription=function()	{
    	element(by.xpath(OR.locators.TemplatePage.enter_description)).sendKeys(OR.locators.TemplatePage.description_text);
    	browser.driver.sleep(5000);
    };
    this.newlyCreatedTemplated=function()	{
    	browser.driver.sleep(3000);
    	var temp = element(by.xpath(OR.locators.TemplatePage.newtemplate_edit)).isDisplayed();
    	expect(temp).toBe(true);
    	
    };
    this.clearSectionField=function()	{
    	browser.driver.sleep(6000);
    	element(by.xpath(OR.locators.TemplatePage.click_section)).click();
		 //element(by.xpath("//button/span[text()='Add new section']")).click();
		  browser.driver.sleep(5000);
		  element(by.xpath(OR.locators.TemplatePage.click_typesearch)).click();
		  element(by.xpath(OR.locators.TemplatePage.click_typesearch)).clear();
		  browser.driver.sleep(5000);
   };
    this.selectSection=function(sectionName){
    	browser.driver.sleep(6000);
    	 browser.executeScript("arguments[0].scrollIntoView();", element(by.xpath("//button/span[text()='Add new section']")).getWebElement());
    	element(by.xpath(OR.locators.TemplatePage.add_section)).click();
    	//browser.driver.sleep(3000);
	     element(by.xpath(OR.locators.TemplatePage.click_typesearch)).click();
	     let eles = element.all(by.xpath(OR.locators.TemplatePage.save_placeholder))
	     browser.driver.sleep(3000);
	     expect(eles.count()).toBeGreaterThan(0);
	     browser.driver.sleep(8000);
	     element(by.xpath("//div[text()='"+sectionName+"']")).click();
	     browser.driver.sleep(6000);
	     
   };
   this.selectSectionn=function(sectionName){
   	browser.driver.sleep(6000);
   	 //browser.executeScript("arguments[0].scrollIntoView();", element(by.xpath("//button/span[text()='Add new section']")).getWebElement());
   	//element(by.xpath(OR.locators.TemplatePage.add_section)).click();
   	//browser.driver.sleep(3000);
	     element(by.xpath(OR.locators.TemplatePage.click_typesearch)).click();
	     let eles = element.all(by.xpath(OR.locators.TemplatePage.save_placeholder))
	     browser.driver.sleep(3000);
	     expect(eles.count()).toBeGreaterThan(0);
	     browser.driver.sleep(8000);
	     element(by.xpath("//div[text()='"+sectionName+"']")).click();
	     browser.driver.sleep(6000);
	     
  };
  
   this.selectSectionAgain=function(sectionName)	{
	   browser.executeScript("arguments[0].scrollIntoView();", element(by.xpath("//button/span[text()='Add new section']")).getWebElement());
	   element(by.xpath(OR.locators.TemplatePage.add_section)).click();
	   browser.driver.sleep(5000);
	   element(by.xpath(OR.locators.TemplatePage.type_search)).click();
	   browser.driver.sleep(6000);
	   let eles = element.all(by.xpath(OR.locators.TemplatePage.save_placeholder))
	   browser.driver.sleep(6000);
	   expect(eles.count()).toBeGreaterThan(0);
	   element(by.xpath("//div[text()='"+sectionName+"']")).click();
	};
    this.verifySectionPreview=function(name)	{	
    	expect(element(by.xpath("//span[@class='tag tag-solid tag-last']")).getext()).toEqual(name);
   };
 
	this.clickOnSaveWithoutDeadline=function()	{
		browser.driver.sleep(6000);	
		element(by.xpath(OR.locators.TemplatePage.click_savewithoutdeadline)).click();
		browser.driver.sleep(8000);			
		return this;
	};
	this.clickOnArc=function()	{	
		browser.driver.sleep(6000);
		element(by.xpath(OR.locators.TemplatePage.click_Arc)).click();
		browser.driver.sleep(6000);			
		return this;
	};
	this.clickOnExit=function()	{	
		browser.driver.sleep(3000);
		element(by.xpath("//button[@id='dashboard-search-results-exit']")).click();
		browser.driver.sleep(6000);			
		return this;
	};	
	this.clickOnSectionAgainn=function(){	
		 browser.driver.sleep(3000);
		 element(by.xpath(OR.locators.TemplatePage.click_section)).click();
		 element(by.xpath(OR.locators.TemplatePage.add_section)).click();
		 browser.driver.sleep(5000);
		 element(by.xpath(by.xpath(OR.locators.TemplatePage.type_search))).click();
	     browser.driver.sleep(10000);
		 let eles = element.all(by.xpath(OR.locators.TemplatePage.save_placeholder))
		 expect(eles.count()).toBeGreaterThan(0);
		 browser.driver.sleep(6000);
		 //browser.actions().mouseMove(element).perform();
		 element(by.xpath("//div[text()='/la-times/sports']")).click();
	     return this;
	};

	
    this.verifySnapHomePage = function(){
	     browser.driver.sleep(8000);
	     element(by.xpath(OR.locators.TemplatePage.click_homepage)).click();
	     browser.driver.sleep(4000);
	     var home = element(by.xpath(OR.locators.TemplatePage.verify_snaphomepage)).isDisplayed();
	     expect(home).toBe(true);
         return this;
    };
    this.verifySectionAdded = function(){
	     var isdsp = element(by.xpath(OR.locators.TemplatePage.verify_sectionisadded)).isDisplayed();
	     expect(isdsp).toBe(true);
	     browser.driver.sleep(4000);
		 return this;
    };
    this.verifySectionAddedd = function(){
	     var isdsp = element(by.xpath(OR.locators.TemplatePage.verify_sectionisaddedd)).isDisplayed();
	     expect(isdsp).toBe(true);
	     browser.driver.sleep(4000);
		 return this;
   };
	this.clickOnComments = function(){
		 element(by.xpath(OR.locators.TemplatePage.click_comments)).click();
	     browser.driver.sleep(10000);
		 return this;
	};
	this.clickOnViewRevisions = function(){
		browser.driver.sleep(10000);
		 element(by.xpath(OR.locators.TemplatePage.click_viewrevisions)).click();
		 browser.driver.sleep(10000);
		 return this;
    };
	this.clickOnView = function(){
		 element(by.xpath(OR.locators.TemplatePage.click_view)).click();
		 browser.driver.sleep(10000);
		 return this;
    };
    this.clickOnExit = function(){
    	browser.driver.sleep(3000);
		 element(by.xpath(OR.locators.TemplatePage.click_exit)).click();
		 browser.driver.sleep(3000);
		 var home = element(by.xpath(OR.locators.TemplatePage.verify_snaphomepage)).isDisplayed();
	     expect(home).toBe(true);
	     browser.driver.sleep(2000);
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


	this.verifySectionFieldIsEmpty = function(){
		element(by.xpath(OR.locators.TemplatePage.add_section)).click();
	     expect(element(by.xpath(OR.locators.TemplatePage.click_typesearch)).getAttribute("value")).toEqual("");
		 browser.driver.sleep(10000);
		 return this;
     };
	 this.verifySectionFieldIsPresent = function(){
		  expect(element(by.xpath(OR.locators.TemplatePage.verify_sectionispresent)).getAttribute("value")).toEqual(OR.locators.TemplatePage.section_name);
		   browser.driver.sleep(4000);
		   return this;
         };
     this.verifySectionFieldd = function(){
       	 element(by.xpath(OR.locators.TemplatePage.click_section)).click();
         browser.driver.sleep(6000);
 		 expect(element(by.xpath(OR.locators.TemplatePage.type_search)).getAttribute("value")).toEqual(OR.locators.TemplatePage.verify_sectionfield);
 		 browser.driver.sleep(10000);
		 return this;
      };
		
	  this.verifyUpdatedTemplate=function(){
		browser.driver.sleep(5000);
		
		element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.TemplatePage.updated_headline);
		element(by.css(OR.locators.LogoutPage.searchicon)).click();
		browser.driver.sleep(6000);
		var dsp = element(by.xpath(OR.locators.TemplatePage.verify_updatedtemplate)).isDisplayed();
		expect(dsp).toBe(true);	
		return this;
		
	};
	this.verifyHeadline=function(){
		 browser.driver.sleep(6000);	
	     expect(element(by.xpath(OR.locators.TemplatePage.verify_defaultvalueheadline)).getAttribute('value')).toEqual('snap-test-auto-normal-ct-xebia Joshi Template');
	 	 return this;                                                                                                    	
	};
	this.verifySlug = function(){
		 browser.driver.sleep(6000);
		 expect(element(by.xpath(OR.locators.TemplatePage.slugname)).getAttribute('value')).toEqual(OR.locators.data.slug_value);	 
	 	 return this;
	};
	this.verifyStory=function(){
		 browser.driver.sleep(4000);
		 expect(element(by.id(OR.locators.TemplatePage.verify_defaultstoryvalue)).$('option:checked').getText()).toEqual(OR.locators.data.story_type);
		 return this;
	};
	this.verifyStoryArc=function(){
		 browser.driver.sleep(4000);
		 element(by.xpath(OR.locators.TemplatePage.click_storytypearc)).click();
		 browser.driver.sleep(3000);
		 expect(element(by.id(OR.locators.TemplatePage.verify_defaultstoryvalueArc)).$('option:checked').getText()).toEqual('Right Rail');
		 return this;
	};
		
	this.verifyBasicbuild=function(){	
		 browser.driver.sleep(4000);		
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
     	 element(by.xpath(OR.locators.TemplatePage.click_basicbuild)).click();
   	     browser.driver.sleep(6000);
   	     expect(element(by.id(OR.locators.TemplatePage.verify_basicbuildoptions)).all(by.tagName('option')).getText()).toEqual(['No section','Breaking Graphic','SendtoNews']);
   		 return this;
	};
	this.clickOnBasicbuildIsVerifyOptionss=function(){
    	 browser.driver.sleep(4000);
    	 element(by.xpath(OR.locators.TemplatePage.click_basicbuild)).click();
  	     browser.driver.sleep(6000);
  	     expect(element(by.id(OR.locators.TemplatePage.verify_basicbuildoptions)).all(by.tagName('option')).getText()).toEqual('No section','Test','rishikesh');
  		 return this;
	};
	this.clickOnBasicbuildIsVerifyOptionns=function(){
   	 browser.driver.sleep(2000);
   	 element(by.xpath(OR.locators.TemplatePage.click_basicbuild)).click();
 	     browser.driver.sleep(2000);
 	     expect(element(by.id(OR.locators.TemplatePage.verify_basicbuildoptions)).all(by.tagName('option')).getText()).toEqual('No section', 'Automated tests build', 'For lead art swapping', 'Politics', 'Test 2', 'Test Package ', 'local', 'news', 'swap again', 'test');
 		 return this;
	};
	this.verifyShowADRailIsNotPresent=function(){	
	     browser.driver.sleep(6000);
	     expect(element(by.xpath(OR.locators.TemplatePage.verify_showADrail)).isPresent()).toBeFalsy();
         return this;
	     //isPresent()).toBeFalsy();
	    // isDisplayed()).toBe(false)
       
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
		return this;
			 
	}
    this.selectHtmlStory=function(){	
		 element.all(by.xpath(OR.locators.TemplatePage.click_htmlstory)).click();
	     return this;
	};
   this.selectFullWidth=function(){	
	   browser.driver.sleep(4000);
	    element.all(by.xpath(OR.locators.TemplatePage.select_fullwidth)).click();
	    return this;
    };
    
    this.SelectedPublished=function(){	
		 element.all(by.xpath(OR.locators.TemplatePage.select_published)).click();
	     return this;
	};
	 this.ClickOnWebsite=function(){	
		 element.all(by.xpath(OR.locators.TemplatePage.click_website)).click();
	     return this;
	};
    this.selectComments=function(stroption){	
		 element.all(by.xpath("//option[.='"+stroption+"']")).click();
	     return this;
	};
    this.verifyShowADRailIsPresent=function(){	
	     expect(element(by.xpath(OR.locators.TemplatePage.verify_showADrail)).isDisplayed()).toBe(true);
	     expect(element(by.xpath(OR.locators.TemplatePage.verify_defaultaAdrailvalue)).$('option:checked').getText()).toEqual('Show');
	     return this;
	};
    this.verifyBasicbuildIsNotPresent=function(){	
	     browser.driver.sleep(4000);
		 expect(element(by.xpath(OR.locators.TemplatePage.verify_basicbuildispresent)).isDisplayed()).toBe(false);;
	     return this;
	};
  this.verifytheWidgets2=function(){	
	   expect(element(by.xpath(OR.locators.TemplatePage.verify_quote)).isDisplayed()).toBe(true);
	   expect(element(by.xpath(OR.locators.TemplatePage.verify_image)).isDisplayed()).toBe(true);
	   expect(element(by.xpath(OR.locators.TemplatePage.verify_embeddedvideo)).isDisplayed()).toBe(true);
	   expect(element(by.xpath(OR.locators.TemplatePage.verify_roadblock)).isDisplayed()).toBe(true);
	   expect(element(by.xpath(OR.locators.TemplatePage.verify_html)).isDisplayed()).toBe(true);
	   expect(element(by.xpath(OR.locators.TemplatePage.verify_tweet)).isDisplayed()).toBe(true);
	   expect(element(by.xpath(OR.locators.TemplatePage.verify_instagram)).isDisplayed()).toBe(true);
	   expect(element(by.xpath(OR.locators.TemplatePage.verify_facebook)).isDisplayed()).toBe(true);
	   expect(element(by.xpath(OR.locators.TemplatePage.verify_infobox)).isDisplayed()).toBe(true);
	   expect(element(by.xpath(OR.locators.TemplatePage.verify_break)).isDisplayed()).toBe(true);
	   return this;
    };
   this.verifytheWidgets3=function(){	
		expect(element(by.xpath(OR.locators.TemplatePage.verify_text)).isDisplayed()).toBe(true);
		expect(element(by.xpath(OR.locators.TemplatePage.verify_quote)).isDisplayed()).toBe(true);
      	expect(element(by.xpath(OR.locators.TemplatePage.verify_image)).isDisplayed()).toBe(true);
	    expect(element(by.xpath(OR.locators.TemplatePage.verify_embeddedvideo)).isDisplayed()).toBe(true);
		expect(element(by.xpath(OR.locators.TemplatePage.verify_roadblock)).isDisplayed()).toBe(true);
		expect(element(by.xpath(OR.locators.TemplatePage.verify_html)).isDisplayed()).toBe(true);
		expect(element(by.xpath(OR.locators.TemplatePage.verify_tweet)).isDisplayed()).toBe(true);
		expect(element(by.xpath(OR.locators.TemplatePage.verify_instagram)).isDisplayed()).toBe(true);
		expect(element(by.xpath(OR.locators.TemplatePage.verify_facebook)).isDisplayed()).toBe(true);
		expect(element(by.xpath(OR.locators.TemplatePage.verify_P2Pembed)).isDisplayed()).toBe(true);
		//expect(element(by.xpath("//li[@title='Video']")).isDisplayed()).toBe(true);
		browser.driver.sleep(6000);
		return this;
	};
	this.verifytheWidgets4=function(){	
		 expect(element(by.xpath(OR.locators.TemplatePage.verify_text)).isDisplayed()).toBe(true);
		 expect(element(by.xpath(OR.locators.TemplatePage.verify_quote)).isDisplayed()).toBe(true);
		 expect(element(by.xpath(OR.locators.TemplatePage.verify_image)).isDisplayed()).toBe(true);
		 expect(element(by.xpath(OR.locators.TemplatePage.verify_embeddedvideo)).isDisplayed()).toBe(true);
		 expect(element(by.xpath(OR.locators.TemplatePage.verify_roadblock)).isDisplayed()).toBe(true);
		 expect(element(by.xpath(OR.locators.TemplatePage.verify_html)).isDisplayed()).toBe(true);
		 expect(element(by.xpath(OR.locators.TemplatePage.verify_tweet)).isDisplayed()).toBe(true);
		 expect(element(by.xpath(OR.locators.TemplatePage.verify_instagram)).isDisplayed()).toBe(true);
		 expect(element(by.xpath(OR.locators.TemplatePage.verify_facebook)).isDisplayed()).toBe(true);
		 //expect(element(by.xpath("//li[@title='Video']")).isDisplayed()).toBe(true);
		 browser.driver.sleep(6000);
		 return this;
	};
	this.verifycomments=function(){
		 browser.driver.sleep(4000);		
		 expect(element(by.name(OR.locators.TemplatePage.verify_defaultcommentsvalue)).$('option:checked').getText()).toEqual('Show');
		  return this;
			 
	 };
	 this.verifysaveReminder=function(){
		  expect(element(by.name(OR.locators.TemplatePage.verify_defaultsaveremindervalue)).$('option:checked').getText()).toEqual('15 minutes');
		  return this;
    };
    
	this.slugErrorPopup=function(){
		 var alert = element(by.xpath(OR.locators.TemplatePage.slug_error)).isDisplayed()
		 expect(alert).toBe(true);
		 return this;
	};

    this.errorTemplate=function(){
    	  var mesg = element(by.xpath(OR.locators.TemplatePage.template_error)).isDisplayed()
		  expect(mesg).toBe(true);
          return this;
    };
    
    this.headlinePreview=function(){
    	 var disp= element(by.xpath(OR.locators.TemplatePage.check_headlinepreiview)).isDisplayed()
		 expect( disp).toBe(true);
    	 browser.driver.sleep(6000);
    	 return this;
    };
    this.headlinePrevieew=function(){
   	 var disp= element(by.xpath(OR.locators.TemplatePage.verify_headlinepreiview)).isDisplayed()
		 expect( disp).toBe(true);
   	 browser.driver.sleep(6000);
   	 return this;
   };
    this.alredyTakenPopup=function(){
    	 //browser.driver.sleep(6000);
 		 var alert = element(by.xpath(OR.locators.TemplatePage.verify_alreadytakenslug)).isDisplayed()
 		 expect(alert).toBe(true);
 		 browser.driver.sleep(6000);
    	 return this;
    };
    this.clickonByline=function(){
    	browser.driver.sleep(2000);
         element(by.xpath(OR.locators.TemplatePage.click_byline)).clear();
         element(by.xpath(OR.locators.TemplatePage.click_byline)).sendKeys(OR.locators.data.byline_name);
	     return this;
     };
    this.clickonByline1=function(){
         element(by.xpath(OR.locators.TemplatePage.click_byline)).sendKeys(OR.locators.data.byline_name);
    	 return this;
        };
    this.selectBylinefromAutopopulated=function(){
    	 browser.driver.sleep(6000);
    	 var eles = element.all(by.xpath(OR.locators.TemplatePage.select_byline));
		 expect(eles.get(0).getText()).toEqual(OR.locators.data.byline_value1);
		 expect(eles.get(1).getText()).toEqual(OR.locators.data.byline_value2);	 
		 eles.get(0).click();
		 return this;
    };
    this.selectBylinefromAutopopulated1=function(){
    	 browser.driver.sleep(6000);
    	 element.all(by.xpath(OR.locators.TemplatePage.select_byline)).get(1).click();
         return this;
   };
   this.selectBylinefromAutopopulated2=function(){
	    browser.driver.sleep(6000);
	    element.all(by.xpath(OR.locators.TemplatePage.select_byline)).get(4).click();
	    browser.driver.sleep(6000);
		return this;
 };
    this.verifyBylinePresentWithinBox=function(){
    	 var disp= element(by.xpath(OR.locators.TemplatePage.verify_bylineinbox)).isDisplayed();
		 expect(disp).toBe(true);
		 return this;
    };
    this.verifyBylinePreview=function(){
    	 browser.driver.sleep(5000);
    	 var show = element(by.xpath(OR.locators.TemplatePage.verify_bylinepreview)).isDisplayed()
		 expect(show).toBe(true);
    	 return this;
    };
    this.verifyBylinePreview1=function(){
    	 browser.driver.sleep(4000);
    	 expect(element(by.xpath(OR.locators.TemplatePage.verify_byispresentinpreview)).isDisplayed()).toBe(true);
    	 return this;
    };
    this.clickOnCrossSign=function(){
    	 element(by.xpath(OR.locators.TemplatePage.click_crossign)).click();
    	 return this;
    };
  
  this.clickOnEditTemlate=function(){
       element(by.xpath(OR.locators.TemplatePage.click_edittemplate)).click();
       browser.driver.sleep(5000);
       return this;
    };
    
    this.verifyBylineEmpty=function(){
    	 expect(element(by.xpath(OR.locators.TemplatePage.verify_bylineisempty)).getText()).toEqual("");
    	 return this;    	
    }; 
    this.verifyBylinepreviewEmpty=function(){
   	  expect(element(by.xpath(OR.locators.TemplatePage.verify_bylinepreview)).isPresent()).toBeFalsy();
   	return this;    	
   }; 
   
  this.verifySectionNotDisp = function(){
		 browser.driver.sleep(4000);
		expect(element(by.xpath(OR.locators.TemplatePage.verify_sectionnotpresent)).isPresent()).toBeFalsy();
				//isDisplayed()).toBe(false);
				//isPresent()).toBeFalsy();
		return this;
		
	};
	
	this.verifyCollection = function(){
		expect(element(by.xpath(OR.locators.TemplatePage.verify_collectionispresent)).isDisplayed()).toBe(true);
		return this;
	};
	this.verifyPrimarySectionIsPresent = function(){
		expect(element(by.xpath(OR.locators.TemplatePage.verify_primarysection)).isDisplayed()).toBe(true);
		browser.driver.sleep(6000);
		return this;
	};
	this.verifyPrimarySectionIsPresentt = function(){
		browser.driver.sleep(6000)
		expect(element(by.xpath()).isDisplayed(OR.locators.TemplatePage.primarysection_present)).toBe(true);
		 browser.driver.sleep(6000);
		return this;
	};
	
	this.deletePrimarySection = function(){
		 element(by.xpath(OR.locators.TemplatePage.delete_primarysection)).click();
		 browser.driver.sleep(8000);
		 return this;
    };   
	};

module.exports = new TemplatePage();