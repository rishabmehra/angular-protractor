// Represent Page Objects
var HomePage = function(){
	 this.centerStageButtons = element(by.css(".announcement-bar"));
   this.downloadButton = this.centerStageButtons.element(by.css(".google-follow"));
}


// Test suites
describe('Simple Angular test suites', function() {
      var homePage = new HomePage();
      beforeEach(function() {
         browser.get('https://angularjs.org/');
      });
  
      it('should have a three buttons', function() {
         expect(homePage.downloadButton.isDisplayed()).toBe(true);
      });
});