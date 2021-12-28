Feature: I want to create an account successfully

  Background: I am on a create account page
    Given I am on a home page
    And click on a signIn tab
    And enter email address "postman1@prime.com"
    And click on create account

  @Smoke @Regression
  Scenario Outline: I can verify that form only accept valid data and with invalid data gives error message
    When I enter invalid first name "<first name>"
    And I enter invalid last name "<last name>"
    And I enter password "<password>"
    Then I can verify first name error message "error"
    And I can verify last name error message "error"
    Examples:
      | first name | last name | password |
      | 123        | and123    | asd123   |
      | ram1       | 12kumar   | asd123   |
@Sanity @Regression
  Scenario Outline: I can verify that with invalid data account can't be created and gives error message
    When I enter invalid first name "<first name>"
    And I enter invalid last name "<last name>"
    And I enter password "<password>"
    And click on register button
    Then I can verify error message "error"
    Examples:
      | first name | last name | password |
      | 123        | and123    | asd123   |
      | ram1       | 12kumar   | asd123   |
@Regression
  Scenario: I can create account with valid information and verify my account
    When I enter all mandatory information
      |Ram|Kumar|abc1234|9 Ayodhya Street|London|Arizona|12345|01234567891|
    And click on register button
    Then I can verify my account page "MY ACCOUNT"
    And I can verify account name displayed "Ram Kumar"
