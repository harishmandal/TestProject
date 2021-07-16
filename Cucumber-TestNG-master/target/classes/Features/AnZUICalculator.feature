#Author: Harish Kumar mandal
@tag
Feature: Borrowing calculator feature

  @tag1
  Scenario Outline: Borrowing calculator Test Scenario
    Given user is already on borrowing calculator Page
    When title of borrowing calculator Page is ANZ Logo
    Then user click Application type as Single
    Then user select number of dependants as zero
    Then user click on property you would like to buy as home to live in
    Then user enter Your income before tax "<incomeBeforeTax>"
    Then user enter Your other income  "<otherIncome>"
    Then user enter Living expenses  "<livingExpenses>"
    Then user enter current home loan repayments  "<currentHomeLoan>"
    Then user enter Other loan repayments "<otherLoanRepayment>"
    Then user enter Other commitments "<otherCommitments>"
    Then user enter Total credit card limits "<totalcreditcardslimits>"
    Then user click on work out how much i could borrow button
    Then fetch the the estimate amount you could borrow
    Then Close the browser

    Examples: 
      | incomeBeforeTax | otherIncome | livingExpenses | currentHomeLoan | otherLoanRepayment | otherCommitments | totalcreditcardslimits |
      |           80000 |       10000 |            500 |               0 |                100 |                0 |                  10000 |

  @tag2
  Scenario Outline: Borrowing calculator Test Scenario
    Given user is already on borrowing calculator Page
    When title of borrowing calculator Page is ANZ Logo
    Then user click Application type as Single
    Then user select number of dependants as zero
    Then user click on property you would like to buy as home to live in
    Then user enter Your income before tax "<incomeBeforeTax>"
    Then user enter Your other income  "<otherIncome>"
    Then user enter Living expenses  "<livingExpenses>"
    Then user enter current home loan repayments  "<currentHomeLoan>"
    Then user enter Other loan repayments "<otherLoanRepayment>"
    Then user enter Other commitments "<otherCommitments>"
    Then user enter Total credit card limits "<totalcreditcardslimits>"
    Then user click on work out how much i could borrow button
    Then fetch the the estimate amount you could borrow
    Then user click the start over button
    Then Close the browser

    Examples: 
      | incomeBeforeTax | otherIncome | livingExpenses | currentHomeLoan | otherLoanRepayment | otherCommitments | totalcreditcardslimits |
      |           80000 |       10000 |            500 |               0 |                100 |                0 |                  10000 |

  @tag3
  Scenario Outline: Borrowing calculator Test Scenario
    Given user is already on borrowing calculator Page
    When title of borrowing calculator Page is ANZ Logo
    Then user click Application type as Single
    Then user select number of dependants as zero
    Then user click on property you would like to buy as home to live in
    Then user enter Your income before tax "<incomeBeforeTax>"
    Then user enter Your other income  "<otherIncome>"
    Then user enter Living expenses  "<livingExpenses>"
    Then user enter current home loan repayments  "<currentHomeLoan>"
    Then user enter Other loan repayments "<otherLoanRepayment>"
    Then user enter Other commitments "<otherCommitments>"
    Then user enter Total credit card limits "<totalcreditcardslimits>"
    Then user click on work out how much i could borrow button
    Then fetch the the estimate amount you could borrow
    Then user click the start over button
    Then user entering  the value only for Living expenses as "<livingExpenses1>"
    Then user click on work out how much i could borrow button
    Then user validate the actual error message withh expected as "<expectedmessage>"
    Then Close the browser

    Examples: 
      | incomeBeforeTax | otherIncome | livingExpenses | livingExpenses1 | currentHomeLoan | otherLoanRepayment | otherCommitments | totalcreditcardslimits | expectedmessage                                                                                                                                                 |
      |           80000 |       10000 |            500 |               1 |               0 |                100 |                0 |                  10000 | Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500. |
