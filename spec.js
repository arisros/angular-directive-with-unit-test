

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


  describe('Fill Form', function() {

    var email = element(by.model('vm.email'));
    var password = element(by.model('vm.password'));
    var button = element(by.className('login-button'));
    
    it('Fail', function() {
      email.sendKeys('arisjirat@gmail.com');
      password.sendKeys('secret');
      button.click();


      var EC = protractor.ExpectedConditions;

      // // Waits for the element with id 'abc' to be visible on the dom.
      // browser.wait(EC.visibilityOf($('#my-md-toast')), 5000);
      var myMdToast = element(by.id('my-md-toast'));
      browser.wait(EC.visibilityOf(myMdToast), 5000);
      console.log(myMdToast.getText());
      // browser.wait(EC.textToBePresentInElement($('#toaster'), 'foo'), 5000);
      // mdToast.getText().then(function(get) {
      //   console.warn(get);
      // });
    
    });
    
  });

 
});
