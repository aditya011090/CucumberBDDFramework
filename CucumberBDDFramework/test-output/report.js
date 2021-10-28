$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login",
  "description": "",
  "id": "free-crm-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Without Examples keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: Free CRM login test scenario"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Given User already on login page"
    },
    {
      "line": 8,
      "value": "#When Title of login page is free CRM"
    },
    {
      "line": 9,
      "value": "#Then User enters \"groupautomation\" and \"Test@12345\""
    },
    {
      "line": 10,
      "value": "#Then User clicks on login button"
    },
    {
      "line": 11,
      "value": "#Then User is on Home page"
    },
    {
      "line": 12,
      "value": "#Then Close the browser"
    },
    {
      "line": 15,
      "value": "#With Example keyword"
    }
  ],
  "line": 16,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Title of login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "free-crm-login;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "free-crm-login;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "groupautomation",
        "Test@12345"
      ],
      "line": 27,
      "id": "free-crm-login;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "groupautomation",
        "Test@12345"
      ],
      "line": 28,
      "id": "free-crm-login;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Title of login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters \"groupautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 8486527100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 31142900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "groupautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 285886600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7393467400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 5662600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 919033600,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Title of login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters \"groupautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 6308747100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 23130400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "groupautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 289630000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7332300000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 6788700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 974573400,
  "status": "passed"
});
});