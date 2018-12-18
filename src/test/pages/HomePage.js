var OR = require('../json/OR_new_york.json');
var baseObject = require('../pages/BasePage.js');
require('../utilities/customlocators.js');
require('../utilities/select-wrapper.js');

var HomePage=function () {

    this.loginToSnap = function () {
        element(by.css(OR.locators.LoginPage.username)).sendKeys(OR.locators.data.admin_username);
        element(by.css(OR.locators.LoginPage.password)).sendKeys(OR.locators.data.password);
        element(by.css(OR.locators.LoginPage.button)).click();
    };

    this.checkOptionsDropdown = function(){
        element(by.css(OR.locators.LogoutPage.useroptions)).click();
        var values = element(by.css(OR.locators.LogoutPage.useroptions)).all(by.tagName('option')).getText();
        expect(values).toEqual(['Options ☰', 'Photo/Video Request', 'Admin', 'Logout']);
    };

    this.homelogout = function() {
        element(by.css(OR.locators.LogoutPage.logout)).click();
    };
    this.secondLogin = function () {
        element(by.css(OR.locators.LoginPage.username)).sendKeys(OR.locators.data.admin_username);
        element(by.css(OR.locators.LoginPage.password)).sendKeys(OR.locators.data.password);
        element(by.css(OR.locators.LoginPage.button)).click();
        element(by.css(OR.locators.SlackLoginPage.signInWithSlackButton)).click();
        element(by.css(OR.locators.OrganisationalLoginPage.authorise)).click();
    };

    this.readGuide = function(){
        element(by.linkText(OR.locators.LogoutPage.readguide)).click();
    };

    this.backToHomePage = function(){
        element(by.linkText(OR.locators.LogoutPage.backtoSnap)).click();
    };

    this.searchValidKeyword = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.search_card)).first().isDisplayed().then(function(isVisible){
             expect(isVisible).toBe(true);
        });
        element.all(by.xpath(OR.locators.LogoutPage.search_card_time)).first().isDisplayed().then(function(isVisible){
             expect(isVisible).toBe(true);
        });
        element.all(by.css(OR.locators.LogoutPage.exit_search)).first().isDisplayed().then(function(isVisible){
             expect(isVisible).toBe(true);
        });
    };

    this.searchInvalidKeyword = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchinvalidtext);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(7000);
        var text = element(by.xpath(OR.locators.LogoutPage.invalid_search)).getText();
        expect(text).toEqual("No stories found. Please try a different search term.");
        element(by.css(OR.locators.LogoutPage.exit_search)).click();
    };

    this.searchEmptyKeyword = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys("");
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        var text = element(by.xpath(OR.locators.LogoutPage.empty_search_error)).getText();
        expect(text).toEqual("Please input a search term.");
        browser.driver.sleep(4000);
        element(by.css("div[id='dashboard-search-warning']")).isDisplayed().then(function(errorVisible){
            expect(errorVisible).toBe(false);
        });
    };

    this.exitFromSearch = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(7000);
        element(by.css(OR.locators.LogoutPage.exit_search)).click();
    };

    this.searchFieldGetsUnfolded = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).click();
        element(by.css(OR.locators.LogoutPage.search_panel)).click();
        element(by.css(OR.locators.LogoutPage.market_container)).isDisplayed().then(function(isVisible){
             expect(isVisible).toBe(true);
        });
        element(by.css(OR.locators.LogoutPage.search_button)).isDisplayed().then(function(isVisible){
             expect(isVisible).toBe(true);
        });
        element(by.xpath(OR.locators.LogoutPage.market_name_input)).getAttribute("value").then(function(marketValue){
            expect(marketValue).toBe("New York Daily News");
        });
    };
    this.searchFieldGetsFolded = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).click();
        element(by.css(OR.locators.LogoutPage.search_panel)).click();
        element(by.css(OR.locators.LogoutPage.market_container)).isDisplayed().then(function(isVisible){
             expect(isVisible).toBe(true);
        });
        element(by.css(OR.locators.LogoutPage.search_button)).isDisplayed().then(function(isVisible){
             expect(isVisible).toBe(true);
        });
        element(by.css(OR.locators.LogoutPage.homepage_heading)).click();
        browser.driver.sleep(7000);
        element(by.css(OR.locators.LogoutPage.search_panel)).isDisplayed().then(function(isVisible){
             expect(isVisible).toBe(false);
        });
    };
    this.searchResultsForDifferentMarket = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.search_card)).first().isDisplayed().then(function(isVisible){
             expect(isVisible).toBe(true);
        });
        element.all(by.css(OR.locators.LogoutPage.clone_option_for_different_market)).first().isDisplayed().then(function(isVisible){
             expect(isVisible).toBe(true);
        });
        element.all(by.css(OR.locators.LogoutPage.original_option_for_different_market)).first().isDisplayed().then(function(isVisible){
             expect(isVisible).toBe(true);
        });
    };
    this.createNewTemplate = function(){
    	element(by.xpath(OR.locators.TemplatePage.click_template)).click();
        //element(by.css(OR.locators.LogoutPage.newtemplate_button)).click();
        //element(by.css(OR.locators.TemplatePage.preview_screen)).click();
        browser.driver.sleep(3000);

    };
    this.createNewStory = function(){
        element(by.css(OR.locators.LogoutPage.newstory_button)).click();
        element(by.css(OR.locators.TemplatePage.preview_screen)).click();
    };
    this.verifyTemplateEditPage = function(){
    	browser.driver.sleep(2000);
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtemplate);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(2000);
        element(by.xpath(OR.locators.LogoutPage.template_edit)).click();
        browser.driver.sleep(3000);
    };
