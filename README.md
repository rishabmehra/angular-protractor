To Run Test Suite

You need NodeJs server and run the following commands

npm install -g protractor
webdriver-manager update

After doing this, run the Selenium  server 

webdriver-manager start

Keep the Selenium server running and open new cmd and run

protractor protractorConf.js <suite name>



