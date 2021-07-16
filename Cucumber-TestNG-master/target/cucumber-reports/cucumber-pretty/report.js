$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/OneDrive/Desktop/Cucumber/Cucumber-TestNG-master/src/main/java/Features/AnZUICalculator.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Harish Kumar mandal"
    }
  ],
  "line": 3,
  "name": "Borrowing calculator feature",
  "description": "",
  "id": "borrowing-calculator-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Borrowing calculator Test Scenario",
  "description": "",
  "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is already on borrowing calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of borrowing calculator Page is ANZ Logo",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click Application type as Single",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user select number of dependants as zero",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on property you would like to buy as home to live in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter Your income before tax \"\u003cincomeBeforeTax\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enter Your other income  \"\u003cotherIncome\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enter Living expenses  \"\u003clivingExpenses\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enter current home loan repayments  \"\u003ccurrentHomeLoan\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enter Other loan repayments \"\u003cotherLoanRepayment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user enter Other commitments \"\u003cotherCommitments\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user enter Total credit card limits \"\u003ctotalcreditcardslimits\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on work out how much i could borrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "fetch the the estimate amount you could borrow",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario;",
  "rows": [
    {
      "cells": [
        "incomeBeforeTax",
        "otherIncome",
        "livingExpenses",
        "currentHomeLoan",
        "otherLoanRepayment",
        "otherCommitments",
        "totalcreditcardslimits"
      ],
      "line": 24,
      "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario;;1"
    },
    {
      "cells": [
        "80000",
        "10000",
        "500",
        "0",
        "100",
        "0",
        "10000"
      ],
      "line": 25,
      "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Borrowing calculator Test Scenario",
  "description": "",
  "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is already on borrowing calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of borrowing calculator Page is ANZ Logo",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click Application type as Single",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user select number of dependants as zero",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on property you would like to buy as home to live in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter Your income before tax \"80000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enter Your other income  \"10000\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enter Living expenses  \"500\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enter current home loan repayments  \"0\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enter Other loan repayments \"100\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user enter Other commitments \"0\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user enter Total credit card limits \"10000\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on work out how much i could borrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "fetch the the estimate amount you could borrow",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_borrowing_calculator_page()"
});
formatter.result({
  "duration": 10665447900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_borrowing_calculator_page_is_anz_logo()"
});
formatter.result({
  "duration": 9348200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_application_type_as_single()"
});
formatter.result({
  "duration": 177872200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_select_number_of_dependants_as_zero()"
});
formatter.result({
  "duration": 146731000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_property_you_would_like_to_buy_as_home_to_live_in()"
});
formatter.result({
  "duration": 209213900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enter_your_income_before_tax_something(String)"
});
formatter.result({
  "duration": 547747200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enter_your_other_income_something(String)"
});
formatter.result({
  "duration": 521208400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enter_living_expenses_something(String)"
});
formatter.result({
  "duration": 369843300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 42
    }
  ],
  "location": "LoginStepDefinition.user_enter_current_home_loan_repayments_something(String)"
});
formatter.result({
  "duration": 363549900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 34
    }
  ],
  "location": "LoginStepDefinition.user_enter_other_loan_repayments_something(String)"
});
formatter.result({
  "duration": 507654700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enter_other_commitments_something(String)"
});
formatter.result({
  "duration": 334583000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition.user_enter_total_credit_card_limits_something(String)"
});
formatter.result({
  "duration": 506468400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_work_out_how_much_i_could_borrow_button()"
});
formatter.result({
  "duration": 2344569600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.fetch_the_the_estimate_amount_you_could_borrow()"
});
formatter.result({
  "duration": 2090736900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 835792500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Borrowing calculator Test Scenario",
  "description": "",
  "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user is already on borrowing calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "title of borrowing calculator Page is ANZ Logo",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user click Application type as Single",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user select number of dependants as zero",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user click on property you would like to buy as home to live in",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user enter Your income before tax \"\u003cincomeBeforeTax\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user enter Your other income  \"\u003cotherIncome\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user enter Living expenses  \"\u003clivingExpenses\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user enter current home loan repayments  \"\u003ccurrentHomeLoan\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user enter Other loan repayments \"\u003cotherLoanRepayment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user enter Other commitments \"\u003cotherCommitments\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user enter Total credit card limits \"\u003ctotalcreditcardslimits\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user click on work out how much i could borrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "fetch the the estimate amount you could borrow",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user click the start over button",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario;",
  "rows": [
    {
      "cells": [
        "incomeBeforeTax",
        "otherIncome",
        "livingExpenses",
        "currentHomeLoan",
        "otherLoanRepayment",
        "otherCommitments",
        "totalcreditcardslimits"
      ],
      "line": 47,
      "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario;;1"
    },
    {
      "cells": [
        "80000",
        "10000",
        "500",
        "0",
        "100",
        "0",
        "10000"
      ],
      "line": 48,
      "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "Borrowing calculator Test Scenario",
  "description": "",
  "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 27,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user is already on borrowing calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "title of borrowing calculator Page is ANZ Logo",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user click Application type as Single",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user select number of dependants as zero",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user click on property you would like to buy as home to live in",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user enter Your income before tax \"80000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user enter Your other income  \"10000\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user enter Living expenses  \"500\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user enter current home loan repayments  \"0\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user enter Other loan repayments \"100\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user enter Other commitments \"0\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user enter Total credit card limits \"10000\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user click on work out how much i could borrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "fetch the the estimate amount you could borrow",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user click the start over button",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_borrowing_calculator_page()"
});
formatter.result({
  "duration": 9119032100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_borrowing_calculator_page_is_anz_logo()"
});
formatter.result({
  "duration": 9265400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_application_type_as_single()"
});
formatter.result({
  "duration": 233627100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_select_number_of_dependants_as_zero()"
});
formatter.result({
  "duration": 258696000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_property_you_would_like_to_buy_as_home_to_live_in()"
});
formatter.result({
  "duration": 217349400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enter_your_income_before_tax_something(String)"
});
formatter.result({
  "duration": 457018800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enter_your_other_income_something(String)"
});
formatter.result({
  "duration": 341067600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enter_living_expenses_something(String)"
});
formatter.result({
  "duration": 366202700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 42
    }
  ],
  "location": "LoginStepDefinition.user_enter_current_home_loan_repayments_something(String)"
});
formatter.result({
  "duration": 239248300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 34
    }
  ],
  "location": "LoginStepDefinition.user_enter_other_loan_repayments_something(String)"
});
formatter.result({
  "duration": 273429000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enter_other_commitments_something(String)"
});
formatter.result({
  "duration": 370049100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition.user_enter_total_credit_card_limits_something(String)"
});
formatter.result({
  "duration": 290562500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_work_out_how_much_i_could_borrow_button()"
});
formatter.result({
  "duration": 2321864600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.fetch_the_the_estimate_amount_you_could_borrow()"
});
formatter.result({
  "duration": 2089526200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_the_start_over_button()"
});
formatter.result({
  "duration": 3246468800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 780399000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 51,
  "name": "Borrowing calculator Test Scenario",
  "description": "",
  "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "user is already on borrowing calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "title of borrowing calculator Page is ANZ Logo",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user click Application type as Single",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "user select number of dependants as zero",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "user click on property you would like to buy as home to live in",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "user enter Your income before tax \"\u003cincomeBeforeTax\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user enter Your other income  \"\u003cotherIncome\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "user enter Living expenses  \"\u003clivingExpenses\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "user enter current home loan repayments  \"\u003ccurrentHomeLoan\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "user enter Other loan repayments \"\u003cotherLoanRepayment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user enter Other commitments \"\u003cotherCommitments\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "user enter Total credit card limits \"\u003ctotalcreditcardslimits\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "user click on work out how much i could borrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "fetch the the estimate amount you could borrow",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "user click the start over button",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "user entering  the value only for Living expenses as \"\u003clivingExpenses1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "user click on work out how much i could borrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "user validate the actual error message withh expected as \"\u003cexpectedmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario;",
  "rows": [
    {
      "cells": [
        "incomeBeforeTax",
        "otherIncome",
        "livingExpenses",
        "livingExpenses1",
        "currentHomeLoan",
        "otherLoanRepayment",
        "otherCommitments",
        "totalcreditcardslimits",
        "expectedmessage"
      ],
      "line": 73,
      "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario;;1"
    },
    {
      "cells": [
        "80000",
        "10000",
        "500",
        "1",
        "0",
        "100",
        "0",
        "10000",
        "Based on the details you\u0027ve entered, we\u0027re unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500."
      ],
      "line": 74,
      "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 74,
  "name": "Borrowing calculator Test Scenario",
  "description": "",
  "id": "borrowing-calculator-feature;borrowing-calculator-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 50,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "user is already on borrowing calculator Page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "title of borrowing calculator Page is ANZ Logo",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user click Application type as Single",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "user select number of dependants as zero",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "user click on property you would like to buy as home to live in",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "user enter Your income before tax \"80000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user enter Your other income  \"10000\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "user enter Living expenses  \"500\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "user enter current home loan repayments  \"0\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "user enter Other loan repayments \"100\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user enter Other commitments \"0\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "user enter Total credit card limits \"10000\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "user click on work out how much i could borrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "fetch the the estimate amount you could borrow",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "user click the start over button",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "user entering  the value only for Living expenses as \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "user click on work out how much i could borrow button",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "user validate the actual error message withh expected as \"Based on the details you\u0027ve entered, we\u0027re unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_borrowing_calculator_page()"
});
formatter.result({
  "duration": 8515190700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_borrowing_calculator_page_is_anz_logo()"
});
formatter.result({
  "duration": 7362500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_application_type_as_single()"
});
formatter.result({
  "duration": 134075300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_select_number_of_dependants_as_zero()"
});
formatter.result({
  "duration": 121451100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_property_you_would_like_to_buy_as_home_to_live_in()"
});
formatter.result({
  "duration": 204495200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enter_your_income_before_tax_something(String)"
});
formatter.result({
  "duration": 396818100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enter_your_other_income_something(String)"
});
formatter.result({
  "duration": 381342400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enter_living_expenses_something(String)"
});
formatter.result({
  "duration": 333723100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 42
    }
  ],
  "location": "LoginStepDefinition.user_enter_current_home_loan_repayments_something(String)"
});
formatter.result({
  "duration": 290310800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 34
    }
  ],
  "location": "LoginStepDefinition.user_enter_other_loan_repayments_something(String)"
});
formatter.result({
  "duration": 232061200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enter_other_commitments_something(String)"
});
formatter.result({
  "duration": 285139900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition.user_enter_total_credit_card_limits_something(String)"
});
formatter.result({
  "duration": 312435300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_work_out_how_much_i_could_borrow_button()"
});
formatter.result({
  "duration": 2298367300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.fetch_the_the_estimate_amount_you_could_borrow()"
});
formatter.result({
  "duration": 2090901900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_the_start_over_button()"
});
formatter.result({
  "duration": 3209555400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "LoginStepDefinition.user_entering_the_value_only_for_living_expenses_as_something(String)"
});
formatter.result({
  "duration": 121423000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_work_out_how_much_i_could_borrow_button()"
});
formatter.result({
  "duration": 2225312000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Based on the details you\u0027ve entered, we\u0027re unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500.",
      "offset": 58
    }
  ],
  "location": "LoginStepDefinition.user_validate_the_actual_error_message_withh_expected_as_something(String)"
});
formatter.result({
  "duration": 43716100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 789256600,
  "status": "passed"
});
});