this.searchTemplate = function(){
		
		element(by.id("dashboard-search-input")).sendKeys("verifying sections template");
		element(by.xpath("//button[contains(text(),'Search')]")).click();
		browser.driver.sleep(3000);
		//var dsp = element(by.xpath("//div/h3[text()='New Template123']")).isDisplayed();
		//expect(dsp).toBe(true);	

		};
		this.searchTemplate25 = function(){
			
			element(by.id("dashboard-search-input")).sendKeys("Verify P2P Mode template");
			element(by.xpath("//button[contains(text(),'Search')]")).click();
			browser.driver.sleep(6000);
			//var dsp = element(by.xpath("//div/h3[text()='New Template123']")).isDisplayed();
			//expect(dsp).toBe(true);	

			};
    this.verifyNewStoryCreationPage = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtemplate);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(2000);
        var text = element(by.xpath(OR.locators.LogoutPage.template_header)).click();
        browser.driver.sleep(5000);
        browser.switchTo().alert().accept();
    };
    this.verifyWorkingStories = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_story_working);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(10000);
        element(by.xpath(OR.locators.LogoutPage.working_story_status)).getText().then(function(requiredText){
             expect(requiredText).toEqual("WORKING");
        });
        element.all(by.css(".dashboard-snap-story-headline")).first().getCssValue('border-bottom-color').then(function(cssStyleProperty)
        {
             expect(cssStyleProperty).toBe("#555555");
        });
        element(by.css(OR.locators.LogoutPage.exit_search)).click();
    };
    this.verifyLiveStories = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_story_live);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(10000);
        element(by.xpath(OR.locators.LogoutPage.live_story_status)).getText().then(function(requiredText){
             expect(requiredText).toEqual("LIVE");
        });
        element.all(by.css(".dashboard-snap-story-headline")).first().getCssValue('border-bottom-color').then(function(cssStyleProperty)
        {
             expect(cssStyleProperty).toBe("#57BF6E");
        });
        element(by.css(OR.locators.LogoutPage.exit_search)).click();
    };
    this.verifyOTCStories = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_story_otc);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(10000);
        element(by.xpath(OR.locators.LogoutPage.otc_story_status)).getText().then(function(requiredText){
             expect(requiredText).toEqual("ON THE CLOCK");
        });
        element.all(by.css(".dashboard-snap-story-headline")).first().getCssValue('border-bottom-color').then(function(cssStyleProperty)
        {
             expect(cssStyleProperty).toBe("#ffff03");
        });
        element(by.css(OR.locators.LogoutPage.exit_search)).click();
    };
    this.verifyTemplates = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.searchtemplate);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(10000);
        element.all(by.css(".dashboard-snap-story-headline")).first().getCssValue('border-bottom-color').then(function(cssStyleProperty)
        {
             expect(cssStyleProperty).toBe("#4591B8");
        });
        element(by.css(OR.locators.LogoutPage.exit_search)).click();
    };
    this.verifyCloneOption = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(10000);
        element.all(by.css(OR.locators.LogoutPage.search_card)).first().isDisplayed().then(function(listVisible){
               expect(listVisible).toBe(true);
        });
        element.all(by.css(OR.locators.LogoutPage.clone_option)).first().isDisplayed().then(function(cloneVisible){
              expect(cloneVisible).toBe(true);
        });
        element.all(by.xpath(OR.locators.LogoutPage.clone_story_headline)).first().getAttribute("title").then(function(storytitle){
              expect(storytitle).toBe("Finalize test NG story. Headline updated after finalizing NG version123..updated - ny-finalize-test-ng-story-20180608");
        });
        browser.actions().mouseMove(element.all(by.css(OR.locators.LogoutPage.clone_option)).first()).perform();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.clone_option)).first().getCssValue('background-color').then(function(colour){
             expect(colour).toBe('rgba(69, 145, 184, 1)');
        });
        element.all(by.xpath(OR.locators.LogoutPage.clone_text)).first().getText().then(function(text){
             expect(text).toBe('CLONE');
        });
    };

    this.verifyCloneModal = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element.all(by.css(OR.locators.LogoutPage.clone_option)).first().click();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed().then(function(modalVisible){
            expect(modalVisible).toBe(true);
         });
         element(by.css(OR.locators.LogoutPage.embedded_items_checkbox)).isDisplayed().then(function(checkboxVisible){
            expect(checkboxVisible).toBe(true);
         });
         element(by.css(OR.locators.LogoutPage.lead_art_checkbox)).isDisplayed().then(function(leadartVisible){
            expect(leadartVisible).toBe(true);
         });
         element(by.css(OR.locators.LogoutPage.slug_input)).click();
         element(by.css(OR.locators.LogoutPage.cloneit_button)).getAttribute("class").then(function(classname){
                expect(classname).toBe("btn  btn-blue disabled");
         });
         element(by.xpath(OR.locators.LogoutPage.nevermind_button)).getText().then(function(text){
                expect(text).toEqual("Nevermind");
         });
         element(by.css(OR.locators.LogoutPage.slug_input)).getAttribute("value").then(function(slugvalue){
                var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
                expect(slugvalue).toBe("ny--" + utc);
         });
         element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
    };

    this.verifyCloneButtonIsEnabled = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element.all(by.css(OR.locators.LogoutPage.clone_option)).first().click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-lion-" + utc);
         element(by.css(OR.locators.LogoutPage.cloneit_button)).getAttribute("class").then(function(classname){
                expect(classname).toBe("btn  btn-blue");
         });
         element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
    };
    this.verifyCloneWithExistingSlug = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element.all(by.css(OR.locators.LogoutPage.clone_option)).first().click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-county-20180622");
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.LogoutPage.clone_error)).getText().then(function(err){
                expect(err).toEqual("SNAP wasn't able to clone this story because the slug 'ny-county-20180622' already exists in your market. Please try again with a different slug.");
         });
         element(by.css(OR.locators.LogoutPage.close_modal_error)).click();
    };
    this.verifyCloneWithRemovedMarketPrefix = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element.all(by.css(OR.locators.LogoutPage.clone_option)).first().click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("Tempo-" + utc);
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         element(by.xpath(OR.locators.LogoutPage.clone_alert_msg1)).getText().then(function(err){
                expect(err).toBe("The slug you are trying to clone does not have the proper convention.");
         });
         element(by.xpath(OR.locators.LogoutPage.clone_alert_msg2)).getText().then(function(err){
                expect(err).toBe("The slug should begin with one a valid prefix (ny-,nydn-) and end with a number (like a date).");
         });
         element(by.css(OR.locators.LogoutPage.close_modal_error)).click();
         element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
    };

     this.verifyCloneWithRemovedDatePostfix = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element.all(by.css(OR.locators.LogoutPage.clone_option)).first().click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-temp-");
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(1000);
         element(by.xpath(OR.locators.LogoutPage.clone_alert_msg1)).getText().then(function(err){
                expect(err).toBe("The slug you are trying to clone does not have the proper convention.");
         });
         element(by.xpath(OR.locators.LogoutPage.clone_alert_msg2)).getText().then(function(err){
                expect(err).toBe("The slug should begin with one a valid prefix (ny-,nydn-) and end with a number (like a date).");
         });
         element(by.css(OR.locators.LogoutPage.close_modal_error)).click();
         element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
    };

     this.verifyCloneWithRemovedMarketAndDate = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element.all(by.css(OR.locators.LogoutPage.clone_option)).first().click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("temp");
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(1000);
         element(by.xpath(OR.locators.LogoutPage.clone_alert_msg1)).getText().then(function(err){
                expect(err).toBe("The slug you are trying to clone does not have the proper convention.");
         });
         element(by.xpath(OR.locators.LogoutPage.clone_alert_msg2)).getText().then(function(err){
                expect(err).toBe("The slug should begin with one a valid prefix (ny-,nydn-) and end with a number (like a date).");
         });
         element(by.css(OR.locators.LogoutPage.close_modal_error)).click();
         element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
    };


     this.verifyCloneWithRemovedHyphen = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element.all(by.css(OR.locators.LogoutPage.clone_option)).first().click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("nytempo" + utc);
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(1000);
         element(by.xpath(OR.locators.LogoutPage.clone_alert_msg1)).getText().then(function(err){
                expect(err).toBe("The slug you are trying to clone does not have the proper convention.");
         });
         element(by.xpath(OR.locators.LogoutPage.clone_alert_msg2)).getText().then(function(err){
                expect(err).toBe("The slug should begin with one a valid prefix (ny-,nydn-) and end with a number (like a date).");
         });
         element(by.css(OR.locators.LogoutPage.close_modal_error)).click();
         element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
    };

     this.verifyCloneWithRemovedHyphenAndSpaces = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element.all(by.css(OR.locators.LogoutPage.clone_option)).first().click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-test story-" + utc);
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(2000);
         element(by.xpath("//div[@id='react-modal-message']/pre")).getText().then(function(errmsg){
             expect(errmsg).toBe('{"message":"Slug does not exist"}');
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.switchTo().alert().accept();
         browser.driver.sleep(2000);
    };

    this.verifyPinFunctionality = function(){
          element.all(by.xpath(OR.locators.LogoutPage.story_list_for_pinning)).getAttribute("class").then(function(classnames){
                for(i=0; i < classnames.length ; i++){
                    if(classnames[i] == "dashboard-snap-story "){
                        classnames[i] = "dashboard-snap-story pinned";
                        element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]//div[@class='hover-icon pin-box unpinned']")).click();
                        break;
                    }
                }
                browser.refresh();
                browser.driver.sleep(4000);
                element.all(by.xpath(OR.locators.LogoutPage.story_list_for_pinning)).getAttribute("class").then(function(newclassnames){
                      expect(newclassnames).toEqual(classnames);
                });
          });
    };
    this.verifyHoverOnPin = function(){
          element.all(by.xpath(OR.locators.LogoutPage.story_list_for_pinning)).getAttribute("class").then(function(classnames){
                for(i=0; i < classnames.length ; i++){
                    if(classnames[i] == "dashboard-snap-story "){
                        element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]//div[@class='hover-icon pin-box unpinned']")).click();
                        browser.actions().mouseMove(element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]//div[@class='hover-icon pin-box unpinned']"))).perform();
                        element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]//div")).getCssValue("background-color").then(function(colour){
                                      expect(colour).toBe("rgba(235, 62, 61, 1)");
                                 });
                         element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]/div/div/div/img")).getCssValue("color").then(function(colour){
                                       expect(colour).toBe("rgba(102, 102, 102, 1)");
                                  });
                        break;
                    }
                }
          });
    };

    this.verifyUnpin = function(){
          element.all(by.xpath(OR.locators.LogoutPage.story_list_for_pinning)).getAttribute("class").then(function(classnames){
                for(i=0; i < classnames.length ; i++){
                    if(classnames[i] == "dashboard-snap-story pinned"){
                        element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]//div[@class='hover-icon pin-box unpinned']")).click();
                         element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]/div/div/div/img")).getCssValue("color").then(function(colour){
                                       expect(colour).toBe("rgba(102, 102, 102, 1)");
                                  });
                        break;
                    }
                }
          });
    };

    this.verifyUnpinWithHover = function(){
          element.all(by.xpath(OR.locators.LogoutPage.story_list_for_pinning)).getAttribute("class").then(function(classnames){
                for(i=0; i < classnames.length ; i++){
                    if(classnames[i] == "dashboard-snap-story pinned"){
                        element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]//div[@class='hover-icon pin-box unpinned']")).click();
                        browser.actions().mouseMove(element(by.xpath("//div[@id='dashboard-story-holder-recent']/ul/li["+ (i+1) +"]//div[@class='hover-icon pin-box unpinned']"))).perform();
                         element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]/div/div/div")).getCssValue("background-color").then(function(colour){
                                expect(colour).toBe("rgba(235, 62, 61, 1)");
                         });
                         element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]/div/div/div/img")).getCssValue("color").then(function(colour){
                                expect(colour).toBe("rgba(102, 102, 102, 1)");
                         });
                         element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]/div/div/div/p")).getText().then(function(text){
                                expect(text).toBe("PIN");
                         });
                        break;
                    }
                }
          });

    };

    this.verifyPinWithMarket = function(){
          element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
          element(by.css(OR.locators.LogoutPage.searchicon)).click();
          browser.driver.sleep(7000);
          element.all(by.css("div[class='dashboard-text-box']")).first().getText().then(function(headline){
                element.all(by.css("div[class='hover-icon pin-box unpinned']")).first().click();
                element(by.css(OR.locators.LogoutPage.exit_search)).click();
                element.all(by.xpath(OR.locators.LogoutPage.story_list_for_pinning)).getAttribute("class").then(function(classnames){
                    for(i=0; i < classnames.length ; i++){
                        if(classnames[i] == "dashboard-snap-story pinned"){
                            element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]//div[@class='hover-icon pin-box unpinned']")).click();
                             element(by.xpath("//div[@id='dashboard-story-holder-recent']//li["+ (i+1) +"]/div/div/div/img")).getCssValue("color").then(function(colour){
                                           expect(colour).toBe("rgba(102, 102, 102, 1)");
                                      });
                            break;
                        }
                    }
                });
          });

    };

    this.verifyRedirectionToClonedStoryPage = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element.all(by.css(OR.locators.LogoutPage.clone_option)).first().click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).getAttribute("value").then(function(slugval){
                expect(slugval).toBe("ny--" + utc);
                element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-lion-" + utc);
                element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
                browser.driver.sleep(5000);
         });
         var pageTitle = baseObject.getPageTitle();
         expect(pageTitle).toBe("SNAP | Edit story | ny-lion-" + utc);
         var slugvalue = element(by.css(OR.locators.StoryPage.slug_field)).getText();
         expect(slugvalue).toBe("ny-lion-" + utc);
         browser.driver.sleep(1000);
         browser.navigate().back();
    };

    this.verifyCloningWithoutEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_story_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath(OR.locators.LogoutPage.clone_story_with_multiple_widgets)).click();
         browser.driver.sleep(5000);
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-automation-" + utc);
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css(OR.locators.StoryPage.headline)).sendKeys("testing");
         element(by.css(OR.locators.StoryPage.sections)).click();
         element(by.css(OR.locators.StoryPage.add_section)).click();
         element(by.css(OR.locators.StoryPage.section_input_name)).sendKeys("/s");
         browser.driver.sleep(2000);
         element(by.css(OR.locators.StoryPage.section_selected)).click();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(7000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.exit_search)).click();
         browser.driver.sleep(60000);
         element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_clone_story_with_multiple_widgets);
         browser.driver.sleep(2000);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element.all(by.css(OR.locators.LogoutPage.search_card)).first().click();
         browser.driver.sleep(10000);
         element(by.xpath(OR.locators.StoryPage.widget_texts)).getText().then(function(widget_type){
                expect(widget_type).toEqual("TEXT - PRESIDENT TRUMP IS W...");
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningWithEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_story_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath(OR.locators.LogoutPage.clone_story_with_multiple_widgets)).click();
         browser.driver.sleep(5000);
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-auto-test-" + utc);
         element(by.css(OR.locators.LogoutPage.embedded_items_checkbox)).click();
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css(OR.locators.StoryPage.headline)).sendKeys("testing");
         element(by.css(OR.locators.StoryPage.sections)).click();
         element(by.css(OR.locators.StoryPage.add_section)).click();
         element(by.css(OR.locators.StoryPage.section_input_name)).sendKeys("/s");
         browser.driver.sleep(2000);
         element(by.css(OR.locators.StoryPage.section_selected)).click();
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.StoryPage.image_widget)).click();
         element(by.css(OR.locators.StoryPage.image_caption)).getAttribute("value").then(function(imgval){
                element(by.css(OR.locators.StoryPage.image_caption)).clear().sendKeys(imgval.slice(0,250));
         });
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(7000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.exit_search)).click();
         browser.driver.sleep(80000);
         element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_clone_story_with_multiple_widgets);
         browser.driver.sleep(2000);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element.all(by.css(OR.locators.LogoutPage.search_card)).first().click();
         browser.driver.sleep(10000);
         element.all(by.xpath(OR.locators.StoryPage.widget_texts)).getText().then(function(widget_type){
                expect(widget_type).toEqual(["'TEXT - PRESIDENT TRUMP IS W...', 'QUOTE', 'IMAGE', 'EMBEDDED VIDEO', 'TEXT - SEE MORE &#187;...', 'P2PEMBED', 'TWEET', 'EMBEDDED VIDEO', 'IMAGE', 'P2PEMBED', 'P2PEMBED', 'P2PEMBED', 'P2PEMBED', 'P2PEMBED', 'TEXT - UPDATES:2018-08-28 1...'"]);
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningTemplateWithEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_template_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath(OR.locators.LogoutPage.clone_template_with_multiple_widgets)).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-mango-" + utc);
         element(by.css(OR.locators.LogoutPage.embedded_items_checkbox)).click();
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css(OR.locators.StoryPage.headline)).sendKeys("testing");
         element(by.css(OR.locators.StoryPage.sections)).click();
         element(by.css(OR.locators.StoryPage.add_section)).click();
         element(by.css(OR.locators.StoryPage.section_input_name)).sendKeys("/s");
         browser.driver.sleep(2000);
         element(by.css(OR.locators.StoryPage.section_selected)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(7000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.exit_search)).click();
         browser.driver.sleep(80000);
         element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_clone_template_with_multiple_widgets);
         browser.driver.sleep(2000);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element.all(by.css(OR.locators.LogoutPage.search_card)).first().click();
         browser.driver.sleep(10000);
         element.all(by.xpath(OR.locators.StoryPage.widget_texts)).getText().then(function(widget_type){
                expect(widget_type).toEqual(["'TEXT - PRESIDENT TRUMP IS W...', 'QUOTE', 'IMAGE', 'EMBEDDED VIDEO', 'TEXT - SEE MORE &#187;...', 'P2PEMBED', 'EMBEDDED VIDEO', 'TWEET', 'P2PEMBED', 'P2PEMBED', 'P2PEMBED', 'P2PEMBED', 'P2PEMBED', 'IMAGE - SEARCH UPLOAD CROP EDIT ORIGINAL'"]);
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningTemplateWithoutEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_template_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath(OR.locators.LogoutPage.clone_template_with_multiple_widgets)).click();
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-animal-" + utc);
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css(OR.locators.StoryPage.headline)).sendKeys("testing");
         element(by.css(OR.locators.StoryPage.sections)).click();
         element(by.css(OR.locators.StoryPage.add_section)).click();
         element(by.css(OR.locators.StoryPage.section_input_name)).sendKeys("/s");
         browser.driver.sleep(2000);
         element(by.css(OR.locators.StoryPage.section_selected)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(7000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.exit_search)).click();
         browser.driver.sleep(80000);
         element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_clone_template_with_multiple_widgets);
         browser.driver.sleep(2000);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element.all(by.css(OR.locators.LogoutPage.search_card)).first().click();
         browser.driver.sleep(10000);
         element.all(by.xpath(OR.locators.StoryPage.widget_texts)).getText().then(function(widget_type){
                expect(widget_type).toEqual(["TEXT - PRESIDENT TRUMP IS W..."]);
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyNeverMindButton = function(){
        element(by.css(OR.locators.LogoutPage.clone_option)).click();
        element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed().then(function(isVisible){
            expect(isVisible).toBe(true);
        });
        element(by.xpath(OR.locators.LogoutPage.nevermind_clone_modal)).click();
        browser.driver.sleep(3000);
        element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed().then(function(isVisible){
            expect(isVisible).toBe(false);
        });
        browser.driver.sleep(2000);
    };

    this.verifyCloningSimpleStoryWithEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_simplestory_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath("//ul[@class='dashboard-snap-stories-list']/li[@data-slug='ny-simple-story-with-multiple-widgets-for-automation-20180828']/div/div/div[2]")).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-maruti-" + utc);
         element(by.css("input[id='keep-embeds']")).click();
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css("input[name='headline']")).sendKeys("testing");
         element(by.css("h2[data-expand='sections']")).click();
         element(by.css("button[name='add-section']")).click();
         element(by.css("input[placeholder='Type to search Arc sections...']")).sendKeys("/s");
         browser.driver.sleep(2000);
         element(by.css("div[name='/sports']")).click();
         browser.driver.sleep(3000);
         element(by.css("button[id='save']")).click();
         element(by.css("button[id='save-without-deadline']")).click();
         browser.driver.sleep(7000);
         element(by.css("div[class='alert pop banner success']")).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.exit_search)).click();
         browser.driver.sleep(80000);
         element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_clone_simplestory_with_multiple_widgets);
         browser.driver.sleep(2000);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element.all(by.css(OR.locators.LogoutPage.search_card)).first().click();
         browser.driver.sleep(10000);
         element.all(by.xpath("//div[@id='editor']/li/form/h2")).getText().then(function(widget_type){
                expect(widget_type).toEqual(["'TEXT - PRESIDENT TRUMP IS W...', 'QUOTE', 'TEXT - INFO TITLEINFO TEXT...', 'IMAGE', 'EMBEDDED VIDEO', 'TEXT - SEE MORE &#187;...', 'EMBEDDED VIDEO', 'P2PEMBED', 'TWEET', 'P2PEMBED', 'P2PEMBED', 'P2PEMBED', 'P2PEMBED', 'IMAGE', 'TEXT - THIS IS A TAGLINE FI...'"]);
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningSimpleStoryWithoutEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_simplestory_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath("//ul[@class='dashboard-snap-stories-list']/li[@data-slug='ny-simple-story-with-multiple-widgets-for-automation-20180828']/div/div/div[2]")).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-automation-testing-" + utc);
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css("input[name='headline']")).sendKeys("testing");
         element(by.css("h2[data-expand='sections']")).click();
         element(by.css("button[name='add-section']")).click();
         element(by.css("input[placeholder='Type to search Arc sections...']")).sendKeys("/s");
         browser.driver.sleep(2000);
         element(by.css("div[name='/sports']")).click();
         browser.driver.sleep(3000);
         element(by.css("button[id='save']")).click();
         element(by.css("button[id='save-without-deadline']")).click();
         browser.driver.sleep(7000);
         element(by.css("div[class='alert pop banner success']")).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.exit_search)).click();
         browser.driver.sleep(80000);
         element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_clone_simplestory_with_multiple_widgets);
         browser.driver.sleep(2000);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element.all(by.css(OR.locators.LogoutPage.search_card)).first().click();
         browser.driver.sleep(10000);
         element.all(by.xpath("//div[@id='editor']/li/form/h2")).getText().then(function(widget_type){
                expect(widget_type).toEqual(["TEXT - PRESIDENT TRUMP IS W..."]);
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningHTMLStoryWithEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_htmlstory_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath("//ul[@class='dashboard-snap-stories-list']/li[@data-slug='ny-html-story-with-multiple-widgets-for-automation-20180828']/div/div/div[2]")).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-apple-" + utc);
         element(by.css("input[id='keep-embeds']")).click();
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css("input[name='headline']")).sendKeys("testing");
         element(by.css("h2[data-expand='sections']")).click();
         element(by.css("button[name='add-section']")).click();
         element(by.css("input[placeholder='Type to search Arc sections...']")).sendKeys("/s");
         browser.driver.sleep(2000);
         element(by.css("div[name='/sports']")).click();
         browser.driver.sleep(3000);
         element(by.css("button[id='save']")).click();
         element(by.css("button[id='save-without-deadline']")).click();
         browser.driver.sleep(7000);
         element(by.css("div[class='alert pop banner success']")).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.exit_search)).click();
         browser.driver.sleep(80000);
         element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_clone_htmlstory_with_multiple_widgets);
         browser.driver.sleep(2000);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element.all(by.css(OR.locators.LogoutPage.search_card)).first().click();
         browser.driver.sleep(10000);
         element.all(by.xpath("//div[@id='editor']/li/form/h2")).getText().then(function(widget_type){
                expect(widget_type).toEqual(["HTML"]);
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningHTMLStoryWithoutEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_htmlstory_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath("//ul[@class='dashboard-snap-stories-list']/li[@data-slug='ny-html-story-with-multiple-widgets-for-automation-20180828']/div/div/div[2]")).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-oreo-" + utc);
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css("input[name='headline']")).sendKeys("testing");
         element(by.css("h2[data-expand='sections']")).click();
         element(by.css("button[name='add-section']")).click();
         element(by.css("input[placeholder='Type to search Arc sections...']")).sendKeys("/s");
         browser.driver.sleep(2000);
         element(by.css("div[name='/sports']")).click();
         browser.driver.sleep(3000);
         element(by.css("button[id='save']")).click();
         element(by.css("button[id='save-without-deadline']")).click();
         browser.driver.sleep(7000);
         element(by.css("div[class='alert pop banner success']")).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.exit_search)).click();
         browser.driver.sleep(80000);
         element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_clone_htmlstory_with_multiple_widgets);
         browser.driver.sleep(2000);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element.all(by.css(OR.locators.LogoutPage.search_card)).first().click();
         browser.driver.sleep(10000);
         element.all(by.xpath("//div[@id='editor']/li/form/h2")).getText().then(function(widget_type){
                expect(widget_type).toEqual(["HTML"]);
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningRightRailStoryWithEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_rightrailstory_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath("//ul[@class='dashboard-snap-stories-list']/li[@data-slug='ny-right-rail-story-with-multiple-widgets-for-automation-20180828']/div/div/div[2]")).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-letstry-" + utc);
         element(by.css("input[id='keep-embeds']")).click();
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css("input[name='headline']")).sendKeys("testing");
         element(by.xpath("//div[@id='editor']/li[3]/form")).click();
         element(by.css("input[name='caption']")).getAttribute("value").then(function(imgval){
                element(by.css("input[name='caption']")).clear().sendKeys(imgval.slice(0,250));
         });
         browser.driver.sleep(3000);
         element(by.css("button[id='save']")).click();
         browser.driver.sleep(8000);
         element(by.css("div[class='alert pop banner success']")).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.exit_search)).click();
         browser.driver.sleep(80000);
         element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_clone_rightrailstory_with_multiple_widgets);
         browser.driver.sleep(2000);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element.all(by.css(OR.locators.LogoutPage.search_card)).first().click();
         browser.driver.sleep(10000);
         element.all(by.xpath("//div[@id='editor']/li/form/h2")).getText().then(function(widget_type){
                expect(widget_type).toEqual(["'TEXT - PRESIDENT TRUMP IS W...','QUOTE','IMAGE','EMBEDDED VIDEO','TEXT - SEE MORE &#187;...','P2PEMBED','TWEET','EMBEDDED VIDEO','IMAGE','P2PEMBED','P2PEMBED','P2PEMBED','P2PEMBED','P2PEMBED','TEXT - UPDATES:2018-08-28 1...'"]);
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningRightRailStoryWithoutEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_rightrailstory_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath("//ul[@class='dashboard-snap-stories-list']/li[@data-slug='ny-right-rail-story-with-multiple-widgets-for-automation-20180828']/div/div/div[2]")).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-automation-testing-rightrail-" + utc);
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css("input[name='headline']")).sendKeys("testing");
         element(by.css("button[id='save']")).click();
         browser.driver.sleep(7000);
         element(by.css("div[class='alert pop banner success']")).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.exit_search)).click();
         browser.driver.sleep(80000);
         element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_clone_rightrailstory_with_multiple_widgets);
         browser.driver.sleep(2000);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element.all(by.css(OR.locators.LogoutPage.search_card)).first().click();
         browser.driver.sleep(10000);
         element.all(by.xpath("//div[@id='editor']/li/form/h2")).getText().then(function(widget_type){
                expect(widget_type).toEqual(["TEXT - PRESIDENT TRUMP IS W..."]);
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningFullWidthStoryWithEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_fullwidthstory_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath("//ul[@class='dashboard-snap-stories-list']/li[@data-slug='ny-full-width-story-with-multiple-widgets-for-automation-20180828']/div/div/div[2]")).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-automate-with-testing-" + utc);
         element(by.css("input[id='keep-embeds']")).click();
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css("button[id='save']")).click();
         element(by.css("button[id='save-without-deadline']")).click();
         browser.driver.sleep(7000);
         element(by.css("div[class='alert pop banner success']")).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe("fhg");
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.exit_search)).click();
         browser.driver.sleep(80000);
         element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_clone_fullwidthstory_with_multiple_widgets);
         browser.driver.sleep(2000);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element.all(by.css(OR.locators.LogoutPage.search_card)).first().click();
         browser.driver.sleep(10000);
         element.all(by.xpath("//div[@id='editor']/li/form/h2")).getText().then(function(widget_type){
                expect(widget_type).toEqual(["HTML"]);
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningFullWidthStoryWithoutEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_fullwidthstory_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath("//ul[@class='dashboard-snap-stories-list']/li[@data-slug='ny-full-width-story-with-multiple-widgets-for-automation-20180828']/div/div/div[2]")).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-automation-testing-" + utc);
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css("button[id='save']")).click();
         element(by.css("button[id='save-without-deadline']")).click();
         browser.driver.sleep(7000);
         element(by.css("div[class='alert pop banner success']")).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe("fhg");
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
         element(by.css(OR.locators.LogoutPage.exit_search)).click();
         browser.driver.sleep(80000);
         element(by.css(OR.locators.LogoutPage.searchbar)).clear().sendKeys(OR.locators.data.search_clone_fullwidthstory_with_multiple_widgets);
         browser.driver.sleep(2000);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element.all(by.css(OR.locators.LogoutPage.search_card)).first().click();
         browser.driver.sleep(10000);
         element.all(by.xpath("//div[@id='editor']/li/form/h2")).getText().then(function(widget_type){
                expect(widget_type).toEqual(["HTML"]);
         });
         browser.driver.sleep(2000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyOriginalStory = function(){

    };

    this.verifyCloningPublishedStoryWithEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_published_story_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         browser.refresh();
         browser.driver.sleep(7000);
         element(by.xpath("//li[@data-slug='ny-test-the-fruit-20180627']/div/div/div[2]")).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-automation-testing-" + utc);
         element(by.css("input[id='keep-embeds']")).click();
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css("button[id='save']")).click();
         element(by.css("button[id='save-without-deadline']")).click();
         browser.driver.sleep(7000);
         element(by.css("div[class='alert pop banner success']")).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe("fhg");
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningPublishedStoryWithoutEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_published_story_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         browser.refresh();
         browser.driver.sleep(7000);
         element(by.xpath("//li[@data-slug='ny-test-the-fruit-20180627']/div/div/div[2]")).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-automation-testing-" + utc);
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css("button[id='save']")).click();
         element(by.css("button[id='save-without-deadline']")).click();
         browser.driver.sleep(7000);
         element(by.css("div[class='alert pop banner success']")).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe("fhg");
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningOTCStoryWithEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_otc_story_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         browser.refresh();
         browser.driver.sleep(7000);
         element(by.xpath("//li[@data-slug='ny-test-the-fruit-20180627']/div/div/div[2]")).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-automation-testing-" + utc);
         element(by.css("input[id='keep-embeds']")).click();
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css("button[id='save']")).click();
         element(by.css("button[id='save-without-deadline']")).click();
         browser.driver.sleep(7000);
         element(by.css("div[class='alert pop banner success']")).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe("fhg");
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyCloningOTCStoryWithoutEmbeddedItems = function(){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.search_otc_story_with_multiple_widgets);
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(10000);
         element(by.xpath("//li[@data-slug='ny-test-the-fruit-20180627']/div/div/div[2]")).click();
         browser.driver.sleep(5000);
         expect(element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed()).toBeTruthy();
         var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
         element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-automation-testing-" + utc);
         element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
         browser.driver.sleep(10000);
         element(by.css("button[id='save']")).click();
         element(by.css("button[id='save-without-deadline']")).click();
         browser.driver.sleep(7000);
         element(by.css("div[class='alert pop banner success']")).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe("fhg");
         });
         browser.driver.sleep(3000);
         browser.navigate().back();
         browser.driver.sleep(5000);
    };

    this.verifyOptionsBelowStory = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.clone_option_for_different_market)).first().isDisplayed().then(function(cloneButtonVisible){
            expect(cloneButtonVisible).toBe(true);
        });
        element.all(by.css(OR.locators.LogoutPage.original_option_for_different_market)).first().isDisplayed().then(function(originalButtonVisible){
            expect(originalButtonVisible).toBe(true);
        });
    };

    this.verifyDisabledCloneButton = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.clone_option_for_different_market)).first().click();
        browser.driver.sleep(2000);
        element(by.css("div[id='react-modal-box']")).isDisplayed().then(function(modalVisible){
            expect(modalVisible).toBe(true);
        });
        element(by.css("button[id='clone-story']")).getAttribute("class").then(function(cloneclass){
            expect(cloneclass).toBe("btn  btn-blue disabled");
        });
        element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
    };

    this.verifySlugField = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.clone_option_for_different_market)).first().click();
        browser.driver.sleep(2000);
        var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
        element(by.css(OR.locators.LogoutPage.slug_input)).getAttribute("value").then(function(slugval){
            expect(slugval).toBe("ny--" + utc);
        });
        element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
    };

    this.verifyCloningStoriesWithAllItems = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys("test for water");
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element(by.xpath(OR.locators.LogoutPage.story_to_be_cloned_for_all_items)).click();
        browser.driver.sleep(2000);
        var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
        element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-testngwatery-" + utc);
        element(by.css(OR.locators.LogoutPage.embedded_items_checkbox)).click();
        element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
        browser.driver.sleep(10000);
        element(by.css(OR.locators.StoryPage.headline)).sendKeys("testing");
        var pageTitle = baseObject.getPageTitle();
        expect(pageTitle).toBe("SNAP | Edit story | ny-testngwatery-" + utc);
        element.all(by.xpath(OR.locators.StoryPage.widget_texts)).getText().then(function(widget_type){
                expect(widget_type).toEqual(['TEXT - TEST FOR TEXT WIDGET...', 'EMBEDDED VIDEO - INSTRUCTIONS']);
        });
        browser.driver.sleep(2000);
        browser.navigate().back();
        browser.switchTo().alert().accept();
        browser.driver.sleep(4000);
    };

    this.verifyStatusOnCloningPublishedStory = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys("test live ci");
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element(by.xpath(OR.locators.LogoutPage.published_story_with_multiple_widgets)).click();
        browser.driver.sleep(2000);
        var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
        element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-melon-" + utc);
        element(by.css(OR.locators.LogoutPage.embedded_items_checkbox)).click();
        element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
        browser.driver.sleep(10000);
        element(by.css(OR.locators.StoryPage.headline)).sendKeys("testing");
        var pageTitle = baseObject.getPageTitle();
        expect(pageTitle).toBe("SNAP | Edit story | ny-melon-" + utc);
        element.all(by.xpath(OR.locators.StoryPage.widget_texts)).getText().then(function(widget_type){
                expect(widget_type).toEqual(['TEXT - TEXT FOR TEST...', 'QUOTE']);
        });
        element(by.css(OR.locators.StoryPage.state)).getAttribute("value").then(function(status){
            expect(status).toBe("working");
        });
        browser.driver.sleep(2000);
        browser.navigate().back();
        browser.switchTo().alert().accept();
        browser.driver.sleep(4000);
    };
    this.verifyErrorOnEmptySlug = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.clone_option_for_different_market)).first().click();
        browser.driver.sleep(2000);
        element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("");
        element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
        element(by.xpath(OR.locators.LogoutPage.clone_alert_msg1)).getText().then(function(err){
               expect(err).toBe("The slug you are trying to clone does not have the proper convention.");
        });
        element(by.xpath(OR.locators.LogoutPage.clone_alert_msg2)).getText().then(function(err){
               expect(err).toBe("The slug should begin with one a valid prefix (ny-,nydn-) and end with a number (like a date).");
        });
        browser.driver.sleep(2000);
        element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
    };

    this.verifyErrorOnSlugWithoutDate = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.clone_option_for_different_market)).first().click();
        browser.driver.sleep(2000);
        var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
        element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny--");
        element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
        element(by.xpath(OR.locators.LogoutPage.clone_alert_msg1)).getText().then(function(err){
               expect(err).toBe("The slug you are trying to clone does not have the proper convention.");
        });
        element(by.xpath(OR.locators.LogoutPage.clone_alert_msg2)).getText().then(function(err){
               expect(err).toBe("The slug should begin with one a valid prefix (ny-,nydn-) and end with a number (like a date).");
        });
        browser.driver.sleep(2000);
        element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
    };

    this.verifyErrorOnInvalidSlug = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.clone_option_for_different_market)).first().click();
        browser.driver.sleep(2000);
        var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
        element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("nytesting" + utc);
        element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
        element(by.xpath(OR.locators.LogoutPage.clone_alert_msg1)).getText().then(function(err){
               expect(err).toBe("The slug you are trying to clone does not have the proper convention.");
        });
        element(by.xpath(OR.locators.LogoutPage.clone_alert_msg2)).getText().then(function(err){
               expect(err).toBe("The slug should begin with one a valid prefix (ny-,nydn-) and end with a number (like a date).");
        });
        browser.driver.sleep(2000);
        element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
    };

    this.verifyEmbeddedItemsCheckbox = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.clone_option_for_different_market)).first().click();
        browser.driver.sleep(2000);
        element(by.css(OR.locators.LogoutPage.embedded_items_checkbox)).isSelected().then(function(checkboxChecked){
            expect(checkboxChecked).toBe(false);
        });
        browser.driver.sleep(2000);
        element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
    };

    this.verifyEmbeddedItemsCheckboxChecked = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys("test live ci");
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element(by.xpath(OR.locators.LogoutPage.published_story_with_multiple_widgets)).click();
        browser.driver.sleep(2000);
        var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
        element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-apple-" + utc);
        element(by.css(OR.locators.LogoutPage.embedded_items_checkbox)).click();
        element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
        browser.driver.sleep(10000);
        element(by.css(OR.locators.StoryPage.headline)).sendKeys("testing");
        var pageTitle = baseObject.getPageTitle();
        expect(pageTitle).toBe("SNAP | Edit story | ny-apple-" + utc);
        element.all(by.xpath(OR.locators.StoryPage.widget_texts)).getText().then(function(widget_type){
                expect(widget_type).toEqual(['TEXT - TEXT FOR TEST...', 'QUOTE']);
        });
        browser.driver.sleep(2000);
        browser.navigate().back();
        browser.switchTo().alert().accept();
        browser.driver.sleep(4000);
    };

    this.verifyEmbeddedItemsCheckboxUnchecked = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys("test live ci");
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element(by.xpath(OR.locators.LogoutPage.published_story_with_multiple_widgets)).click();
        browser.driver.sleep(2000);
        var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
        element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-orange-" + utc);
        element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
        browser.driver.sleep(10000);
        element(by.css(OR.locators.StoryPage.headline)).sendKeys("testing");
        var pageTitle = baseObject.getPageTitle();
        expect(pageTitle).toBe("SNAP | Edit story | ny-orange-" + utc);
        element.all(by.xpath(OR.locators.StoryPage.widget_texts)).getText().then(function(widget_type){
                expect(widget_type).toEqual(['TEXT - TEXT FOR TEST...']);
        });
        browser.driver.sleep(2000);
        browser.navigate().back();
        browser.switchTo().alert().accept();
        browser.driver.sleep(4000);
    };

    this.verifyErrorWithExistingSlug = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.clone_option_for_different_market)).first().click();
        browser.driver.sleep(2000);
        element(by.css(OR.locators.LogoutPage.slug_input)).clear().sendKeys("ny-county-20180622");
        element(by.css(OR.locators.LogoutPage.cloneit_button)).click();
        browser.driver.sleep(3000);
        element(by.xpath(OR.locators.LogoutPage.clone_error)).getText().then(function(err){
               expect(err).toEqual("SNAP wasn't able to clone this story because the slug 'ny-county-20180622' already exists in your market. Please try again with a different slug.");
        });
        element(by.css(OR.locators.LogoutPage.close_modal_error)).click();
        browser.driver.sleep(2000);
    };

    this.verifyCancelingCloning = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.clone_option_for_different_market)).first().click();
        browser.driver.sleep(2000);
        element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed().then(function(modalVisible){
           expect(modalVisible).toBe(true);
        });
        element(by.xpath(OR.locators.LogoutPage.nevermind_button)).click();
        browser.driver.sleep(2000);
        element(by.css(OR.locators.LogoutPage.clone_modal)).isDisplayed().then(function(modalVisible){
           expect(modalVisible).toBe(false);
        });
    };
    this.verifyOriginalStoryIsNotChanged = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.original_option_for_different_market)).first().click();
    };
    this.verifySNAPLogoTooltip = function(){
        element(by.css(OR.locators.StoryPage.snap_icon)).getAttribute("title").then(function(snaptitle){
              expect(snaptitle).toBe("Simple News Assembly Platform");
        });

    };

    this.verifySLACKLogoTooltip = function(){
        element(by.css(OR.locators.LogoutPage.slack_logo)).getAttribute("title").then(function(slacktitle){
              expect(slacktitle).toBe("Slack User");
        });

    };

    this.verifyMarketTooltip = function(){
        element(by.xpath("//span[@class='ui-combobox']/button")).getAttribute("title").then(function(markettitle){
              expect(markettitle).toBe("Show All Items");
        });

    };

    this.verifyTemplateTooltip = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtemplate);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(2000);
        element(by.xpath("//li[@data-slug='ny-test-tronc-template-20180622']/div[1]")).getAttribute("title").then(function(templatetitle){
              expect(templatetitle).toBe("Create a new story from this template");
        });
    };

    this.verifyStoryTooltip = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(2000);
        element(by.xpath("//li[@data-slug='ny-test-headline-test-20180425']/div[1]")).getAttribute("title").then(function(storytitle){
              expect(storytitle).toBe("Test story headline - ny-test-headline-test-20180425");
        });

    };

    this.verifyTemplateEditTooltip = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtemplate);
        element(by.css(OR.locators.LogoutPage.searchicon)).click();
        browser.driver.sleep(2000);
        element(by.xpath("//li[@data-slug='ny-test-tronc-template-20180622']//td[@class='dashboard-search-result-action-button dashboard-user-template-open']")).getAttribute("title").then(function(templatetitle){
              expect(templatetitle).toBe("Edit this template");
        });
    };

    this.verifyDifferentMarketTooltip = function(){
        element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys(OR.locators.data.searchtext);
        element(by.css(OR.locators.LogoutPage.marketname_input)).clear();
        element(by.css(OR.locators.LogoutPage.marketname_input)).sendKeys("Los");
        element(by.xpath(OR.locators.LogoutPage.market_latimes)).click();
        element(by.css(OR.locators.LogoutPage.search_button)).click();
        browser.driver.sleep(7000);
        element.all(by.css(OR.locators.LogoutPage.clone_option_for_different_market)).first().getAttribute("title").then(function(clonetitle){
              expect(clonetitle).toBe("Clone this story");
        });
        element.all(by.css(OR.locators.LogoutPage.original_option_for_different_market)).first().getAttribute("title").then(function(originaltitle){
              expect(originaltitle).toBe("Try to open the original story in the owner's SNAP site.");
        });
    };
};

module.exports = new HomePage
