Feature: Verify Map feature is working fine in our store page

  @Regression
  Scenario: I can scroll through the map and take a screenshot for future reference
    Given I am on a home page
    When I click on our store tab
    And I scroll down the map till West Palm Beach appear
    And I scroll down the page
    Then I take screenshot "WestPalmBeach"
