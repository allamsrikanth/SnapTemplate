var OR = require('../json/OR_new_york.json');
var baseObject = require('../pages/BasePage.js');
require('../utilities/customlocators.js');
require('../utilities/select-wrapper.js');

var PriorityPage=function () {

    this.secondLogin = function () {
         element(by.css(OR.locators.LoginPage.username)).sendKeys(OR.locators.data.admin_username);
         element(by.css(OR.locators.LoginPage.password)).sendKeys(OR.locators.data.password);
         element(by.css(OR.locators.LoginPage.button)).click();
    };

    this.verifyBasicIconsAndUsername = function(){
        element(by.css(OR.locators.StoryPage.new_story_button)).click();
        browser.driver.sleep(4000);
        element(by.css(OR.locators.StoryPage.snap_icon)).isDisplayed().then(function(imgVisible){
            expect(imgVisible).toBe(true);
            if(imgVisible){
            }else{
                console.log("SNAP icon is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.version_number)).isDisplayed().then(function(versionVisible){
            expect(versionVisible).toBe(true);
            if(versionVisible){
            }else{
                console.log("Version number is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.snap_username)).isDisplayed().then(function(usernameVisible){
            expect(usernameVisible).toBe(true);
            if(usernameVisible){
            }else{
                console.log("username is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.options_dropdown)).isDisplayed().then(function(optionsVisible){
            expect(optionsVisible).toBe(true);
            if(optionsVisible){
            }else{
                console.log("Options dropdown is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.home_icon)).isDisplayed().then(function(homeVisible){
            expect(homeVisible).toBe(true);
            if(homeVisible){
            }else{
                console.log("Home icon is not visible");
            }
        });
    };

    this.verifyHeadlineAndByline = function(){
        element(by.css(OR.locators.StoryPage.headline)).isDisplayed().then(function(headlineVisible){
            expect(headlineVisible).toBe(true);
            if(headlineVisible){
            }else{
                console.log("Headline is not visible");
            }
        });
        element(by.xpath(OR.locators.StoryPage.byline)).isDisplayed().then(function(bylineVisible){
            expect(bylineVisible).toBe(true);
            if(bylineVisible){
            }else{
                console.log("byline field is not visible");
            }
        });
    };

    this.verifyCopyEditorAndSlug = function(){
        element(by.css(OR.locators.StoryPage.copy_editor)).isDisplayed().then(function(ceditorVisible){
            expect(ceditorVisible).toBe(true);
            if(ceditorVisible){
            }else{
               console.log("copy editor is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.slug_field)).isDisplayed().then(function(slugVisible){
            expect(slugVisible).toBe(true);
            if(slugVisible){
            }else{
                console.log("Slug input is not visible");
            }
        });

    };


    this.verifySEO = function(){
        element(by.css(OR.locators.StoryPage.description)).isDisplayed().then(function(descriptionVisible){
            expect(descriptionVisible).toBe(true);
            if(descriptionVisible){
            }else{
                console.log("SEO Description is not visible");
            }
        });
        element(by.xpath(OR.locators.StoryPage.seo_keywords)).isDisplayed().then(function(keywordsVisible){
            expect(keywordsVisible).toBe(true);
            if(keywordsVisible){
            }else{
                console.log("SEO Keywords is not visible");
            }
        });
    };

    this.verifyStoryType = function(){
        element(by.css(OR.locators.StoryPage.story_type)).isDisplayed().then(function(storytypeVisible){
            expect(storytypeVisible).toBe(true);
            if(storytypeVisible){
            }else{
                console.log("Story Type is not visible");
            }
            element(by.css(OR.locators.StoryPage.story_type)).click();
            var values = element(by.css(OR.locators.StoryPage.story_type)).all(by.tagName('option')).getText();
            expect(values).toEqual(['Simple Story', 'HTMLStory', 'Big Story']);
        });
    };

    this.verifyBasicBuild = function(basic_build_options){
        element(by.css(OR.locators.StoryPage.build_type)).isDisplayed().then(function(buildtypeVisible){
            expect(buildtypeVisible).toBe(true);
            if(buildtypeVisible){
            }else{
                console.log("Build Type is not visible");
            }
            element(by.css(OR.locators.StoryPage.build_type)).click();
            var temparr = basic_build_options.split(",");
            console.log(temparr);
            var values = element(by.css(OR.locators.StoryPage.build_type)).all(by.tagName('option')).getText();
            expect(values).toEqual(temparr);
        });
    };

    this.verifyCollectionsAndUpdates = function(){
        element(by.xpath(OR.locators.StoryPage.collections)).isDisplayed().then(function(collectionsVisible){
            expect(collectionsVisible).toBe(true);
            if(collectionsVisible){
            }else{
                console.log("Collections is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.updates)).isDisplayed().then(function(updatesVisible){
            element(by.css(OR.locators.StoryPage.updates)).click();
            element(by.css(OR.locators.StoryPage.updates_editor)).isDisplayed().then(function(updateseditorVisible){
                expect(updateseditorVisible).toBe(true);
                if(updateseditorVisible){
                }else{
                    console.log("Updates Editor is not visible");
                }
            });
            element(by.css(OR.locators.StoryPage.updates)).click();
        });
    };

    this.verifyEditorsNote = function(){
        element(by.css(OR.locators.StoryPage.editornote)).isDisplayed().then(function(editornoteVisible){
            element(by.css(OR.locators.StoryPage.editornote)).click();
            element(by.css(OR.locators.StoryPage.editor_textarea)).isDisplayed().then(function(editorVisible){
                expect(editorVisible).toBe(true);
                if(editorVisible){
                }else{
                    console.log("Editor note is not visible");
                }
            });
        });
    };

    this.verifyMultipleDates = function(){
        element(by.css(OR.locators.StoryPage.display_date)).isDisplayed().then(function(dateVisible){
            expect(dateVisible).toBe(true);
            if(dateVisible){
            }else{
                console.log("Display Date is not visible");
            }
            element(by.css(OR.locators.StoryPage.display_date)).click();
            element(by.css(OR.locators.StoryPage.datepicker)).isDisplayed().then(function(datepickerVisible){
                expect(datepickerVisible).toBe(true);
                if(datepickerVisible){
                }else{
                    console.log("display datepicker is not visible");
                }
            });
        });
        element(by.css(OR.locators.StoryPage.otc_date)).isDisplayed().then(function(otcVisible){
            expect(otcVisible).toBe(true);
            if(otcVisible){
            }else{
                console.log("On the Clock is not visible");
            }
            element(by.css(OR.locators.StoryPage.otc_date)).click();
            element(by.css(OR.locators.StoryPage.datepicker)).isDisplayed().then(function(datepickerVisible){
                expect(datepickerVisible).toBe(true);
                if(datepickerVisible){
                }else{
                    console.log("OTC date picker is not visible");
                }
            });
        });
        element(by.css(OR.locators.StoryPage.embargo_date)).isDisplayed().then(function(embargoVisible){
            expect(embargoVisible).toBe(true);
            if(embargoVisible){
            }else{
                console.log("Embargo Date is not visible");
            }
            element(by.css(OR.locators.StoryPage.embargo_date)).click();
            element(by.css(OR.locators.StoryPage.datepicker)).isDisplayed().then(function(datepickerVisible){
                expect(datepickerVisible).toBe(true);
                if(datepickerVisible){
                }else{
                    console.log("embargo datepicker is not visible");
                }
            });
        });
        element(by.css(OR.locators.StoryPage.planning_date)).isDisplayed().then(function(planningVisible){
            expect(planningVisible).toBe(true);
            if(planningVisible){
            }else{
                console.log("Planning Date is not visible");
            }
            element(by.css(OR.locators.StoryPage.planning_date)).click();
            element(by.css(OR.locators.StoryPage.datepicker)).isDisplayed().then(function(datepickerVisible){
                expect(datepickerVisible).toBe(true);
                if(datepickerVisible){
                }else{
                    console.log("planning datepicker is not visible");
                }
            });
        });
    };

    this.verifyExpireWindowAndNoDate =function(expire_window_options){
        element(by.css(OR.locators.StoryPage.expire_window)).isDisplayed().then(function(expiryVisible){
            expect(expiryVisible).toBe(true);
            if(expiryVisible){
            }else{
                console.log("Expire window is not visible");
            }
            element(by.css(OR.locators.StoryPage.expire_window)).click();
            var values = element(by.css(OR.locators.StoryPage.expire_window)).all(by.tagName('option')).getText();
            var temparr = expire_window_options.split(",");
            console.log(temparr);
            expect(values).toEqual(temparr);
        });
        element(by.css(OR.locators.StoryPage.no_planning_date)).isDisplayed().then(function(nodateVisible){
            expect(nodateVisible).toBe(true);
            if(nodateVisible){
            }else{
                console.log("No planning date is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.newsgate_button)).isDisplayed().then(function(ngfolderVisible){
            expect(ngfolderVisible).toBe(true);
            if(ngfolderVisible){
            }else{
                console.log("NG Folder button is not visible");
            }
        });
    };

    this.verifyLeadArt = function(){
        element(by.css(OR.locators.StoryPage.leadart)).isDisplayed().then(function(leadartVisible){
            expect(leadartVisible).toBe(true);
            if(leadartVisible){
            }else{
                console.log("Lead art is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.leadart_search)).isDisplayed().then(function(lasearchVisible){
            expect(lasearchVisible).toBe(true);
            if(lasearchVisible){
            }else{
                console.log("Lead art search is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.leadart_crop)).isDisplayed().then(function(lacropVisible){
            expect(lacropVisible).toBe(true);
            if(lacropVisible){
            }else{
                console.log("Lead art crop is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.leadart_upload)).isDisplayed().then(function(lauploadVisible){
            expect(lauploadVisible).toBe(true);
            if(lauploadVisible){
            }else{
                console.log("Lead art upload is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.leadart_edit)).isDisplayed().then(function(laeditVisible){
            expect(laeditVisible).toBe(true);
            if(laeditVisible){
            }else{
                console.log("Lead art edit is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.leadart_thumb)).isDisplayed().then(function(lathumbVisible){
            expect(lathumbVisible).toBe(true);
            if(lathumbVisible){
            }else{
                console.log("Lead art thumbnail button is not visible");
            }
        });
    };

    this.verifyThumbnail = function(){
        element(by.css(OR.locators.StoryPage.thumbnail_url)).isDisplayed().then(function(thumbnailVisible){
            expect(thumbnailVisible).toBe(true);
            if(thumbnailVisible){
            }else{
                console.log("thumbnail url is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.thumbnail_search)).isDisplayed().then(function(thumbsearchVisible){
            expect(thumbsearchVisible).toBe(true);
            if(thumbsearchVisible){
            }else{
                 console.log("thumbnail search is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.thumbnail_upload)).isDisplayed().then(function(thumbuploadVisible){
            expect(thumbuploadVisible).toBe(true);
            if(thumbuploadVisible){
            }else{
                 console.log("thumbnail upload is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.size_dropdown)).isDisplayed().then(function(sizeVisible){
            expect(sizeVisible).toBe(true);
            if(sizeVisible){
            }else{
                 console.log("Normal dropdown is not visible");
            }
            element(by.css(OR.locators.StoryPage.size_dropdown)).click();
            var values = element(by.css(OR.locators.StoryPage.size_dropdown)).all(by.tagName('option')).getText();
            expect(values).toEqual(['Normal', 'Jumbo']);
        });
    };

    this.verifyThumbnailSourceAndPreview = function(){
        element(by.css(OR.locators.StoryPage.thumbnail_source)).isDisplayed().then(function(thumbsourceVisible){
            expect(thumbsourceVisible).toBe(true);
            if(thumbsourceVisible){
            }else{
                console.log("thumbnail source is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.thumbnail_preview)).isDisplayed().then(function(previewVisible){
            expect(previewVisible).toBe(true);
            if(previewVisible){
            }else{
                console.log("thumbnail preview is not visible");
            }
        });
    };

    this.verifyTagline = function(){
        element(by.css(OR.locators.StoryPage.adv_settings)).isDisplayed().then(function(settingsVisible){
            expect(settingsVisible).toBe(true);
            if(settingsVisible){
            }else{
                console.log("Advanced settings is not visible");
            }
            element(by.css(OR.locators.StoryPage.adv_settings)).click();
        });
        element(by.css(OR.locators.StoryPage.tagline)).isDisplayed().then(function(taglineVisible){
            expect(taglineVisible).toBe(true);
            if(taglineVisible){
            }else{
                console.log("Tagline is not visible");
            }
            element(by.css(OR.locators.StoryPage.tagline)).click();
            element(by.css(OR.locators.StoryPage.tageditor)).isDisplayed().then(function(tageditorVisible){
                expect(tageditorVisible).toBe(true);
                if(tageditorVisible){
                }else{
                    console.log("tag editor is not visible");
                }
            });
            element(by.css(OR.locators.StoryPage.tagline)).click();
        });
        browser.driver.sleep(3000);
    };

    this.verifyAlsos = function(){
        element(by.css(OR.locators.StoryPage.alsos)).isDisplayed().then(function(alsosVisible){
            expect(alsosVisible).toBe(true);
            if(alsosVisible){
            }else{
                console.log("Alsos is not visible");
            }
            element(by.css(OR.locators.StoryPage.alsos)).click();
            element(by.css(OR.locators.StoryPage.alsoseditor)).isDisplayed().then(function(alsoseditorVisible){
                expect(alsoseditorVisible).toBe(true);
                if(alsoseditorVisible){
                }else{
                    console.log("alsos editor is not visible");
                }
            });
            element(by.css(OR.locators.StoryPage.alsos)).click();
        });
        browser.driver.sleep(3000);
    };

    this.verifyTopics = function(){
        element(by.css(OR.locators.StoryPage.topics)).isDisplayed().then(function(topicsVisible){
            expect(topicsVisible).toBe(true);
            if(topicsVisible){
            }else{
                console.log("Topics is not visible");
            }
            element(by.css(OR.locators.StoryPage.topics)).click();
            element(by.xpath(OR.locators.StoryPage.topicinput)).isDisplayed().then(function(topicinputVisible){
                expect(topicinputVisible).toBe(true);
                if(topicinputVisible){
                }else{
                    console.log("topic input is not visible");
                }
            });
            element(by.css(OR.locators.StoryPage.topics)).click();
        });
        browser.driver.sleep(3000);
    };

    this.verifyCorrections = function(){
        element(by.css(OR.locators.StoryPage.corrections)).isDisplayed().then(function(correctionsVisible){
            expect(correctionsVisible).toBe(true);
            if(correctionsVisible){
            }else{
                console.log("Corrections is not visible");
            }
            element(by.css(OR.locators.StoryPage.corrections)).click();

            element(by.css(OR.locators.StoryPage.correction_date)).isDisplayed().then(function(correctiondateVisible){
                expect(correctiondateVisible).toBe(true);
                if(correctiondateVisible){
                }else{
                    console.log("correction date is not visible");
                }
            });
            element(by.css(OR.locators.StoryPage.correction_text)).isDisplayed().then(function(correctiontextVisible){
                expect(correctiontextVisible).toBe(true);
                if(correctiontextVisible){
                }else{
                    console.log("correction text is not visible");
                }
            });

            element(by.css(OR.locators.StoryPage.corrections)).click();
        });
        browser.driver.sleep(3000);
    };

    this.verifyAdvancedSEO = function(){
        element(by.css(OR.locators.StoryPage.adv_seo)).isDisplayed().then(function(seoVisible){
            expect(seoVisible).toBe(true);
            if(seoVisible){
            }else{
                console.log("SEO is not visible");
            }
            element(by.css(OR.locators.StoryPage.adv_seo)).click();
            element(by.css(OR.locators.StoryPage.canonical_url)).isDisplayed().then(function(canonicalVisible){
                expect(canonicalVisible).toBe(true);
                if(canonicalVisible){
                }else{
                    console.log("Canonical url is not visible");
                }
            });
            element(by.css(OR.locators.StoryPage.redirect_url)).isDisplayed().then(function(redirectVisible){
                expect(redirectVisible).toBe(true);
                if(redirectVisible){
                }else{
                    console.log("Redirect url is not visible");
                }
            });
            element(by.css(OR.locators.StoryPage.hideSE)).isDisplayed().then(function(hideSEVisible){
            expect(hideSEVisible).toBe(true);
                if(hideSEVisible){
                }else{
                    console.log("Hide SE is not visible");
                }
            });
            element(by.css(OR.locators.StoryPage.content_code)).isDisplayed().then(function(exemptVisible){
                expect(exemptVisible).toBe(true);
                if(exemptVisible){
                }else{
                    console.log("Exempt is not visible");
                }
            });
            element(by.css(OR.locators.StoryPage.adv_seo)).click();
        });
        browser.driver.sleep(3000);
    };

    this.verifyURLPath = function(){
        element(by.css(OR.locators.StoryPage.url_path)).isDisplayed().then(function(urlpathVisible){
            expect(urlpathVisible).toBe(true);
            if(urlpathVisible){
            }else{
                console.log("URL path is not visible");
            }
        });
    };

    this.verifyAdvancedSettings = function(){
        element(by.css(OR.locators.StoryPage.comments)).isDisplayed().then(function(commentsVisible){
            expect(commentsVisible).toBe(true);
            if(commentsVisible){
            }else{
                console.log("Enable comments is not visible");
            }
            element(by.css(OR.locators.StoryPage.comments)).click();
            var values = element(by.css(OR.locators.StoryPage.comments)).all(by.tagName('option')).getText();
            expect(values).toEqual(['Show', 'Hide']);
        });
        browser.driver.sleep(3000);
        element(by.css(OR.locators.StoryPage.location)).isDisplayed().then(function(locationVisible){
            expect(locationVisible).toBe(true);
            if(locationVisible){
            }else{
                console.log("Location is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.titleline)).isDisplayed().then(function(titlelineVisible){
            expect(titlelineVisible).toBe(true);
            if(titlelineVisible){
            }else{
                console.log("Titleline is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.kicker)).isDisplayed().then(function(kickerVisible){
            expect(kickerVisible).toBe(true);
            if(kickerVisible){
            }else{
                console.log("Kicker is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.storysource)).isDisplayed().then(function(storySourceVisible){
            expect(storySourceVisible).toBe(true);
            if(storySourceVisible){
            }else{
                console.log("Story source is not visible");
            }
        });

        element(by.css(OR.locators.StoryPage.channel)).isDisplayed().then(function(channelVisible){
            expect(channelVisible).toBe(true);
            if(channelVisible){
            }else{
                console.log("Slack channel is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.revisions)).isDisplayed().then(function(revisionsVisible){
            expect(revisionsVisible).toBe(true);
            if(revisionsVisible){
            }else{
                console.log("Revisions is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.clearedit)).isDisplayed().then(function(cleareditVisible){
            expect(cleareditVisible).toBe(true);
            if(cleareditVisible){
            }else{
                console.log("Clear Edit is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.clearblue)).isDisplayed().then(function(clearblueVisible){
            expect(clearblueVisible).toBe(true);
            if(clearblueVisible){
            }else{
                console.log("Clear blue is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.clearplum)).isDisplayed().then(function(clearplumVisible){
            expect(clearplumVisible).toBe(true);
            if(clearplumVisible){
            }else{
                console.log("Clear plum is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.word_search)).isDisplayed().then(function(wordsearchVisible){
            expect(wordsearchVisible).toBe(true);
            if(wordsearchVisible){
            }else{
                console.log("word search is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.word_replace)).isDisplayed().then(function(wordreplaceVisible){
            expect(wordreplaceVisible).toBe(true);
            if(wordreplaceVisible){
            }else{
                console.log("word replace is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.search_replace)).isDisplayed().then(function(btnsearchVisible){
            expect(btnsearchVisible).toBe(true);
            if(btnsearchVisible){
            }else{
                console.log("Search button is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.lockout)).isDisplayed().then(function(lockoutVisible){
            expect(lockoutVisible).toBe(true);
            if(lockoutVisible){
            }else{
                console.log("Lockout is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.delete_story)).isDisplayed().then(function(deletestoryVisible){
            expect(deletestoryVisible).toBe(true);
            if(deletestoryVisible){
            }else{
                console.log("Delete story is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.save_reminder)).isDisplayed().then(function(reminderVisible){
            expect(reminderVisible).toBe(true);
            if(reminderVisible){
            }else{
                console.log("reminder is not visible");
            }
            element(by.css(OR.locators.StoryPage.save_reminder)).click();
            var values = element(by.css(OR.locators.StoryPage.save_reminder)).all(by.tagName('option')).getText();
            expect(values).toEqual(['5 minutes', '15 minutes','30 minutes','60 minutes','No reminder']);
        });
    };

    this.verifyWidgets = function(){
        element(by.css(OR.locators.StoryPage.text)).isDisplayed().then(function(textVisible){
            expect(textVisible).toBe(true);
            if(textVisible){
            }else{
                console.log("Text is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.quote)).isDisplayed().then(function(quoteVisible){
            expect(quoteVisible).toBe(true);
            if(quoteVisible){
            }else{
                console.log("Quote is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.image)).isDisplayed().then(function(imageVisible){
            expect(imageVisible).toBe(true);
            if(imageVisible){
            }else{
                console.log("Image is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.embedded_video)).isDisplayed().then(function(embedVisible){
            expect(embedVisible).toBe(true);
            if(embedVisible){
            }else{
                console.log("Embedded video is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.roadblock)).isDisplayed().then(function(linkVisible){
            expect(linkVisible).toBe(true);
            if(linkVisible){
            }else{
                console.log("Roadblock is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.html)).isDisplayed().then(function(htmlVisible){
            expect(htmlVisible).toBe(true);
            if(htmlVisible){
            }else{
                console.log("HTML is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.infobox)).isDisplayed().then(function(infoboxVisible){
            expect(infoboxVisible).toBe(true);
            if(infoboxVisible){
            }else{
                console.log("Infobox is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.tweet)).isDisplayed().then(function(twitterVisible){
            expect(twitterVisible).toBe(true);
            if(twitterVisible){
            }else{
                console.log("Twitter is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.p2pembed)).isDisplayed().then(function(p2pembedVisible){
            expect(p2pembedVisible).toBe(true);
            if(p2pembedVisible){
            }else{
                console.log("P2P embedded video is not visible");
            }
        });
    };

    this.verifyAlertBox = function(){
        element(by.css(OR.locators.StoryPage.alertinfo)).isDisplayed().then(function(alertinfoVisible){
            expect(alertinfoVisible).toBe(true);
            if(alertinfoVisible){
            }else{
                console.log("Alert info is not visible");
            }
        });
    };

    this.verifyState = function(){
        element(by.css(OR.locators.StoryPage.state)).isDisplayed().then(function(stateVisible){
            expect(stateVisible).toBe(true);
            if(stateVisible){
            }else{
                console.log("state is not visible");
            }
            element(by.css(OR.locators.StoryPage.state)).click();
            var values = element(by.css(OR.locators.StoryPage.state)).all(by.tagName('option')).getText();
            expect(values).toEqual(['Working', 'On the Clock','Published','Updating']);
        });
    };

    this.verifySaveOptions = function(){
        element(by.css(OR.locators.StoryPage.save_button)).isDisplayed().then(function(saveVisible){
            expect(saveVisible).toBe(true);
            if(saveVisible){
            }else{
                console.log("save button is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.save_option)).isDisplayed().then(function(saveoptionsVisible){
            expect(saveoptionsVisible).toBe(true);
            if(saveoptionsVisible){
            }else{
                console.log("save options is not visible");
            }
            element(by.css(OR.locators.StoryPage.save_option)).click();
            var values = element(by.css(OR.locators.StoryPage.save_option)).all(by.tagName('option')).getText();
            expect(values).toEqual(['Save & ...', 'Send to Writer','Send to Line Edit','Send to Copy Edit','Mark Copy Edited','Exit Story']);
        });
    };

    this.verifyMobileIcon = function(){
        element(by.css(OR.locators.StoryPage.mobile_preview)).isDisplayed().then(function(mobilepreviewVisible){
            expect(mobilepreviewVisible).toBe(true);
            if(mobilepreviewVisible){
            }else{
                console.log("mobile preview button is not visible");
            }
        });
    };


    this.verifyCountAndEmailButton = function(){
        element(by.css(OR.locators.StoryPage.wordcount)).isDisplayed().then(function(wordcountVisible){
            expect(wordcountVisible).toBe(true);
            if(wordcountVisible){
            }else{
                console.log("wordcount is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.colcount)).isDisplayed().then(function(colcountVisible){
            expect(colcountVisible).toBe(true);
            if(colcountVisible){
            }else{
                console.log("column count is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.email_button)).isDisplayed().then(function(emailbuttonVisible){
            expect(emailbuttonVisible).toBe(true);
            if(emailbuttonVisible){
            }else{
                console.log("email button is not visible");
            }
        });
        browser.driver.sleep(3000);
/*        browser.navigate().back();
        browser.driver.sleep(5000);*/
    };

    this.verifyFieldsForHTMLStory = function(){
        element(by.css(OR.locators.StoryPage.new_story_button)).click();
        browser.driver.sleep(4000);
        element(by.css(OR.locators.StoryPage.story_type)).click();
        element(by.css(OR.locators.StoryPage.html_story)).click();
        browser.driver.sleep(4000);
        element(by.css(OR.locators.StoryPage.instagram)).isDisplayed().then(function(instagramVisible){
            expect(instagramVisible).toBe(true);
            if(instagramVisible){
            }else{
                console.log("Instagram icon is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.facebook)).isDisplayed().then(function(fbpostVisible){
            expect(fbpostVisible).toBe(true);
            if(fbpostVisible){
            }else{
               console.log("Facebook icon is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.break_icon)).isDisplayed().then(function(breakVisible){
            expect(breakVisible).toBe(true);
            if(breakVisible){
            }else{
                console.log("Break icon is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.adholder)).isDisplayed().then(function(adholderVisible){
            expect(adholderVisible).toBe(true);
            if(adholderVisible){
            }else{
                console.log("Adholder is not visible");
            }
        });
        browser.driver.sleep(3000);
        browser.navigate().back();
        browser.switchTo().alert().accept();
        browser.driver.sleep(3000);
    };

    this.verifyStoryTypeForRightRail = function(){
        element(by.css(OR.locators.StoryPage.story_type)).isDisplayed().then(function(storytypeVisible){
            expect(storytypeVisible).toBe(true);
            if(storytypeVisible){
            }else{
                console.log("Story Type is not visible");
            }
            element(by.css(OR.locators.StoryPage.story_type)).click();
            var values = element(by.css(OR.locators.StoryPage.story_type)).all(by.tagName('option')).getText();
            expect(values).toEqual(['Right Rail', 'Full Width']);
        });
    };

    this.verifySectionsAndUpdates = function(){
         element(by.css(OR.locators.StoryPage.sections)).isDisplayed().then(function(sectionsVisible){
            expect(sectionsVisible).toBe(true);
            element(by.css(OR.locators.StoryPage.sections)).click();
            element(by.css(OR.locators.StoryPage.add_section)).isDisplayed().then(function(addsectionVisible){
                expect(addsectionVisible).toBe(true);
            });
            element(by.css(OR.locators.StoryPage.sections)).click();
         });
        element(by.css(OR.locators.StoryPage.updates)).isDisplayed().then(function(updatesVisible){
            element(by.css(OR.locators.StoryPage.updates)).click();
            element(by.css("div[id='updates']")).isDisplayed().then(function(updateseditorVisible){
                expect(updateseditorVisible).toBe(true);
                if(updateseditorVisible){
                }else{
                    console.log("Updates inputs are not visible");
                }
            });
            element(by.css(OR.locators.StoryPage.updates)).click();
        });

    };

    this.verifySchedulingForRightRail = function(){
        element(by.css("input[name='planned_publish_date']")).isDisplayed().then(function(dateVisible){
            expect(dateVisible).toBe(true);
            if(dateVisible){
            }else{
                console.log("Publish Deadline is not visible");
            }
            element(by.css("input[name='planned_publish_date']")).click();
            element(by.css(OR.locators.StoryPage.datepicker)).isDisplayed().then(function(datepickerVisible){
                expect(datepickerVisible).toBe(true);
                if(datepickerVisible){
                }else{
                    console.log("publish datepicker is not visible");
                }
            });
        });
        element(by.css(OR.locators.StoryPage.otc_date)).isDisplayed().then(function(otcVisible){
            expect(otcVisible).toBe(true);
            if(otcVisible){
            }else{
                console.log("On the Clock is not visible");
            }
            element(by.css(OR.locators.StoryPage.otc_date)).click();
            element(by.css(OR.locators.StoryPage.datepicker)).isDisplayed().then(function(datepickerVisible){
                expect(datepickerVisible).toBe(true);
                if(datepickerVisible){
                }else{
                    console.log("OTC date picker is not visible");
                }
            });
        });
        element(by.css(OR.locators.StoryPage.embargo_date)).isDisplayed().then(function(embargoVisible){
            expect(embargoVisible).toBe(true);
            if(embargoVisible){
            }else{
                console.log("Embargo Date is not visible");
            }
            element(by.css(OR.locators.StoryPage.embargo_date)).click();
            element(by.css(OR.locators.StoryPage.datepicker)).isDisplayed().then(function(datepickerVisible){
                expect(datepickerVisible).toBe(true);
                if(datepickerVisible){
                }else{
                    console.log("embargo datepicker is not visible");
                }
            });
        });
        element(by.css(OR.locators.StoryPage.planning_date)).isDisplayed().then(function(planningVisible){
            expect(planningVisible).toBe(true);
            if(planningVisible){
            }else{
                console.log("Planning Date is not visible");
            }
            element(by.css(OR.locators.StoryPage.planning_date)).click();
            element(by.css(OR.locators.StoryPage.datepicker)).isDisplayed().then(function(datepickerVisible){
                expect(datepickerVisible).toBe(true);
                if(datepickerVisible){
                }else{
                    console.log("planning datepicker is not visible");
                }
            });
        });
    };

    this.verifyLeadArtWithSlugType = function(){
        element(by.css("select[name='lead-art-type']")).isDisplayed().then(function(typeVisible){
            expect(typeVisible).toBe(true);
            if(typeVisible){
            }else{
                 console.log("type dropdown is not visible");
            }
            element(by.css("select[name='lead-art-type']")).click();
            var values = element(by.css("select[name='lead-art-type']")).all(by.tagName('option')).getText();
            expect(values).toEqual(['Image', 'Video','Slug or ID']);
        });
        element(by.css("select[name='lead-art-size']")).isDisplayed().then(function(sizeVisible){
            expect(sizeVisible).toBe(true);
            if(sizeVisible){
            }else{
                 console.log("Normal dropdown is not visible");
            }
            element(by.css("select[name='lead-art-size']")).click();
            var values = element(by.css("select[name='lead-art-size']")).all(by.tagName('option')).getText();
            expect(values).toEqual(['Normal', 'Jumbo']);
        });
        element(by.css("input[name='lead-art-slug']")).isDisplayed().then(function(laslugVisible){
            expect(laslugVisible).toBe(true);
            if(laslugVisible){
            }else{
                 console.log("lead art slug input is not visible");
            }
        });
    };

    this.verifyLeadArtWithImageType = function(){
        element(by.css("select[name='lead-art-type']")).click();
        element(by.css("option[value='image']")).click();
        element(by.xpath("//div[@id='lead-art-wrapper']//button[1]/span")).isDisplayed().then(function(lasearchVisible){
            expect(lasearchVisible).toBe(true);
            element(by.xpath("//div[@id='lead-art-wrapper']//button[1]/span")).getText().then(function(lasearch){
                expect(lasearch).toBe("Search");
            });
        });
        element(by.xpath("//div[@id='lead-art-wrapper']//button[2]/span")).isDisplayed().then(function(lauploadVisible){
            expect(lauploadVisible).toBe(true);
            element(by.xpath("//div[@id='lead-art-wrapper']//button[2]/span")).getText().then(function(laupload){
                expect(laupload).toBe("Upload");
            });
        });
        element(by.xpath("//div[@id='lead-art-wrapper']//button[3]/span")).isDisplayed().then(function(lacropVisible){
            expect(lacropVisible).toBe(true);
            element(by.xpath("//div[@id='lead-art-wrapper']//button[3]/span")).getText().then(function(lacrop){
                expect(lacrop).toBe("Crop");
            });
        });
        element(by.xpath("//div[@id='lead-art-wrapper']//button[4]/span")).isDisplayed().then(function(laeditVisible){
            expect(laeditVisible).toBe(true);
            element(by.xpath("//div[@id='lead-art-wrapper']//button[4]/span")).getText().then(function(laedit){
                expect(laedit).toBe("Edit original");
            });
        });
        element(by.css("input[name='subtitle']")).isDisplayed().then(function(cutlineVisible){
            expect(cutlineVisible).toBe(true);
            if(cutlineVisible){
            }else{
                 console.log("cutline is not visible");
            }
        });
        element(by.css("textarea[name='caption']")).isDisplayed().then(function(captionVisible){
            expect(captionVisible).toBe(true);
            if(captionVisible){
            }else{
                 console.log("caption is not visible");
            }
        });
        element(by.css("input[name='credit']")).isDisplayed().then(function(creditVisible){
            expect(creditVisible).toBe(true);
            if(creditVisible){
            }else{
                 console.log("credit is not visible");
            }
        });
    };
    this.verifyLeadArtWithVideoType = function(){
        element(by.css("select[name='lead-art-type']")).click();
        element(by.css("option[value='video']")).click();
        element(by.css("select[name='referent.type']")).isDisplayed().then(function(sourceVisible){
            expect(sourceVisible).toBe(true);
            if(sourceVisible){
            }else{
                 console.log("source dropdown is not visible");
            }
            element(by.css("select[name='referent.type']")).click();
            var values = element(by.css("select[name='referent.type']")).all(by.tagName('option')).getText();
            expect(values).toEqual(['YouTube', 'Vimeo','AOL']);
        });
    };

    this.verifyThumbnailForRightRail = function(){
        element(by.css(OR.locators.StoryPage.thumbnail_url)).isDisplayed().then(function(thumbnailVisible){
            expect(thumbnailVisible).toBe(true);
            if(thumbnailVisible){
            }else{
                console.log("thumbnail url is not visible");
            }
        });
        element(by.css("button[id='search_thumbnail']")).isDisplayed().then(function(thumbnailSearchVisible){
            expect(thumbnailSearchVisible).toBe(true);
            if(thumbnailSearchVisible){
            }else{
                console.log("thumbnail search is not visible");
            }
        });
        element(by.css("button[id='upload_thumbnail']")).isDisplayed().then(function(thumbnailUploadVisible){
            expect(thumbnailUploadVisible).toBe(true);
            if(thumbnailUploadVisible){
            }else{
                console.log("thumbnail upload is not visible");
            }
        });
        element(by.css("button[id='set_focus_thumbnail']")).isDisplayed().then(function(thumbnailFocusVisible){
            expect(thumbnailFocusVisible).toBe(true);
            if(thumbnailFocusVisible){
            }else{
                console.log("thumbnail focus is not visible");
            }
        });
        element(by.css("button[id='make-lead-thumb']")).isDisplayed().then(function(LAasThumbnailVisible){
            expect(LAasThumbnailVisible).toBe(true);
            if(LAasThumbnailVisible){
            }else{
                console.log("lead art as thumbnail is not visible");
            }
        });
    };

    this.verifyWidgetsForRightRail = function(){
       element(by.css(OR.locators.StoryPage.text)).isDisplayed().then(function(textVisible){
            expect(textVisible).toBe(true);
            if(textVisible){
            }else{
                console.log("Text is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.quote)).isDisplayed().then(function(quoteVisible){
            expect(quoteVisible).toBe(true);
            if(quoteVisible){
            }else{
                console.log("Quote is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.image)).isDisplayed().then(function(imageVisible){
            expect(imageVisible).toBe(true);
            if(imageVisible){
            }else{
                console.log("Image is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.embedded_video)).isDisplayed().then(function(embedVisible){
            expect(embedVisible).toBe(true);
            if(embedVisible){
            }else{
                console.log("Embedded video is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.roadblock)).isDisplayed().then(function(linkVisible){
            expect(linkVisible).toBe(true);
            if(linkVisible){
            }else{
                console.log("Roadblock is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.html)).isDisplayed().then(function(htmlVisible){
            expect(htmlVisible).toBe(true);
            if(htmlVisible){
            }else{
                console.log("HTML is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.tweet)).isDisplayed().then(function(twitterVisible){
            expect(twitterVisible).toBe(true);
            if(twitterVisible){
            }else{
                console.log("Twitter is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.p2pembed)).isDisplayed().then(function(p2pembedVisible){
            expect(p2pembedVisible).toBe(true);
            if(p2pembedVisible){
            }else{
                console.log("P2P embedded video is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.instagram)).isDisplayed().then(function(instagramVisible){
            expect(instagramVisible).toBe(true);
            if(instagramVisible){
            }else{
                console.log("Instagram icon is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.facebook)).isDisplayed().then(function(fbpostVisible){
            expect(fbpostVisible).toBe(true);
            if(fbpostVisible){
            }else{
               console.log("Facebook icon is not visible");
            }
        });
/*        element(by.css("li[title='Video']")).isDisplayed().then(function(videoVisible){
            expect(videoVisible).toBe(true);
            if(videoVisible){
            }else{
               console.log("Video icon is not visible");
            }
        });*/
    };

    this.verifySaveOptionsForRightRail = function(){
        element(by.css(OR.locators.StoryPage.save_button)).isDisplayed().then(function(saveVisible){
            expect(saveVisible).toBe(true);
            if(saveVisible){
            }else{
                console.log("save button is not visible");
            }
        });
        element(by.css(OR.locators.StoryPage.save_option)).isDisplayed().then(function(saveoptionsVisible){
            expect(saveoptionsVisible).toBe(true);
            if(saveoptionsVisible){
            }else{
                console.log("save options is not visible");
            }
            element(by.css(OR.locators.StoryPage.save_option)).click();
            var values = element(by.css(OR.locators.StoryPage.save_option)).all(by.tagName('option')).getText();
            expect(values).toEqual(['Save & ...', 'Send Slack','Request line edit','Request copy edit','Mark copy edited','Exit Story']);
        });
    };

/*    this.verifyLeadArtWithMediaServerImage = function(){
        element(by.css(OR.locators.StoryPage.new_story_button)).click();
        browser.driver.sleep(4000);
        element(OR.locators.StoryPage.headline).sendKeys("Lead art test with media server image");
        element(OR.locators.StoryPage.slug_field).sendKeys("Lead art test with media server image");
        element(by.css(OR.locators.StoryPage.sections)).click();
        element(by.css(OR.locators.StoryPage.add_section)).click();
        element(by.css(OR.locators.StoryPage.section_input_name)).sendKeys("/s");
        browser.driver.sleep(2000);
        element(by.css(OR.locators.StoryPage.section_selected)).click();
        browser.driver.sleep(2000);
        element(by.css("select[name='lead-art-type']")).click();
        element(by.css("option[value='image']")).click();
        element(by.xpath("//div[@id='lead-art-wrapper']//button[1]/span"));
        element(by.css("div[id='mediaserver-login']")).isDisplayed().then(function(popupVisible){
            expect(popupVisible).toBe(true);
        });
        element(by.css("input[id='mediaserver-password']")).sendKeys(OR.locators.data.password);
        element(by.css("button[id='mediaserver-login-btn']")).click();
    };*/

    this.enterSlugAndHeadline = function(slug,headline){
        element(by.css(OR.locators.StoryPage.new_story_button)).click();
        browser.driver.sleep(4000);
        element(by.css(OR.locators.StoryPage.headline)).sendKeys(headline);
        var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
        element(by.css(OR.locators.StoryPage.slug_field)).sendKeys(slug + utc);
    };

    this.selectSection = function(keyword,section_selected){
        element(by.css(OR.locators.StoryPage.sections)).click();
        element(by.css(OR.locators.StoryPage.add_section)).click();
        element(by.css(OR.locators.StoryPage.section_input_name)).sendKeys(keyword);
        browser.driver.sleep(2000);
        element(by.css(section_selected)).click();
        browser.driver.sleep(2000);
    };

    this.verifyLeadArtWithLocalStorageImage = function(){
        element(by.css("select[name='lead-art-type']")).click();
        element(by.css("option[value='image']")).click();
        element(by.xpath("//div[@id='lead-art-wrapper']//button[2]/span")).click();
        browser.driver.sleep(2000);
        element(by.css("input[name='qqfile']")).sendKeys("C:\\Users\\hbansal\\Desktop\\randomimage.png");
        browser.driver.sleep(20000);
        element(by.css("input[name='subtitle']")).sendKeys("lets learn how to solve a rubik's cube");
        browser.driver.sleep(2000);
        element(by.css("textarea[name='caption']")).sendKeys("This is a rubiks cube which is very difficult to solve");
        browser.driver.sleep(2000);
        element(by.css("input[name='credit']")).sendKeys("Google Images");
        browser.driver.sleep(2000);
        element(by.css(OR.locators.StoryPage.save_button)).click();
        element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
        browser.driver.sleep(7000);
        element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
              expect(isVisible).toBe(true);
        });
        browser.driver.sleep(2000);
        element(by.css("img[id='lead-art-output']")).isDisplayed().then(function(imageVisible){
              expect(imageVisible).toBe(true);
        });
        element(by.css("figcaption[id='lead-art-output-caption']")).getText().then(function(caption){
              expect(caption).toBe("This is a rubiks cube which is very difficult to solve Google Images");
        });
        browser.driver.sleep(2000);
        element(by.css("input[name='send_to_ng']")).isDisplayed().then(function(checkboxVisible){
              expect(checkboxVisible).toBe(true);
        });
        element(by.css(OR.locators.StoryPage.thumbnail_url)).getAttribute("value").then(function(thumbnailUrl){
            console.log(thumbnailUrl);
        });
        browser.driver.sleep(2000);
        element(by.xpath("//div[@name='thumb_preview']/img")).isDisplayed().then(function(thumbnailVisible){
              expect(thumbnailVisible).toBe(true);
        });
        browser.driver.sleep(2000);
        browser.navigate().back();
        browser.driver.sleep(2000);
    };

    this.verifyLeadArtWithP2PPhotograph = function(){
        browser.driver.sleep(2000);
        element(by.css(OR.locators.StoryPage.description)).sendKeys("la-bentley-bentayga-2017-20170117");
        browser.driver.sleep(2000);
        element(by.css(OR.locators.StoryPage.description)).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        browser.driver.sleep(2000);
        element(by.css(OR.locators.StoryPage.description)).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "x"));
        browser.driver.sleep(2000);
        element(by.css("input[name='lead-art-slug']")).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "v"));
        browser.driver.sleep(20000);
        element(by.css("textarea[name='caption']")).sendKeys("This is a Bentley Bentayga 2017 which is superfast and very smooth in driving");
        browser.driver.sleep(2000);
        element(by.css(OR.locators.StoryPage.save_button)).click();
        element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
        browser.driver.sleep(7000);
        element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
              expect(isVisible).toBe(true);
        });
        browser.driver.sleep(2000);
        element(by.css("img[id='lead-art-output']")).isDisplayed().then(function(imageVisible){
              expect(imageVisible).toBe(true);
        });
        element(by.css("figcaption[id='lead-art-output-caption']")).getText().then(function(caption){
              expect(caption).toBe("This is a Bentley Bentayga 2017 which is superfast and very smooth in driving credit");
        });
        browser.driver.sleep(2000);
        element(by.css("input[name='send_to_ng']")).isDisplayed().then(function(checkboxVisible){
              expect(checkboxVisible).toBe(true);
        });
        element(by.css(OR.locators.StoryPage.thumbnail_url)).getAttribute("value").then(function(thumbnailUrl){
            console.log(thumbnailUrl);
        });
        browser.driver.sleep(2000);
        element(by.xpath("//div[@name='thumb_preview']/img")).isDisplayed().then(function(thumbnailVisible){
              expect(thumbnailVisible).toBe(true);
        });
        browser.driver.sleep(2000);
        browser.navigate().back();
        browser.driver.sleep(2000);
    };

    this.enterTextWidget = function(){
        element(by.css(OR.locators.StoryPage.text)).click();
        browser.driver.sleep(2000);
        var iframe = element(by.xpath("//div[@id='editor']//iframe"));
        browser.ignoreSynchronization = true;
        return browser.switchTo().frame(iframe.getWebElement()).then(function(){
               var editor_body = element(by.css(OR.locators.StoryPage.text_body));
               editor_body.sendKeys('If each side had set out to design witnesses who more perfectly embodied the nation’s bitter partisan divide — or could more effectively widen it — they scarcely could have done better than the two who faced off Thursday before the Senate Judiciary Committee.');
               browser.driver.sleep(7000);
        })
        .then(function(){
               browser.ignoreSynchronization = false;
               return browser.switchTo().defaultContent();
        });
    };

    this.enterQuoteWidget = function(){
        element(by.css(OR.locators.StoryPage.quote)).click();
        browser.driver.sleep(2000);
        element(by.xpath("//div[@id='editor']/li[2]/form/div/fieldset/textarea")).sendKeys("There is nothing permanent except change.");
        browser.driver.sleep(5000);
        element(by.css("input[name='citation']")).sendKeys("Heraclitus");
        browser.driver.sleep(2000);
    };

    this.enterImageWidgetForLocal = function(){
        element(by.css(OR.locators.StoryPage.image)).click();
        browser.driver.sleep(2000);
        element(by.css("a[class='element-upload']")).click();
        browser.driver.sleep(2000);
        element(by.css("input[name='qqfile']")).sendKeys("C:\\Users\\hbansal\\Desktop\\randomimage.png");
        browser.driver.sleep(12000);
        element(by.xpath("//div[@id='editor']/li[3]/form/h2/i")).click();
        browser.driver.sleep(2000);
        element(by.css("input[name='subtitle']")).sendKeys("lets learn how to solve a rubik's cube");
        browser.driver.sleep(2000);
        element(by.css("input[name='caption']")).sendKeys("This is a rubiks cube which is very difficult to solve");
        browser.driver.sleep(2000);
        element(by.css("input[name='credit']")).sendKeys("Google Images");
        browser.driver.sleep(2000);
    };

    this.enterImageWidgetWithP2PUrl = function(){
        element(by.css(OR.locators.StoryPage.image)).click();
        browser.driver.sleep(2000);
        element(by.xpath("//div[@id='editor']/li[4]//input[@name='url']")).sendKeys("http://www.trbimg.tribstage.com/img-579f4dee/turbine/la-minions-5-20151230/600");
        browser.driver.sleep(5000);
    };

    this.enterVideoWidget = function(){
        element(by.css(OR.locators.StoryPage.embedded_video)).click();
        browser.driver.sleep(2000);
        element.all(by.css("input[name='id']")).last().sendKeys("https://www.youtube.com/watch?v=5r4Kq1Oxaz4");
        browser.driver.sleep(5000);
    };

    this.enterVideoWidgetWithVimeo = function(){
        element(by.css(OR.locators.StoryPage.embedded_video)).click();
        browser.driver.sleep(2000);
        element.all(by.css("select[name='embed']")).last().click();
        element.all(by.css("option[value='vimeo']")).last().click();
        browser.driver.sleep(2000);
        element.all(by.css("input[name='id']")).last().sendKeys("https://player.vimeo.com/video/29298709");
        browser.driver.sleep(5000);
    };

    this.enterRoadblockWidget = function(){
        element(by.css(OR.locators.StoryPage.roadblock)).click();
        browser.driver.sleep(2000);
        element(by.css("input[name='content']")).sendKeys("See more");
        browser.driver.sleep(2000);
        element.all(by.css("input[name='url']")).last().sendKeys("https://www.google.com");
        browser.driver.sleep(2000);
    };

    this.enterHTMLWidget = function(){
        element(by.css(OR.locators.StoryPage.html)).click();
        browser.driver.sleep(2000);
        element.all(by.css("textarea[name='content']")).last().sendKeys("<p><h3>The U.S. is winning the medals race in the early going of the Rio Olympic Games.Before competition started Monday, the U.S. was leading the overall medal count with 12 – three gold, five silver and four bronze. Team USA is followed by China with eight (three gold, two silver, three bronze) and Italy with seven (two gold, three silver and two bronze.) </h3></p>");
        browser.driver.sleep(5000);
    };

    this.enterTweetWidget = function(){
        element(by.css(OR.locators.StoryPage.tweet)).click();
        browser.driver.sleep(2000);
        element.all(by.css("input[name='id']")).last().sendKeys("https://twitter.com/nytimes/status/971296822831538177");
        browser.driver.sleep(2000);
    };

    this.enterInstagramWidget = function(){
        element(by.css(OR.locators.StoryPage.instagram)).click();
        browser.driver.sleep(2000);
        element.all(by.css("input[name='id']")).last().sendKeys("https://www.instagram.com/p/BfGu3tKhdZ3/?hl=en");
        browser.driver.sleep(2000);
    };

    this.enterFacebookWidget = function(){
        element(by.css(OR.locators.StoryPage.facebook)).click();
        browser.driver.sleep(2000);
        element.all(by.css("input[name='id']")).last().sendKeys("https://www.facebook.com/latimes/posts/10156380510638010");
        browser.driver.sleep(2000);
    };

    this.enterP2PEmbedWidgetForStory = function(){
        element(by.css(OR.locators.StoryPage.p2pembed)).click();
        browser.driver.sleep(2000);
        element(by.css("select[name='filter']")).click();
        element(by.css("option[value='story']")).click();
        browser.driver.sleep(2000);
        element(by.css("input[name='p2p_slug']")).sendKeys("ct-test-story-nikita-20180608");
        browser.driver.sleep(2000);
    };

    this.enterP2PEmbedWidgetForStoryLink = function(){
        element(by.css(OR.locators.StoryPage.p2pembed)).click();
        browser.driver.sleep(2000);
        element.all(by.css("select[name='filter']")).last().click();
        element.all(by.css("option[value='storylink']")).last().click();
        browser.driver.sleep(2000);
        element.all(by.css("input[name='p2p_slug']")).last().sendKeys("chi-qa-storylink-20140603");
        browser.driver.sleep(2000);
    };

    this.enterP2PEmbedWidgetForPremiumVideo = function(){
        element(by.css(OR.locators.StoryPage.p2pembed)).click();
        browser.driver.sleep(2000);
        element.all(by.css("select[name='filter']")).last().click();
        element.all(by.css("option[value='premiumvideo']")).last().click();
        browser.driver.sleep(2000);
        element.all(by.css("input[name='p2p_slug']")).last().sendKeys("la-test-premium-video-mr-bean-20170914");
        browser.driver.sleep(2000);
    };

    this.enterAOLVideoWidget = function(){
        element(by.css(OR.locators.StoryPage.video)).click();
        browser.driver.sleep(2000);
        element(by.css("input[name='aol_video_id']")).sendKeys("5ac66bbe42b0717155ea1a1b");
        browser.driver.sleep(2000);
    };

    this.saveStory = function(){
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(7000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
    };

    this.selectFullWidthOption = function(){
         element(by.css(OR.locators.StoryPage.story_type)).click();
         element(by.css("option[value='full-page']")).click();
    };

    this.verifyResultsForRightRail = function(){

    };

    this.cropImage = function(){
         element(by.css("a[class='element-crop']")).click();
         browser.driver.sleep(3000);
         element(by.css("//div[@id='react-modal-buttons']/button[1]")).click();
         browser.driver.sleep(3000);
    };

    this.enterInfoboxWidget = function(){
        element(by.css("input[name='title']")).sendKeys("New info title");
        browser.driver.sleep(3000);
        element(by.css("input[name='description']")).sendKeys("New info description");
        browser.driver.sleep(3000);
        element(by.css("li[data-info='infotext']")).click();
        browser.driver.sleep(2000);
        element(by.css("textarea[name='content']")).sendKeys("Venue info: <a href='https://www1.ticketmaster.com/chicago-architecture-foundation-river-cruise-chicago-illinois-08-20-2018/event/2100545CAC8B0F77?artistid=803625&majorcatid=10005&minorcatid=106&tm_link=venue_msg-0_2100545CAC8B0F77'>www.ticketmaster.com</a>");
        browser.driver.sleep(8000);
    };

    this.selectHTMLStory = function(){
         element(by.css(OR.locators.StoryPage.story_type)).click();
         element(by.css("option[value='htmlstory']")).click();
    };

    this.verifySourceWithMultipleAuthorsDRtoWDR = function(){
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Jim");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Jim Carrey')]")).click();
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Albert");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Albert Einstein')]")).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.xpath("//div[@id='story-source']//span[@class='Select-value-label']")).getText().then(function(sourcevalue){
                expect(sourcevalue).toBe("New York Daily News");
         });
         element(by.xpath("//div[@id='byline-tagfield']//li/i")).click();
         element(by.xpath("//div[@id='byline-tagfield']//li/i")).click();
         element(by.xpath(OR.locators.StoryPage.byline)).clear().sendKeys("Tom");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Tom Hanks')]")).click();
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Bruce");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Bruce Willis')]")).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.xpath("//div[@id='story-source']//span[@class='Select-value-label']")).getText().then(function(sourcevalue){
                expect(sourcevalue).toBe("New York Daily News Exclusive");
         });
         browser.navigate().back();
    };

    this.verifySourceWithMultipleAuthorsWDRtoDR = function(){
         element(by.xpath(OR.locators.StoryPage.byline)).clear().sendKeys("Tom");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Tom Hanks')]")).click();
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Bruce");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Bruce Willis')]")).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.xpath("//div[@id='story-source']//span[@class='Select-value-label']")).getText().then(function(sourcevalue){
                expect(sourcevalue).toBe("New York Daily News Exclusive");
         });
         element(by.xpath("//div[@id='byline-tagfield']//li/i")).click();
         element(by.xpath("//div[@id='byline-tagfield']//li/i")).click();
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Jim");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Jim Carrey')]")).click();
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Albert");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Albert Einstein')]")).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.xpath("//div[@id='story-source']//span[@class='Select-value-label']")).getText().then(function(sourcevalue){
                expect(sourcevalue).toBe("New York Daily News");
         });
         browser.navigate().back();
    };

    this.verifySourceWithMultipleAuthorsDRWithoutStaffPages = function(){
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Jim");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Jim Carrey')]")).click();
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Albert");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Albert Einstein')]")).click();
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Morris");
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.xpath("//div[@id='story-source']//span[@class='Select-value-label']")).getText().then(function(sourcevalue){
                expect(sourcevalue).toBe("New York Daily News");
         });
    };

    this.verifySourceWithMultipleAuthorsWDRWithoutStaffPages = function(){
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Jim");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Jim Carrey')]")).click();
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Albert");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Albert Einstein')]")).click();
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Jermy");
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.xpath("//div[@id='story-source']//span[@class='Select-value-label']")).getText().then(function(sourcevalue){
                expect(sourcevalue).toBe("New York Daily News Exclusive");
         });
    };

    this.verifySourceWithMultipleAuthorsWithoutStaffPages = function(){
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Watson");
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Caroline");
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.xpath("//div[@id='story-source']//span[@class='Select-value-label']")).getText().then(function(sourcevalue){
                expect(sourcevalue).toBe("New York Daily News");
         });
    };

    this.verifySourceWithMultipleAuthorsMixed = function(){
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Jim");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Jim Carrey')]")).click();
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Albert");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Albert Einstein')]")).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.xpath("//div[@id='story-source']//span[@class='Select-value-label']")).getText().then(function(sourcevalue){
                expect(sourcevalue).toBe("New York Daily News");
         });
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Tom");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Tom Hanks')]")).click();
         browser.driver.sleep(3000);
         element(by.xpath(OR.locators.StoryPage.byline)).sendKeys("Bruce");
         browser.driver.sleep(3000);
         element(by.xpath("//li[contains(text(), 'Bruce Willis')]")).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.xpath("//div[@id='story-source']//span[@class='Select-value-label']")).getText().then(function(sourcevalue){
                expect(sourcevalue).toBe("New York Daily News Exclusive");
         });
    };

    this.verifyChangeStoryStatus = function(){
         element(by.css(OR.locators.StoryPage.description)).sendKeys("SEO for test story for testing the story status");
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.css(OR.locators.StoryPage.state)).click();
         var values = element(by.css(OR.locators.StoryPage.state)).all(by.tagName('option:enabled')).getText();
         expect(values).toEqual(['Working','Published']);
         element(by.css("option[value='published']")).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.css(OR.locators.StoryPage.state)).click();
         var values = element(by.css(OR.locators.StoryPage.state)).all(by.tagName('option')).getText();
         expect(values).toEqual(['Working','Published','Updating']);
         element(by.css("option[value='draft']")).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         browser.navigate().back();
    };

    this.verifyStoryExpireWindow = function(expire_window_options){
        element(by.css(OR.locators.StoryPage.new_story_button)).click();
        browser.driver.sleep(4000);
        element(by.css(OR.locators.StoryPage.expire_window)).click();
        var values = element(by.css(OR.locators.StoryPage.expire_window)).all(by.tagName('option')).getText();
        expect(values).toEqual(expire_window_options);

    };

    this.verifyTemplateExpireWindow = function(expire_window_options){
        element(by.css(OR.locators.LogoutPage.newtemplate_button)).click();
        browser.driver.sleep(4000);
        element(by.css(OR.locators.StoryPage.expire_window)).click();
        var values = element(by.css(OR.locators.StoryPage.expire_window)).all(by.tagName('option')).getText();
        expect(values).toEqual(expire_window_options);

    };

    this.verifyExpireWindowOnStatusChange = function(){
         element(by.css(OR.locators.StoryPage.description)).sendKeys("Test expire functionality for published");
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.state)).click();
         element(by.css("option[value='published']")).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.css("input[name='expire_date']")).isDisplayed().then(function(isDateVisible){
                expect(isDateVisible).toBe(true);
         });
         browser.navigate().back();
    };

    this.verifyExpireWindowOnStatusChangeOTC = function(){
         element(by.css(OR.locators.StoryPage.description)).sendKeys("Test expire functionality for OTC");
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.otc_date)).click();
         element(by.xpath("//span[contains(text(),'Next')]")).click();
         browser.driver.sleep(2000);
         element(by.xpath("//a[contains(text(),'14')]")).click();
         browser.driver.sleep(2000);
         element(by.xpath("//button[contains(text(),'Done')]")).click();
         browser.driver.sleep(2000);
         element(by.css(OR.locators.StoryPage.state)).click();
         element(by.css("option[value='published']")).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.css("input[name='expire_date']")).isDisplayed().then(function(isDateVisible){
                expect(isDateVisible).toBe(true);
         });
    };

    this.verifySettingExpireDate = function(keyword,section_selected){
         element(by.css(OR.locators.LogoutPage.searchbar)).sendKeys("expire date");
         element(by.css(OR.locators.LogoutPage.searchicon)).click();
         browser.driver.sleep(7000);
         element(by.xpath("//li[@data-slug='ny-checking-expire-date-html-story-20180731']/div")).click();
         browser.driver.sleep(4000);
         element(by.css(OR.locators.StoryPage.sections)).click();
         element(by.css(OR.locators.StoryPage.add_section)).click();
         element(by.css(OR.locators.StoryPage.section_input_name)).sendKeys(keyword);
         browser.driver.sleep(2000);
         element(by.css(section_selected)).click();
         browser.driver.sleep(2000);
         element(by.css("input[name='expire_date']")).click();
         element(by.css(OR.locators.StoryPage.datepicker)).isDisplayed().then(function(datepickerVisible){
               expect(datepickerVisible).toBe(true);
         });
         element(by.xpath("//span[contains(text(),'Next')]")).click();
         browser.driver.sleep(2000);
         element(by.xpath("//a[contains(text(),'18')]")).click();
         browser.driver.sleep(2000);
         element(by.xpath("//button[contains(text(),'Done')]")).click();
         browser.driver.sleep(2000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         browser.navigate().back();
    };

    this.verifyExpireWindowTemplate = function(){
        element(by.css(OR.locators.LogoutPage.newtemplate_button)).click();
        browser.driver.sleep(3000);
        element(by.css(OR.locators.StoryPage.headline)).clear().sendKeys("Expire date Template for automation");
        var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
        element(by.css(OR.locators.StoryPage.slug_field)).clear().sendKeys("expire-date-template-for-automation-" + utc);
        browser.driver.sleep(3000);
        element(by.css(OR.locators.StoryPage.expire_window)).click();
        element(by.css("option[value='5']")).click();
        browser.driver.sleep(2000);
        element(by.css(OR.locators.StoryPage.save_button)).click();
        browser.driver.sleep(3000);
        element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
               expect(isVisible).toBe(true);
        });
        element(by.css("button[id='start-story-btn']")).click();
        browser.driver.sleep(3000);
        expect(element(by.css(OR.locators.StoryPage.expire_window)).$('option:selected').getText()).toEqual('5 days');
        element(by.css(OR.locators.StoryPage.headline)).sendKeys("Verifying story creation from template");
        var utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
        element(by.css(OR.locators.StoryPage.slug_field)).sendKeys("verifying-story-creation-from-template-" + utc);
        browser.driver.sleep(3000);
        element(by.css(OR.locators.StoryPage.sections)).click();
        element(by.css(OR.locators.StoryPage.add_section)).click();
        element(by.css(OR.locators.StoryPage.section_input_name)).sendKeys(OR.locators.data.search_section_keyword_ny);
        browser.driver.sleep(2000);
        element(by.css(OR.locators.StoryPage.section_selected_ny)).click();
        browser.driver.sleep(2000);
        element(by.css(OR.locators.StoryPage.save_button)).click();
        element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
        browser.driver.sleep(3000);
        element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
               expect(isVisible).toBe(true);
        });
    };

    this.verifyExpireDateTimezone = function(){

    };

    this.verifyEmbargoDateFunctionality = function(){
         element(by.css(OR.locators.StoryPage.description)).sendKeys("Automation testing embargo date functionality");
         element(by.css(OR.locators.StoryPage.otc_date)).click();
         element(by.css("//span[contains(text(),'Next')]")).click();
         browser.driver.sleep(2000);
         element(by.css("//a[contains(text(),'18')]")).click();
         browser.driver.sleep(2000);
         element(by.css("//button[contains(text(),'Done')]")).click();
         browser.driver.sleep(2000);
         element(by.css(OR.locators.StoryPage.embargo_date)).click();
         element(by.css("//span[contains(text(),'Prev')]")).click();
         browser.driver.sleep(2000);
         element(by.css("//a[contains(text(),'20']")).click();
         browser.driver.sleep(2000);
         element(by.css("//button[contains(text(),'Done')]")).click();
         browser.driver.sleep(2000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.css(OR.locators.StoryPage.state)).click();
         element(by.css("option[value='published']")).click();
         element(by.css(OR.locators.StoryPage.save_button)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
    };

    this.verifyInvalidEmbargoDateFunctionality = function(){
         element(by.css(OR.locators.StoryPage.description)).sendKeys("Automation testing with invalid embargo date functionality");
         element(by.css(OR.locators.StoryPage.otc_date)).click();
         element(by.css("//span[contains(text(),'Next')]")).click();
         browser.driver.sleep(2000);
         element(by.css("//a[contains(text(),'18')]")).click();
         browser.driver.sleep(2000);
         element(by.css("//button[contains(text(),'Done')]")).click();
         browser.driver.sleep(2000);
         element(by.css(OR.locators.StoryPage.embargo_date)).click();
         element(by.css("//span[contains(text(),'Next')]")).click();
         browser.driver.sleep(2000);
         element(by.css("//a[contains(text(),'28']")).click();
         browser.driver.sleep(2000);
         element(by.css("//button[contains(text(),'Done')]")).click();
         browser.driver.sleep(2000);
         element(by.css("label[id='embargo']")).isDisplayed().then(function(errorVisible){
                expect(errorVisible).toBe(true);
         });
         element(by.css(OR.locators.StoryPage.save_button)).click();
         browser.driver.sleep(2000);
         element(by.css("div[id='react-modal-box']")).isDisplayed().then(function(errorVisible){
                expect(errorVisible).toBe(true);
         });
         element(by.xpath("//span[contains(text(),'OK')]")).click();
         browser.driver.sleep(2000);
         element(by.css(OR.locators.StoryPage.state)).click();
         element(by.css("option[value='published']")).click();
         element(by.css(OR.locators.StoryPage.save_button)).click();
         browser.driver.sleep(2000);
         element(by.css("div[id='react-modal-box']")).isDisplayed().then(function(errorVisible){
                expect(errorVisible).toBe(true);
         });
         element(by.xpath("//span[contains(text(),'OK')]")).click();
         browser.driver.sleep(2000);
         element(by.css(OR.locators.StoryPage.otc_date)).getAttribute("value").then(function(otcValue){
                expect(otcValue).toBe("");
         });

    };

    this.verifyRemoveEmbargoDate = function(){
         element(by.css(OR.locators.StoryPage.embargo_date)).click();
         element(by.css("//span[contains(text(),'Prev')]")).click();
         browser.driver.sleep(2000);
         element(by.css("//a[contains(text(),'20']")).click();
         browser.driver.sleep(2000);
         element(by.css("//button[contains(text(),'Done')]")).click();
         browser.driver.sleep(2000);
         element(by.css(OR.locators.StoryPage.save_button)).click();
         element(by.css(OR.locators.StoryPage.save_without_deadline)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
         element(by.css(OR.locators.StoryPage.embargo_date)).clear();
         element(by.css(OR.locators.StoryPage.save_button)).click();
         browser.driver.sleep(3000);
         element(by.css(OR.locators.StoryPage.save_message_popup)).isDisplayed().then(function(isVisible){
                expect(isVisible).toBe(true);
         });
    };


};

module.exports = new PriorityPage();