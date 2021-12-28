Feature: I able to delete item from cart
@Sanity @Regression
  Scenario: Verify that I should be able to delete the item from cart
    Given There is a item already inside the basket
    When I should verify delete button is displayed
    And I able to delete the item by clicking on delete button
    Then I should be able to verify that the basket is empty message "Your shopping cart is empty."


