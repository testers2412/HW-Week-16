Feature: Check the item view functions are working fine

  @Sanity @Regression
  Scenario: I can view an item from summer collection
    Given I am on a home page
    When I mouse hover on Woman button
    And I select summer dresses option
    Then  verify summer items only display inside search result "SUMMER DRESSES "

  @Regression
  Scenario: If I change price range then search result should change
    Given I am on a home page
    When I select summer dresses option
    And I change the price range
    Then verify items displayed are wth in the the selected price range

