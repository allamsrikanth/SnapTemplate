exports.config = {
    
    // seleniumServerJar: '../../../node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
    //chromeDriver: '../../../node_modules/protractor/selenium/chromedriver',
    //allScriptsTimeout: 20000,
    
    multiCapabilities: [{
        browserName: 'chrome'
    },
    ],

    framework: 'jasmine2',

   // specs: ['src/test/test_spec/login_spec.js'],
    suites:{
        login_newyork :            'src/test/test_spec/login_spec_new_york.js',
        login_latimes :            'src/test/test_spec/login_spec_los_angeles.js',
        login_chicago :            'src/test/test_spec/login_spec_chicago.js',
        priority_p2p_newyork :     'src/test/test_spec/priority_spec_p2p_newyork.js',
        priority_arc_newyork :     'src/test/test_spec/priority_spec_arc_newyork.js',
        priority_p2p_los_angeles : 'src/test/test_spec/priority_spec_p2p_losangeles.js',
        priority_arc_los_angeles : 'src/test/test_spec/priority_spec_arc_losangeles.js',
        priority_p2p_chicago :     'src/test/test_spec/priority_spec_p2p_chicago.js',
        priority_arc_chicago :     'src/test/test_spec/priority_spec_arc_chicago.js',
        template_p2p_newyork :     'src/test/test_spec/template_spec_p2p_newyork.js',
        template_arc_newyork :     'src/test/test_spec/template_spec_arc_newyork.js',
        template_p2p_losangeles :  'src/test/test_spec/template_spec_p2p_losangeles.js',
        template_arc_losangeles :  'src/test/test_spec/template_spec_arc_losangeles.js',
        template_p2p_chicago :     'src/test/test_spec/template_spec_p2p_chicago.js',
        template_arc_chicago :     'src/test/test_spec/template_spec_arc_chicago.js'
        
    },

    jasmineNodeOpts: {
 
        defaultTimeoutInterval: 2500000
    },

    onPrepare: function () {
        browser.driver.manage().timeouts().implicitlyWait(10000);
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'testresults',
            filePrefix: 'xmloutput'
        }));

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport: {
                resultsDir: 'allure-results'
            }
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    }
}