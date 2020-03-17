describe('teste functionale', function() {
    beforeEach(function() {
        browser.waitForAngularEnabled(false)
        browser.get('C:\\Bogdan\\Angular\\Test lumi\\pagina.html');
      });

    it('should change the text when I click the button', function() {
        element(by.id('switch_button')).click();
        expect(element(by.id('background')).getText()).toEqual('La revedere');
    });

    it('should have a title', function() {
       expect(browser.getTitle()).toEqual('Pagina mea');
      });
  });

  
  