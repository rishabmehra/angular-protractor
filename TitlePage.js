// Test suites

describe('Protractor Demo App', function() {
	beforeEach(function(){
		 browser.get('http://juliemr.github.io/protractor-demo/');
	});

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

	it('should add one and two values', function() {  
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);
  });
});