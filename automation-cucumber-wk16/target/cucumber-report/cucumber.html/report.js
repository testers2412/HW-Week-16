$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createaccounttest.feature");
formatter.feature({
  "line": 1,
  "name": "I want to create an account successfully",
  "description": "",
  "id": "i-want-to-create-an-account-successfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "I can verify that form only accept valid data and with invalid data gives error message",
  "description": "",
  "id": "i-want-to-create-an-account-successfully;i-can-verify-that-form-only-accept-valid-data-and-with-invalid-data-gives-error-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter invalid first name \"\u003cfirst name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter invalid last name \"\u003clast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I can verify first name error message \"error\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I can verify last name error message \"error\"",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "i-want-to-create-an-account-successfully;i-can-verify-that-form-only-accept-valid-data-and-with-invalid-data-gives-error-message;",
  "rows": [
    {
      "cells": [
        "first name",
        "last name",
        "password"
      ],
      "line": 17,
      "id": "i-want-to-create-an-account-successfully;i-can-verify-that-form-only-accept-valid-data-and-with-invalid-data-gives-error-message;;1"
    },
    {
      "cells": [
        "123",
        "and123",
        "asd123"
      ],
      "line": 18,
      "id": "i-want-to-create-an-account-successfully;i-can-verify-that-form-only-accept-valid-data-and-with-invalid-data-gives-error-message;;2"
    },
    {
      "cells": [
        "ram1",
        "12kumar",
        "asd123"
      ],
      "line": 19,
      "id": "i-want-to-create-an-account-successfully;i-can-verify-that-form-only-accept-valid-data-and-with-invalid-data-gives-error-message;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9044326900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on a create account page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on a home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on a signIn tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "enter email address \"postman1@prime.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on create account",
  "keyword": "And "
});
formatter.match({
  "location": "viewItemStep.iAmOnAHomePage()"
});
formatter.result({
  "duration": 177245300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnASignInTab()"
});
formatter.result({
  "duration": 3014073000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postman1@prime.com",
      "offset": 21
    }
  ],
  "location": "CreateAccountStep.enterEmailAddress(String)"
});
formatter.result({
  "duration": 138390800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnCreateAccount()"
});
formatter.result({
  "duration": 1104713800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "I can verify that form only accept valid data and with invalid data gives error message",
  "description": "",
  "id": "i-want-to-create-an-account-successfully;i-can-verify-that-form-only-accept-valid-data-and-with-invalid-data-gives-error-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter invalid first name \"123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter invalid last name \"and123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"asd123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I can verify first name error message \"error\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I can verify last name error message \"error\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 28
    }
  ],
  "location": "CreateAccountStep.iEnterInvalidFirstName(String)"
});
formatter.result({
  "duration": 580275200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "and123",
      "offset": 27
    }
  ],
  "location": "CreateAccountStep.iEnterInvalidLastName(String)"
});
formatter.result({
  "duration": 114894100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd123",
      "offset": 18
    }
  ],
  "location": "CreateAccountStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 128380600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 39
    }
  ],
  "location": "CreateAccountStep.iCanVerifyFirstNameErrorMessage(String)"
});
formatter.result({
  "duration": 79021600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 38
    }
  ],
  "location": "CreateAccountStep.iCanVerifyLastNameErrorMessage(String)"
});
formatter.result({
  "duration": 51376300,
  "status": "passed"
});
formatter.after({
  "duration": 1052603600,
  "status": "passed"
});
formatter.before({
  "duration": 5605184700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on a create account page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on a home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on a signIn tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "enter email address \"postman1@prime.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on create account",
  "keyword": "And "
});
formatter.match({
  "location": "viewItemStep.iAmOnAHomePage()"
});
formatter.result({
  "duration": 48300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnASignInTab()"
});
formatter.result({
  "duration": 2246081900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postman1@prime.com",
      "offset": 21
    }
  ],
  "location": "CreateAccountStep.enterEmailAddress(String)"
});
formatter.result({
  "duration": 124402100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnCreateAccount()"
});
formatter.result({
  "duration": 1122824400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "I can verify that form only accept valid data and with invalid data gives error message",
  "description": "",
  "id": "i-want-to-create-an-account-successfully;i-can-verify-that-form-only-accept-valid-data-and-with-invalid-data-gives-error-message;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter invalid first name \"ram1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter invalid last name \"12kumar\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"asd123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I can verify first name error message \"error\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I can verify last name error message \"error\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "ram1",
      "offset": 28
    }
  ],
  "location": "CreateAccountStep.iEnterInvalidFirstName(String)"
});
formatter.result({
  "duration": 630984300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12kumar",
      "offset": 27
    }
  ],
  "location": "CreateAccountStep.iEnterInvalidLastName(String)"
});
formatter.result({
  "duration": 118429000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd123",
      "offset": 18
    }
  ],
  "location": "CreateAccountStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 121530500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 39
    }
  ],
  "location": "CreateAccountStep.iCanVerifyFirstNameErrorMessage(String)"
});
formatter.result({
  "duration": 49699700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 38
    }
  ],
  "location": "CreateAccountStep.iCanVerifyLastNameErrorMessage(String)"
});
formatter.result({
  "duration": 57381200,
  "status": "passed"
});
formatter.after({
  "duration": 937756400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "I can verify that with invalid data account can\u0027t be created and gives error message",
  "description": "",
  "id": "i-want-to-create-an-account-successfully;i-can-verify-that-with-invalid-data-account-can\u0027t-be-created-and-gives-error-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Sanity"
    },
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter invalid first name \"\u003cfirst name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter invalid last name \"\u003clast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I can verify error message \"error\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "i-want-to-create-an-account-successfully;i-can-verify-that-with-invalid-data-account-can\u0027t-be-created-and-gives-error-message;",
  "rows": [
    {
      "cells": [
        "first name",
        "last name",
        "password"
      ],
      "line": 28,
      "id": "i-want-to-create-an-account-successfully;i-can-verify-that-with-invalid-data-account-can\u0027t-be-created-and-gives-error-message;;1"
    },
    {
      "cells": [
        "123",
        "and123",
        "asd123"
      ],
      "line": 29,
      "id": "i-want-to-create-an-account-successfully;i-can-verify-that-with-invalid-data-account-can\u0027t-be-created-and-gives-error-message;;2"
    },
    {
      "cells": [
        "ram1",
        "12kumar",
        "asd123"
      ],
      "line": 30,
      "id": "i-want-to-create-an-account-successfully;i-can-verify-that-with-invalid-data-account-can\u0027t-be-created-and-gives-error-message;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5433832500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on a create account page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on a home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on a signIn tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "enter email address \"postman1@prime.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on create account",
  "keyword": "And "
});
formatter.match({
  "location": "viewItemStep.iAmOnAHomePage()"
});
formatter.result({
  "duration": 54600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnASignInTab()"
});
formatter.result({
  "duration": 3094880100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postman1@prime.com",
      "offset": 21
    }
  ],
  "location": "CreateAccountStep.enterEmailAddress(String)"
});
formatter.result({
  "duration": 156862600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnCreateAccount()"
});
formatter.result({
  "duration": 1103430700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "I can verify that with invalid data account can\u0027t be created and gives error message",
  "description": "",
  "id": "i-want-to-create-an-account-successfully;i-can-verify-that-with-invalid-data-account-can\u0027t-be-created-and-gives-error-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Sanity"
    },
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter invalid first name \"123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter invalid last name \"and123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"asd123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I can verify error message \"error\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 28
    }
  ],
  "location": "CreateAccountStep.iEnterInvalidFirstName(String)"
});
formatter.result({
  "duration": 256220600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "and123",
      "offset": 27
    }
  ],
  "location": "CreateAccountStep.iEnterInvalidLastName(String)"
});
formatter.result({
  "duration": 130812600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd123",
      "offset": 18
    }
  ],
  "location": "CreateAccountStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 129012600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnRegisterButton()"
});
formatter.result({
  "duration": 1217442400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 28
    }
  ],
  "location": "CreateAccountStep.iCanVerifyErrorMessage(String)"
});
formatter.result({
  "duration": 37302100,
  "status": "passed"
});
formatter.after({
  "duration": 745049800,
  "status": "passed"
});
formatter.before({
  "duration": 5912430700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on a create account page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on a home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on a signIn tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "enter email address \"postman1@prime.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on create account",
  "keyword": "And "
});
formatter.match({
  "location": "viewItemStep.iAmOnAHomePage()"
});
formatter.result({
  "duration": 238800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnASignInTab()"
});
formatter.result({
  "duration": 2258530600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postman1@prime.com",
      "offset": 21
    }
  ],
  "location": "CreateAccountStep.enterEmailAddress(String)"
});
formatter.result({
  "duration": 109812700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnCreateAccount()"
});
formatter.result({
  "duration": 1090770000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "I can verify that with invalid data account can\u0027t be created and gives error message",
  "description": "",
  "id": "i-want-to-create-an-account-successfully;i-can-verify-that-with-invalid-data-account-can\u0027t-be-created-and-gives-error-message;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Sanity"
    },
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter invalid first name \"ram1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter invalid last name \"12kumar\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"asd123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I can verify error message \"error\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ram1",
      "offset": 28
    }
  ],
  "location": "CreateAccountStep.iEnterInvalidFirstName(String)"
});
formatter.result({
  "duration": 730300000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12kumar",
      "offset": 27
    }
  ],
  "location": "CreateAccountStep.iEnterInvalidLastName(String)"
});
formatter.result({
  "duration": 112370600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd123",
      "offset": 18
    }
  ],
  "location": "CreateAccountStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 98656200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnRegisterButton()"
});
formatter.result({
  "duration": 1169601500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 28
    }
  ],
  "location": "CreateAccountStep.iCanVerifyErrorMessage(String)"
});
formatter.result({
  "duration": 37891800,
  "status": "passed"
});
formatter.after({
  "duration": 737838500,
  "status": "passed"
});
formatter.before({
  "duration": 4651510700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on a create account page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on a home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on a signIn tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "enter email address \"postman1@prime.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on create account",
  "keyword": "And "
});
formatter.match({
  "location": "viewItemStep.iAmOnAHomePage()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnASignInTab()"
});
formatter.result({
  "duration": 2646178800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postman1@prime.com",
      "offset": 21
    }
  ],
  "location": "CreateAccountStep.enterEmailAddress(String)"
});
formatter.result({
  "duration": 155184500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnCreateAccount()"
});
formatter.result({
  "duration": 1120839100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "I can create account with valid information and verify my account",
  "description": "",
  "id": "i-want-to-create-an-account-successfully;i-can-create-account-with-valid-information-and-verify-my-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I enter all mandatory information",
  "rows": [
    {
      "cells": [
        "Ram",
        "Kumar",
        "abc1234",
        "9 Ayodhya Street",
        "London",
        "Arizona",
        "12345",
        "01234567891"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can verify my account page \"MY ACCOUNT\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I can verify account name displayed \"Ram Kumar\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountStep.iEnterAllMandatoryInformation(DataTable)"
});
formatter.result({
  "duration": 1060665800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountStep.clickOnRegisterButton()"
});
formatter.result({
  "duration": 1501454500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY ACCOUNT",
      "offset": 30
    }
  ],
  "location": "CreateAccountStep.iCanVerifyMyAccountPage(String)"
});
formatter.result({
  "duration": 38762700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram Kumar",
      "offset": 37
    }
  ],
  "location": "CreateAccountStep.iCanVerifyAccountNameDisplayed(String)"
});
formatter.result({
  "duration": 35925300,
  "status": "passed"
});
formatter.after({
  "duration": 770129400,
  "status": "passed"
});
formatter.uri("itemDeleteTest.feature");
formatter.feature({
  "line": 1,
  "name": "I able to delete item from cart",
  "description": "",
  "id": "i-able-to-delete-item-from-cart",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4610898700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify that I should be able to delete the item from cart",
  "description": "",
  "id": "i-able-to-delete-item-from-cart;verify-that-i-should-be-able-to-delete-the-item-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Sanity"
    },
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "There is a item already inside the basket",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should verify delete button is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I able to delete the item by clicking on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should be able to verify that the basket is empty message \"Your shopping cart is empty.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ItemDeleteSteps.thereIsAItemAlreadyInsideTheBasket()"
});
formatter.result({
  "duration": 5489121700,
  "status": "passed"
});
formatter.match({
  "location": "ItemDeleteSteps.iShouldVerifyDeleteButtonIsDisplayed()"
});
formatter.result({
  "duration": 46795400,
  "status": "passed"
});
formatter.match({
  "location": "ItemDeleteSteps.iAbleToDeleteTheItemByClickingOnDeleteButton()"
});
formatter.result({
  "duration": 1089160700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your shopping cart is empty.",
      "offset": 61
    }
  ],
  "location": "ItemDeleteSteps.iShouldBeAbleToVerifyThatTheBasketIsEmptyMessage(String)"
});
formatter.result({
  "duration": 1248607000,
  "status": "passed"
});
formatter.after({
  "duration": 826501800,
  "status": "passed"
});
formatter.uri("ourstorepagetest.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Map feature is working fine in our store page",
  "description": "",
  "id": "verify-map-feature-is-working-fine-in-our-store-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5877239600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I can scroll through the map and take a screenshot for future reference",
  "description": "",
  "id": "verify-map-feature-is-working-fine-in-our-store-page;i-can-scroll-through-the-map-and-take-a-screenshot-for-future-reference",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on a home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on our store tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I scroll down the map till West Palm Beach appear",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I scroll down the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I take screenshot \"WestPalmBeach\"",
  "keyword": "Then "
});
formatter.match({
  "location": "viewItemStep.iAmOnAHomePage()"
});
formatter.result({
  "duration": 47000,
  "status": "passed"
});
formatter.match({
  "location": "ScrollMapANdTakeSS.iClickOnOurStoreTab()"
});
formatter.result({
  "duration": 1047406500,
  "status": "passed"
});
formatter.match({
  "location": "ScrollMapANdTakeSS.iScrollDownTheMapTillWestPalmBeachAppear()"
});
formatter.result({
  "duration": 1752167500,
  "status": "passed"
});
formatter.match({
  "location": "ScrollMapANdTakeSS.iScrollDownThePage()"
});
formatter.result({
  "duration": 19401100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WestPalmBeach",
      "offset": 19
    }
  ],
  "location": "ScrollMapANdTakeSS.iTakeScreenshot(String)"
});
formatter.result({
  "duration": 1341037800,
  "status": "passed"
});
formatter.after({
  "duration": 868354900,
  "status": "passed"
});
formatter.uri("viewitemtest.feature");
formatter.feature({
  "line": 1,
  "name": "Check the item view functions are working fine",
  "description": "",
  "id": "check-the-item-view-functions-are-working-fine",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4761899500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I can view an item from summer collection",
  "description": "",
  "id": "check-the-item-view-functions-are-working-fine;i-can-view-an-item-from-summer-collection",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on a home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on Woman button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select summer dresses option",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify summer items only display inside search result \"SUMMER DRESSES \"",
  "keyword": "Then "
});
formatter.match({
  "location": "viewItemStep.iAmOnAHomePage()"
});
formatter.result({
  "duration": 57000,
  "status": "passed"
});
formatter.match({
  "location": "viewItemStep.iMouseHoverOnWomanButton()"
});
formatter.result({
  "duration": 40300,
  "status": "passed"
});
formatter.match({
  "location": "viewItemStep.iSelectSummerDressesOption()"
});
formatter.result({
  "duration": 2780692400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUMMER DRESSES ",
      "offset": 55
    }
  ],
  "location": "viewItemStep.verifySummerItemsOnlyDisplayInsideSearchResult(String)"
});
formatter.result({
  "duration": 38496000,
  "status": "passed"
});
formatter.after({
  "duration": 837333100,
  "status": "passed"
});
formatter.before({
  "duration": 5298704600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "If I change price range then search result should change",
  "description": "",
  "id": "check-the-item-view-functions-are-working-fine;if-i-change-price-range-then-search-result-should-change",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on a home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I select summer dresses option",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I change the price range",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify items displayed are wth in the the selected price range",
  "keyword": "Then "
});
formatter.match({
  "location": "viewItemStep.iAmOnAHomePage()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({
  "location": "viewItemStep.iSelectSummerDressesOption()"
});
formatter.result({
  "duration": 2257893200,
  "status": "passed"
});
formatter.match({
  "location": "viewItemStep.iChangeThePriceRange()"
});
formatter.result({
  "duration": 1465655000,
  "status": "passed"
});
formatter.match({
  "location": "viewItemStep.verifyItemsDisplayedAreWthInTheTheSelectedPriceRange()"
});
formatter.result({
  "duration": 68600,
  "status": "passed"
});
formatter.after({
  "duration": 859222700,
  "status": "passed"
});
});