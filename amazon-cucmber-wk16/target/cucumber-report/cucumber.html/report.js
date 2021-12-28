$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("laptoptest.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop search functionality check",
  "description": "",
  "id": "laptop-search-functionality-check",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5823121000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LaptopStepDefs.userIsOnTheAmazonHomepage()"
});
formatter.result({
  "duration": 119447200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should be able to purchase laptop successfully",
  "description": "",
  "id": "laptop-search-functionality-check;user-should-be-able-to-purchase-laptop-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User search for \"Laptop\" laptop in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "finds the selection from the pages \"2020 Newest HP Stream 11.6 inch HD Laptop, Intel Celeron N4000, 4 GB RAM, 64 GB eMMC, Webcam, HDMI, Windows 10\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "selects the quantity \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verifies the add to cart message \"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop",
      "offset": 17
    }
  ],
  "location": "LaptopStepDefs.userSearchForLaptopInTheSearchBar(String)"
});
formatter.result({
  "duration": 174458500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopStepDefs.clicksOnTheSearchButton()"
});
formatter.result({
  "duration": 2632683300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020 Newest HP Stream 11.6 inch HD Laptop, Intel Celeron N4000, 4 GB RAM, 64 GB eMMC, Webcam, HDMI, Windows 10",
      "offset": 36
    }
  ],
  "location": "LaptopStepDefs.findsTheSelectionFromThePages(String)"
});
formatter.result({
  "duration": 122815532100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "LaptopStepDefs.selectsTheQuantity(String)"
});
formatter.result({
  "duration": 20082154700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#quantity\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.29.224.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9ea4aa21e708bea64c92fc3e9fd29342, findElement {using\u003did, value\u003dquantity}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51379}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51379/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9ea4aa21e708bea64c92fc3e9fd29342\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:46)\r\n\tat com.amazon.utility.Utility.pmSelectByValueFromDropDown(Utility.java:148)\r\n\tat com.amazon.pages.SelectedProductPage.selectQuantity(SelectedProductPage.java:29)\r\n\tat com.amazon.cucumber.steps.LaptopStepDefs.selectsTheQuantity(LaptopStepDefs.java:37)\r\n\tat ✽.And selects the quantity \"3\"(laptoptest.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LaptopStepDefs.clicksOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "LaptopStepDefs.verifiesTheAddToCartMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1635958500,
  "status": "passed"
});
formatter.uri("mobiletest.feature");
formatter.feature({
  "line": 1,
  "name": "Mobile search functionality check",
  "description": "",
  "id": "mobile-search-functionality-check",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3179175800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LaptopStepDefs.userIsOnTheAmazonHomepage()"
});
formatter.result({
  "duration": 64000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should be able to purchase mobile phone successfully",
  "description": "",
  "id": "mobile-search-functionality-check;user-should-be-able-to-purchase-mobile-phone-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Sanity"
    },
    {
      "line": 8,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User search for \"Mobile Phone\" laptop in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "finds the selection from the pages \"Nokia XR20 5G | Android 11 | Unlocked Smartphone | Dual SIM | US Version | 6/128GB | 6.67-Inch Screen | 48MP Dual Camera | Polar Night\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "selects the quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verifies the add to cart message \"Added to Cart\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Phone",
      "offset": 17
    }
  ],
  "location": "LaptopStepDefs.userSearchForLaptopInTheSearchBar(String)"
});
formatter.result({
  "duration": 313096200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopStepDefs.clicksOnTheSearchButton()"
});
formatter.result({
  "duration": 2263738500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia XR20 5G | Android 11 | Unlocked Smartphone | Dual SIM | US Version | 6/128GB | 6.67-Inch Screen | 48MP Dual Camera | Polar Night",
      "offset": 36
    }
  ],
  "location": "LaptopStepDefs.findsTheSelectionFromThePages(String)"
});
formatter.result({
  "duration": 16069993100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "LaptopStepDefs.selectsTheQuantity(String)"
});
formatter.result({
  "duration": 232593300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopStepDefs.clicksOnAddToCartButton()"
});
formatter.result({
  "duration": 1417406500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to Cart",
      "offset": 34
    }
  ],
  "location": "LaptopStepDefs.verifiesTheAddToCartMessage(String)"
});
formatter.result({
  "duration": 5163551100,
  "status": "passed"
});
formatter.after({
  "duration": 915210200,
  "status": "passed"
});
});