// conf.js
// 


// exports.config = {
//   framework: 'jasmine',
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   onPrepare: function() {
//       var SpecReporter = require('jasmine-spec-reporter');
//       // add jasmine spec reporter
//       jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
//    },
//   specs: ['spec.js']
// };
var logger = require("onelinelogger");
logger.replaceConsole();
var SpecReporter = require('./node_modules/jasmine-spec-reporter/src/jasmine-spec-reporter.js');

exports.config = {
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
    print: function () {
    }
  },
  specs: [
    'spec.js'
  ],
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      args: ['--test-type']
    }
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};