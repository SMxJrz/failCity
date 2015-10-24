module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '..',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // required to run tests with PhantomJS
            'test/utils/PhantomJsCompatibilityHack.js',

            // library stuff imported in app.js
            // make sure to reflect changes here
            "bower_components/angular/angular.js",
            "bower_components/angular-loader/angular-loader.js",
            "bower_components/angular-mocks/angular-mocks.js",
            "bower_components/angular-ui-router/release/angular-ui-router.js",
            "bower_components/angular/angular.js",

            "app/**/*.js"

            // new tests below this line

        ],


        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.html': ['ng-html2js'],
            'app/**/*.js' : ['coverage']
        },

        reporters: ['progress','junit', 'coverage'],

        junitReporter: {
            outputDir: 'karma_junit', // results will be saved as $outputDir/$browserName.xml
            suite: ''
        },

        coverageReporter:{
            type:"html",
            dir: "karma_coverage"
        },

        // web server port
        port: 8001,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['Chrome'],
        browsers: ['PhantomJS','Chrome','Firefox'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    })
};