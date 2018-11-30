//var OR = require('../json/OR_new_york.json');
//var baseObject = require('../pages/BasePage.js');

var TemplatePage=function () {
	this.snapHomePage = function(){
		element(by.xpath("//i[@id='home']")).isDisplayed().toBe(true);
		//browser.driver.sleep(4000);
		return this;
	};
	
	this.enterTemplateName = function(){
		browser.driver.sleep(10000);
		element(by.xpath("//input[@name='headline']")).clear();
		element(by.xpath("//input[@name='headline']")).sendKeys("snap-Templatetest-auto-admin-ct-xebia");
		browser.driver.sleep(6000);
		return this;
	};
	this.enterHeadline200 = function(){
		browser.driver.sleep(6000);
		element(by.xpath("//input[@name='headline']")).clear();
		 element(by.xpath("//input[@name='headline']")).sendKeys("snap automationo snap automation snap automation snap autoaamation snap automaaaaassaaaaaaaasaaaaaatissaaossaan aassaaaaautomation snap automation snap auotomation automation snapsnapp automation snap au");
	
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
	this.clearHeadline = function(){
		browser.driver.sleep(6000);
		element(by.xpath("//input[@name='headline']")).clear();
		
		return this;	
	};
	this.clearSlug = function(){
		  element(by.xpath("//input[@name='slug']")).clear();
		 
		  return this;
	};
	this.verifyErrorPopup= function(){
		expect(element(by.xpath("//p[contains(text(),'Please enter a Headline')]")).isDisplayed()).toBe(true);
		browser.driver.sleep(3000);
	    //expect(element(by.xpath("//p[contains(text(),'Please enter a Slug')]")).isDisplayed()).toBe(true);
	    expect(element(by.xpath("//button/span[text()='OK']")).isDisplayed()).toBe(true);
		 
		  return this;
		  
	};
	this.clickOnOk = function(){
		element(by.xpath("//button/span[text()='OK']")).click();
		browser.driver.sleep(3000);
		expect(element(by.xpath("//p[text()='Your story has been successfully saved!']")).isPresent()).toBeFalsy();
		expect(element(by.xpath("//p[contains(text(),'Please enter a Headline')]")).isPresent()).toBeFalsy();
	   // expect(element(by.xpath("//p[contains(text(),'Please enter a Slug')]")).isDisplayed()).toBe(false);
		expect(element(by.xpath("//label[text()='Template']")).isDisplayed()).toBe(true);
		 
		 
		  return this;
	};
	this.verifyHeadlinePopup = function(){
		 //browser.driver.sleep(1000);
		 var disp= element(by.xpath("//p[contains(text(),'Field limit reached (200 characters)!')]")).isDisplayed()
		 expect(disp).toBe(true);
		return this;
	};
	this.enterSlugName = function(){
		  element(by.xpath("//input[@name='slug']")).clear();
		  element(by.xpath("//input[@name='slug']")).sendKeys("ny-snap-teeste-auto1o-admin-xebii-template-2018");
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
		  element(by.xpath("//input[@name='slug']")).sendKeys("ny-snap-teeste-auto1o-admin-xebiii-template-2018");
		  browser.driver.sleep(6000);
		  return this;
	};
	this.enterSlugName17 = function(){
		  element(by.xpath("//input[@name='slug']")).clear();
		  element(by.xpath("//input[@name='slug']")).sendKeys("ny-snap-teesrtggclicksaveandConttee-auuto1oo-aaadmin-xeeebbbiii-template-2018");
		  browser.driver.sleep(6000);
		  return this;
	};
	this.verifySectionErrorpopup = function(){
		browser.driver.sleep(1000);
		expect(element(by.xpath("//div=[@id='alert-body']")).isDisplayed()).toBe(true);
		//expect(element(by.xpath("//div[@id='react-modal-message']")).isDisplayed()).toBe(true);
		return this;
	};
	
	this.getSlugName = function(){
		return element(by.xpath("//input[@name='slug']")).getText();
	}
	this.clickOnStorytype = function(){
		 element.all(by.xpath("//option[.='Simple Story']")).click();
	}
	this.clickOnStorytypeArc = function(){
		 element.all(by.xpath("//option[.='Right Rail']")).click();
	}
	this.verifyStorytypeOptions = function(){
		 expect(element(by.id('meta-story-type')).all(by.tagName('option')).getText()).toEqual(['Simple Story','HTMLStory','Big Story']);
	}
	this.verifyStorytypeOptionsArc = function(){
		 expect(element(by.id('meta-story-type')).all(by.tagName('option')).getText()).toEqual(['Right Rail','Full Width']);
		 
	}
	
	
	this.getHeadline = function(){
		return element(by.xpath("//input[@name='headline']")).getText();
	}
	
	this.clicksaveandCont = function(){
		element(by.xpath("//button[@id='save']")).click();
		browser.driver.sleep(10000);
		return this;
	};
	
	this.verifypopup = function(){
		browser.driver.sleep(1000);
		expect(element(by.xpath("//p[text()='Your story has been successfully saved!']")).isDisplayed()).toBe(true);
		//expect(element(by.xpath("//div[@id='react-modal-message']")).isDisplayed()).toBe(true);
		return this;
	};
	
	this.verifyslugpupup = function(){
		browser.driver.sleep(2000);
		var alert = element(by.xpath("//p[contains(text(),'Template slug must include the word')]")).isDisplayed()
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
	 element(by.xpath("//div[@name='/new-york/brooklyn'")).click();
	element(by.xpath("//div[text()='/entertainment/tv']")).click();
	var isdsp = element(by.xpath("//span[contains(text(),'entertainment/tv')]")).isDisplayed();
	expect(isdsp).toBe(true);
	element(by.id("home")).click();
	return this;
	};
	this.clickOnSection17=function()	{	
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
		this.clickOnSectionAgain17=function()	{	
			//element(by.xpath("//h2[text()='Sections']/i[@class='fa fa-caret-square-o-right']")).click();
			element(by.xpath("//button/span[text()='Add new section']")).click();
			 browser.driver.sleep(10000);
			
			element(by.xpath("(//input[@placeholder='Type to search Arc sections...'])[2]")).click();
			  browser.driver.sleep(10000);
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
		var home = element(by.xpath("//img[@id='snap-img']")).isDisplayed();
		expect(home).toBe(true);
		return this;

	};
this.verifySectionAdded = function(){
		
	var isdsp = element(by.xpath("//span[contains(text(),'entertainment/tv')]")).isDisplayed();
	expect(isdsp).toBe(true);
	 browser.driver.sleep(10000);
		return this;

	};
	this.verifySectionAdded21 = function(){
		
		var isdsp = element(by.xpath("//span[contains(text(),'new-york/brooklyn')]")).isDisplayed();
		expect(isdsp).toBe(true);
		 browser.driver.sleep(10000);
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
		//var ele = element(by.xpath("//input[@name='headline']")).getAttribute("value");
		//expect(ele).toEqual("snap-test-auto-admin-ct-xebia Joshi Template");
	    expect(element(by.xpath("//input[@name='headline']")).getAttribute('value')).toEqual('snap-test-auto-admin-ct-xebia Joshi Template');
	    //expect(element(by.xpath("//input[@name='headline']")).getText()).toEqual('snap-test-auto-admin-ct-xebia Joshi Template');
		return this;
		};
	this.verifySlug = function(){
			browser.driver.sleep(6000);
			//var slug = element(by.xpath("//input[@name='slug']")).getAttribute("value");
			//expect(slug).toEqual("ny-snap-test-auto-admin-ct-xebia-template-20181121");
			//element(by.xpath("//input[@name='slug']")).getText().toEqual('ny-snap-test-auto-admin-ct-xebia-template-20181128');
			expect(element(by.xpath("//input[@name='slug']")).getAttribute('value')).toEqual('ny-snap-test-auto-admin-ct-xebia-template-20181130');	 
			 
			return this;
		
		};
	this.verifyStory=function(){
		browser.driver.sleep(4000);
		//var story = element.all(by.xpath("//option[.='Simple Story']")).getText();
		//expect(story).toEqual("Simple Story");
		expect(element(by.id('meta-story-type')).$('option:checked').getText()).toEqual('Simple Story');
		return this;
		};
		this.verifyStoryArc=function(){
			browser.driver.sleep(4000);
			expect(element(by.id('meta-story-type')).$('option:checked').getText()).toEqual('Right Rail');
			return this;
			};
		
	this.verifyBasicbuild=function(){	
		browser.driver.sleep(4000);
			//var basicb = element.all(by.xpath("//option[.='No section']")).getText();
			//expect(basicb).toEqual("No section");
		 expect(element(by.id('meta-baked-embeds')).$('option:checked').getText()).toEqual('No section');
			return this;
		};
		this.verifyBasicbuildIsPresent=function(){	
			
			browser.driver.sleep(4000);
			expect(element(by.xpath("//div[@id='bake-embeds-box']")).isDisplayed()).toBe(true);
			};
     	this.clickOnBasicbuildIsVerifyOptions=function(){
     		browser.driver.sleep(4000);
     		//element.all(by.xpath("//option[.='No section']")).click();
     		element(by.xpath("//select[@id='meta-baked-embeds']")).click();
   		 browser.driver.sleep(6000);
   		 expect(element(by.id('meta-baked-embeds')).all(by.tagName('option')).getText()).toEqual(['No section','Breaking Graphic','SendtoNews']);
				};
		 this.verifyShowADRailIsNotPresent=function(){	
			 browser.driver.sleep(4000);
			 expect(element(by.xpath("//div[@id='show_rail_box']")).isDisplayed()).toBe(false);
			 //isPresent()).toBeFalsy();
		 };
		 this.verifytheWidgets1=function(){
			 expect(element(by.xpath("//li[@title='Text']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Quote']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Image']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Embedded Video']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Roadblock']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='HTML']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Tweet']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='P2PEmbed']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath("//li[@title='Infobox']")).isDisplayed()).toBe(true);	 
			 
		 }
		 this.selectHtmlStory=function(){	
				
			 element.all(by.xpath("//option[.='HTMLStory']")).click();
		 };
		 this.selectFullWidth=function(){	
			 //element.all(by.xpath("//select[@id='meta-story-type']")).click();
			 browser.driver.sleep(4000);
			 element(by.xpath("//select[@id='meta-story-type']")).click();
			 browser.driver.sleep(4000);
			 element.all(by.css("option[.='Full Width']")).click();
		 };
		 this.verifyShowADRailIsPresent=function(){	
				
			 expect(element(by.xpath("//div[@id='show_rail_box']")).isDisplayed()).toBe(true);
			 expect(element(by.xpath( "//select[@name='show_rail']")).$('option:checked').getText()).toEqual('Show');
		 };
		 this.verifyBasicbuildIsNotPresent=function(){	
				
				browser.driver.sleep(4000);
				expect(element(by.xpath("//div[@id='bake-embeds-box']")).isDisplayed()).toBe(false);;
				 
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
		};
		
		
					
	this.verifycomments=function(){
		browser.driver.sleep(4000);
		
		expect(element(by.name('enable_comments')).$('option:checked').getText()).toEqual('Show');
		return this;
			//var comm=element.all(by.xpath("//option[.='Show']")).getText();
			//expect(comm).toEqual("Show");
			return this;
		};
	this.saveReminder=function(){
		expect(element(by.name('save_reminder')).$('option:checked').getText()).toEqual('15 minutes');
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
   
};

module.exports = new TemplatePage();