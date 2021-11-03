$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("learn.feature");
formatter.feature({
  "line": 1,
  "name": "sample testing scenario",
  "description": "",
  "id": "sample-testing-scenario",
  "keyword": "Feature"
});
formatter.before({
  "duration": 314063,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "this is one sample testing scanrio",
  "description": "",
  "id": "sample-testing-scenario;this-is-one-sample-testing-scanrio",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@uat"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "b",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "b",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "d",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "c",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.a()"
});
formatter.result({
  "duration": 277765103,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.b()"
});
formatter.result({
  "duration": 104530,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.b()"
});
formatter.result({
  "duration": 68545,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.d()"
});
formatter.result({
  "duration": 68570,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.c()"
});
formatter.result({
  "duration": 68789,
  "status": "passed"
});
formatter.after({
  "duration": 271445,
  "status": "passed"
});
formatter.uri("learnOne.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: ehteshaam.huss@gmail.com"
    }
  ],
  "line": 3,
  "name": "login panel",
  "description": "",
  "id": "login-panel",
  "keyword": "Feature"
});
formatter.before({
  "duration": 105587,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 97192841691,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Driver info: chromedriver\u003d91.0.4472.101 (af52a90bf87030dd1523486a1cd3ae25c5d76c9b-refs/branch-heads/4472@{#1462}),platform\u003dMac OS X 10.15.7 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 95.44 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027Ehteshaams-MacBook-Pro.local\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\n\tat stepDef.stepDef.user_is_on_the_login_page(stepDef.java:59)\n\tat ✽.Given user is on the login page(learnOne.feature:6)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "validating login panel with valid credentials",
  "description": "",
  "id": "login-panel;validating-login-panel-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@uat"
    },
    {
      "line": 8,
      "name": "@abc"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enters valid username",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters valid password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should be on the account page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.user_enters_valid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.user_enters_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.user_should_be_on_the_account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDef.user_should_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 61381,
  "status": "passed"
});
formatter.before({
  "duration": 85864,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.user_is_on_the_login_page()"
});
