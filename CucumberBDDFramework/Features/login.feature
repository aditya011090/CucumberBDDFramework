Feature: Free CRM login


#Without Examples keyword
#Scenario: Free CRM login test scenario
#
#Given User already on login page
#When Title of login page is free CRM
#Then User enters "groupautomation" and "Test@12345"
#Then User clicks on login button
#Then User is on Home page
#Then Close the browser


#With Example keyword
Scenario Outline: Free CRM login test scenario

Given User already on login page
When Title of login page is free CRM
Then User enters "<username>" and "<password>"
Then User clicks on login button
Then User is on Home page
Then Close the browser

Examples:
	|username|password|
	|groupautomation|Test@12345|
	|groupautomation|Test@12345|
	