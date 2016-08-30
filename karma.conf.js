// Karma configuration
// Generated on Thu Aug 25 2016 11:12:09 GMT+0700 (WIB)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],

    plugins : [
        'karma-ng-html2js-preprocessor',
        'karma-mocha',
        'karma-sinon-chai',
        'karma-phantomjs-launcher',
        'karma-chrome-launcher'
    ],

    preprocessors: {
        '*.html': ['ng-html2js']
    },

    // list of files / patterns to load in the browser
    files: [
        'node_modules/angular/angular.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-material/angular-material.min.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/ng-describe/dist/ng-describe.js',
        'js/*.js',
        'tests/*.js',
        '*.html'
    ],

    ngHtml2JsPreprocessor: {

      // or define a custom transform function
      // - cacheId returned is used to load template
      //   module(cacheId) will return template at filepath
      // cacheIdFromPath: function(filepath) {
      //   // example strips 'public/' from anywhere in the path
      //   // module(app/templates/template.html) => app/public/templates/template.html
      //   var cacheId = filepath.replace('base/', '');
      //   return cacheId;
      // },

      // - setting this option will create only a single module that contains templates
      //   from all the files, so you can load them all with module('foo')
      // - you may provide a function(htmlPath, originalPath) instead of a string
      //   if you'd like to generate modules dynamically
      //   htmlPath is a originalPath stripped and/or prepended
      //   with all provided suffixes and prefixes
      moduleName: 'app'
    },
    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};


