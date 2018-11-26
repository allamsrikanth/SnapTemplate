//var OR = require('../json/OR_new_york.json');
//var baseObject = require('../pages/BasePage.js');

var TemplatePage=function () {
	
	this.enterTemplateName = function(){
		browser.driver.sleep(10000);
		element(by.xpath("//input[@name='headline']")).clear();
		element(by.xpath("//input[@name='headline']")).sendKeys("snap-Templatetest-auto-admin-ct-xebia");
		browser.driver.sleep(6000);
		return this;
	};
	this.enterSlugName = function(){
		  element(by.xpath("//input[@name='slug']")).clear();
		  element(by.xpath("//input[@name='slug']")).sendKeys("ny-snap-test-auto-admin-ct-x-template-20181126");
		  browser.driver.sleep(6000);
		  return this;
	};
	
	this.clicksaveandCont = function(){
		element(by.xpath("//button[@id='save']")).click();
		browser.driver.sleep(4000);
		return this;
	};
	
	this.verifypopup = function(){
		browser.driver.sleep(6000);
		expect(element(by.xpath("//p[text()='Your story has been successfully saved!']")).isDisplayed()).toBe(true);
		//expect(element(by.xpath("//div[@id='react-modal-message']")).isDisplayed()).toBe(true);
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
	 var disp= element(by.xpath("//h1[@id='headline']")).isDisplayed()
	expect( disp).toBe(true);
	return this;
};

this.enterTemplateName123=function(){
	element(by.id("dashboard-search-input")).sendKeys("New Template2");
	element(by.xpath("//button[contains(text(),'Search')]")).click();
	return this;
};
this.editTemplate=function(){
	
	element(by.xpath("(//div/h3[text()='New Template2']/../following-sibling::table//td[@title='Edit this template'])[1]")).click();
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
	element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
	element(by.xpath("//button/span[text()='Add new section']")).click();
	element(by.xpath("//input[@placeholder='Type to search Arc sections...']")).click();
	let eles = element.all(by.xpath("//div/input[@placeholder='Type to search Arc sections...']/../div/div"))
	expect(eles.count()).toBeGreaterThan(0);
	  browser.driver.sleep(10000);
	  //element(by.xpath("//div[@name='/new-york/brooklyn'")).click();
	element(by.xpath("//div[text()='/entertainment/tv']")).click();
	var isdsp = element(by.xpath("//span[contains(text(),'entertainment/tv')]")).isDisplayed();
	expect(isdsp).toBe(true);
	element(by.id("home")).click();
	return this;
	};
this.verifySnapHomePage = function(){
		
		var home = element(by.xpath("//img[@id='snap-img']")).isDisplayed();
		expect(home).toBe(true);
		return this;

	};
	this.verifyUpdatedTemplate=function(){
		element(by.id("dashboard-search-input")).sendKeys("New Template123");
		element(by.xpath("//button[contains(text(),'Search')]")).click();
		browser.driver.sleep(6000);
		var dsp = element(by.xpath("//div/h3[text()='New Template123']")).isDisplayed();
		expect(dsp).toBe(true);	
		return this;
		
	};
	this.verifyHeadline=function(){
		browser.driver.sleep(6000);
		var ele = element(by.xpath("//input[@name='headline']")).getAttribute("value");
		expect(ele).toEqual("snap-test-auto-admin-ct-xebia Joshi Template");
		return this;
		};
	this.verifySlug = function(){
			browser.driver.sleep(6000);
			var slug = element(by.xpath("//input[@name='slug']")).getAttribute("value");
			expect(slug).toEqual("ny-snap-test-auto-admin-ct-xebia-template-20181121");
			return this;
		
		};
	this.verifyStory=function(){
		var story = element.all(by.xpath("//option[.='Simple Story']")).getText();
		expect(story).toEqual("Simple Story");
		return this;
		};
		
	this.verifyBasicbuild=function(){		
			var basicb = element.all(by.xpath("//option[.='No section']")).getText();
			expect(basicb).toEqual("No section");
			return this;
		};
		
	this.verifycomments=function(){
			var comm=element.all(by.xpath("//option[.='Show']")).getText();
			expect(comm).toEqual("Show");
			return this;
		};
	this.saveReminder=function(){
			var save=element.all(by.xpath("//option[.='15 minutes']")).getText();
			expect(save).toEqual("15 minutes");
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
    this.selectBylinefromAutopopulated=function(){
    	 var eles = element.all(by.xpath("//li[@class='ui-menu-item']"));
		 expect(eles.get(0).getText()).toEqual("Jim Carrey");
		 expect(eles.get(1).getText()).toEqual("Jim Rich");	 
		 eles.get(0).click();
			return this;
    };
    this.verifyBylinePresentWithinBox=function(){
    	 var disp= element(by.xpath("(//ul[@class='tag-list collection-list selectable'])[1]")).isDisplayed();
		 expect(disp).toBe(true);
			return this;
    };
    this.verifyBylinePreview=function(){
    	var show = element(by.xpath("//p/span[text()='Jim Carrey']")).isDisplayed()
		 expect(show).toBe(true);
    	return this;
    };
    this.clickOnCrossSign=function(){
    	
    	element(by.xpath("//i[@class='fa fa-times remove']")).click();
    	return this;
    };
    
    this.verifyBylineEmpty=function(){
    	 expect(element(by.xpath("(//input[@class='tag-search ui-autocomplete-input'])[1]")).getText()).toEqual("");
    	 expect(element(by.xpath("//span[text()='Jim Carrey']")).isPresent()).toBeFalsy();
    		return this;    	
    };   
};

module.exports = new TemplatePage();