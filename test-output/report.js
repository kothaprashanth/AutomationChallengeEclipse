$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/WorkspaceBDD/Features/DBSSample.feature");
formatter.feature({
  "line": 1,
  "name": "DBSSampleAutomation",
  "description": "",
  "id": "dbssampleautomation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 427179800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Opens URL \"https://www.dbs.com.sg/index/default.page\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks on LearnMore Button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verifies Sustainability page and clicks on Singapore",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user verifies Table is displayed and export it to Excel",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on About Button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicks on Who we are link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicks on Our  Awards and Accolades",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should  navigate to Awards page and validate with \"A World First\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsDBS.user_Launch_Chrome_Browser()"
});
formatter.write("This goes to report");
formatter.result({
  "duration": 6552396600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.dbs.com.sg/index/default.page",
      "offset": 16
    }
  ],
  "location": "StepDefinitionsDBS.user_Opens_URL(String)"
});
formatter.result({
  "duration": 5922219500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsDBS.clicks_on_LearnMore_Button()"
});
formatter.result({
  "duration": 7725006600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsDBS.user_verifies_Sustainability_page_and_clicks_on_Singapore()"
});
formatter.result({
  "duration": 4239853700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsDBS.user_verifies_Table_is_displayed_and_export_it_to_Excel()"
});
formatter.result({
  "duration": 3696005200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsDBS.user_clicks_on_About_Button()"
});
formatter.result({
  "duration": 4980084700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsDBS.clicks_on_Who_we_are_link()"
});
formatter.result({
  "duration": 3512483100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsDBS.clicks_on_Our_Awards_and_Accolades()"
});
formatter.result({
  "duration": 3311251000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A World First",
      "offset": 56
    }
  ],
  "location": "StepDefinitionsDBS.user_should_navigate_to_Awards_page_and_validate_with(String)"
});
formatter.result({
  "duration": 2243525800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "PositiveSampleFlow",
  "description": "",
  "id": "dbssampleautomation;positivesampleflow",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@positiveTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User should validate no of awards as \"22\" print the awards and descriptions in the report",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 38
    }
  ],
  "location": "StepDefinitionsDBS.user_should_validate_no_of_awards_as_print_the_awards_and_descriptions_in_the_report(String)"
});
formatter.write("No of Awards are matches with the given value");
formatter.embedding("text/html", "\u003ctable border\u003d\u00271\u0027\u003e\u003ctr\u003e\u003cth\u003eAWARD NAME\u003c/th\u003e\u003cth\u003eCAPTION OF AWARD\u003c/th\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eEuromoney\u003c/td\u003e\u003ctd\u003eWorld\u0027s Best Bank 2019\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eThe Banker\u003c/td\u003e\u003ctd\u003eBank of the Year 2018\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eBest Bank in the World 2018\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eEuromoney\u003c/td\u003e\u003ctd\u003eAwards For Excellence\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eWorld\u0027s Best Banks\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eWorld\u0027s Best Investment Banks and Derivatives Providers\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eWorld\u0027s Best Treasury and Cash Management Banks and Providers\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eTrade Finance and Supply Chain Finance Awards\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eBest Sub-Custodian Banks\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eWorld\u0027s Best Private Bank Awards\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eThe Asset\u003c/td\u003e\u003ctd\u003eTreasury, Trade, Sustainable Supply Chain and Risk Management Awards\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eAsiamoney\u003c/td\u003e\u003ctd\u003ePrivate Banking Awards\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eHackett Group\u003c/td\u003e\u003ctd\u003eDigital Awards\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eHackett Group\u003c/td\u003e\u003ctd\u003eDigital Awards\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eForeign Exchange Awards\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eTrade Finance and Supply Chain Finance Awards\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eWorld\u0027s Best Private Bank Awards\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eThe Innovators\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eWorld\u0027s Best Private Bank Awards\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eBloomberg\u003c/td\u003e\u003ctd\u003eGender Equality Index\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eEuromoney\u003c/td\u003e\u003ctd\u003eAwards for Excellence\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003eGlobal Finance\u003c/td\u003e\u003ctd\u003eWorld\u0027s Best Investment Banks and Derivatives Providers\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e");
formatter.result({
  "duration": 1487899500,
  "status": "passed"
});
formatter.after({
  "duration": 1224278800,
  "status": "passed"
});
formatter.before({
  "duration": 47350000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Opens URL \"https://www.dbs.com.sg/index/default.page\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks on LearnMore Button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verifies Sustainability page and clicks on Singapore",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user verifies Table is displayed and export it to Excel",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on About Button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicks on Who we are link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clicks on Our  Awards and Accolades",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should  navigate to Awards page and validate with \"A World First\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsDBS.user_Launch_Chrome_Browser()"
});
formatter.write("This goes to report");
formatter.result({
  "duration": 4388156500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.dbs.com.sg/index/default.page",
      "offset": 16
    }
  ],
  "location": "StepDefinitionsDBS.user_Opens_URL(String)"
});
formatter.result({
  "duration": 5275030800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsDBS.clicks_on_LearnMore_Button()"
});
formatter.result({
  "duration": 6826497300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsDBS.user_verifies_Sustainability_page_and_clicks_on_Singapore()"
});
formatter.result({
  "duration": 4406646500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsDBS.user_verifies_Table_is_displayed_and_export_it_to_Excel()"
});
formatter.result({
  "duration": 1668641400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsDBS.user_clicks_on_About_Button()"
});
formatter.result({
  "duration": 4518140300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsDBS.clicks_on_Who_we_are_link()"
});
formatter.result({
  "duration": 3321787600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsDBS.clicks_on_Our_Awards_and_Accolades()"
});
formatter.result({
  "duration": 4294034700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A World First",
      "offset": 56
    }
  ],
  "location": "StepDefinitionsDBS.user_should_navigate_to_Awards_page_and_validate_with(String)"
});
formatter.result({
  "duration": 2235857600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "NegativeSampleFlow",
  "description": "",
  "id": "dbssampleautomation;negativesampleflow",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@negativeTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User should validate no of awards as \"25\" print the awards and descriptions in the report",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 38
    }
  ],
  "location": "StepDefinitionsDBS.user_should_validate_no_of_awards_as_print_the_awards_and_descriptions_in_the_report(String)"
});
formatter.write("No of Awards are not matching with the given value");
formatter.result({
  "duration": 717551700,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.StepDefinitionsDBS.user_should_validate_no_of_awards_as_print_the_awards_and_descriptions_in_the_report(StepDefinitionsDBS.java:193)\r\n\tat ✽.And User should validate no of awards as \"25\" print the awards and descriptions in the report(D:/WorkspaceBDD/Features/DBSSample.feature:22)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2141214500,
  "status": "passed"
});
});