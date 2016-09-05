

describe('Login Eproc', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  describe('Field', function() {

    var email = element(by.model('vm.email'));
    var password = element(by.model('vm.password'));
    var button = element(by.className('login-button'));

    it('Email should be empty', function() {
      expect(email.getText()).toEqual('');
    });
    it('Password should be empty', function() {
      expect(password.getText()).toEqual('');
    });

  });


  describe('Test Notification $mdToast', function() {

    var EC = protractor.ExpectedConditions;
    var email = element(by.model('vm.email'));
    var password = element(by.model('vm.password'));
    var button = element(by.className('login-button'));
    var footer = element(by.className('text-footer'));
    var myToast = element(by.id('md-toast-text'));
    
    it('Success', function() {
      
      email.sendKeys('arisjirat@gmail.com');
      password.sendKeys('secret');
      element(by.className('login-button')).click();
  
      browser.waitForAngular();

      browser.ignoreSynchronization = true; 

      browser.wait(function () {
        return myToast.isPresent();
      }, 30000);
      var message = myToast.getText();
      expect(message).toEqual('Welcome back, arisjirat@gmail.com!');
      // expect(browser.isElementPresent(element(by.id('md-toast-text')))).toBe(false);
      // expect(element(by.id('md-toast-text')).isPresent()).toBe(false);

      // function waitForPromiseTest(promiseFn, testFn) {
      //   browser.wait(function () {
      //     var deferred = protractor.promise.defer();
      //     promiseFn().then(function (data) {
      //       deferred.fulfill(testFn(data));
      //     });
      //     return deferred.promise;
      //   });
      // }

      // waitForPromiseTest(element(by.id('md-toast-text')).isPresent,
      // function (isPresent) {
      //   return !isPresent;
      // });



        // var myToastAfterClick = element(by.id('md-toast-text'));
        // console.highlight(myToastAfterClick);
        // myToastAfterClick.getText().then(function (test) {
        //   console.warn(test);
        // });
        // console.warn('Clicked');
        // browser.wait(myToast.isPresent(), 6000).then(function () {
        //   console.warn('Before click');
        // });
      // });
      

      // email.getText().then(function (getTex) {
      //   console.highlight(getTex);
      // });

      // console.log(myToast.getText());

      // .then(function () {
      //   myMdToast = browser.findElement(by.id('coecoe'));
      //   browser.wait(EC.visibilityOf(myMdToast), 8000)
      //   .then(function () {
      //     expect(myMdToast.getText()).toEqual('Yoo');
      //   });
      // });

      // // var EC = protractor.ExpectedConditions;
      // console.log(myMdToast.getText());
      // // browser.wait(EC.visibilityOf(myMdToast), 1000);
      // // myMdToast.getText().then(function (text) {
      // //   console.log(text);
      // // });
    
    });
    
  });

 
});




// it('adding expense', function(){
//     element(by.css('[ng-click="addExpenseDetails()"]')).click()
//     //Verify toast after click event returns promise
//     .then(function(){
//         toast = $('.toast toast-error');
//         browser.wait(EC.visibilityOf(toast), 20000) //wait until toast is displayed
//         .then(function(){
//             expect(toast.getAttribute('value')).toEqual('some value');
//         });
//     });
// });