$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("technicaltest.feature");
formatter.feature({
  "line": 1,
  "name": "Technical Test Submission Form",
  "description": "",
  "id": "technical-test-submission-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4923326100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User should be on the jotform website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the jotform webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TestStepDefs.userIsOnTheJotformWebpage()"
});
formatter.result({
  "duration": 151490500,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User should be able to fill in all the pages of the test form successfully",
  "description": "",
  "id": "technical-test-submission-form;user-should-be-able-to-fill-in-all-the-pages-of-the-test-form-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User clicks on the next button from the home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enters first name \"George\" in the first name field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enters last name \"Smith\" in the last name field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicks on the next button on the Test Form Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "attaches a file",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "creates a signature",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks on the next button on the signature page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "selects the date",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "clicks on the next button on the date page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "selects the security question \"Name of the first pet\" from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "answers the security question \"Puppy\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "clicks on the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verifies that the submission has been received \"Your submission has been received!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDefs.userClicksOnTheNextButtonFromTheHomePage()"
});
formatter.result({
  "duration": 15194649000,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.cssSelector: #jfCard-welcome-start\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.29.224.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.jotform.form.utility.Utility.pmClickOnElement(Utility.java:35)\r\n\tat com.jotform.form.pages.Page1HomePage.clickOnNextButton(Page1HomePage.java:23)\r\n\tat com.jotform.form.cucumber.steps.TestStepDefs.userClicksOnTheNextButtonFromTheHomePage(TestStepDefs.java:19)\r\n\tat ???.When User clicks on the next button from the home page(technicaltest.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "George",
      "offset": 19
    }
  ],
  "location": "TestStepDefs.entersFirstNameInTheFirstNameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Smith",
      "offset": 18
    }
  ],
  "location": "TestStepDefs.entersLastNameInTheLastNameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestStepDefs.clicksOnTheNextButtonOnTheTestFormPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestStepDefs.attachesAFile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestStepDefs.createsASignature()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestStepDefs.clicksOnTheNextButtonOnTheSignaturePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestStepDefs.selectsTheDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestStepDefs.clicksOnTheNextButtonOnTheDatePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name of the first pet",
      "offset": 31
    }
  ],
  "location": "TestStepDefs.selectsTheSecurityQuestionFromTheDropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Puppy",
      "offset": 31
    }
  ],
  "location": "TestStepDefs.answersTheSecurityQuestion(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestStepDefs.clicksOnTheSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your submission has been received!",
      "offset": 48
    }
  ],
  "location": "TestStepDefs.verifiesThatTheSubmissionHasBeenReceived(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 24444400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.29.224.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c1857f7557f594218e793a85b9bfe970, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53686}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53686/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c1857f7557f594218e793a85b9bfe970\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.jotform.form.utility.Utility.getScreenshot(Utility.java:409)\r\n\tat com.jotform.form.cucumber.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});