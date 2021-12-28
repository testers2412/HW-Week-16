package com.automationpractice.cucumber.steps;

import com.automationpractice.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ItemDeleteSteps {
    @Given("^There is a item already inside the basket$")
    public void thereIsAItemAlreadyInsideTheBasket() {
        new HomePage().clickOnWomanCategory();
        new WomanPage().clickOnProduct();
        new ProductsPage().clickOnItemAddTOBasket();
        new ProductsPage().clickOnProcessToCheckout();
    }

    @When("^I should verify delete button is displayed$")
    public void iShouldVerifyDeleteButtonIsDisplayed() {
        new ShoppingCartPage().verifyDeleteButtonIsDisplayed();
    }

    @And("^I able to delete the item by clicking on delete button$")
    public void iAbleToDeleteTheItemByClickingOnDeleteButton() {
        new ShoppingCartPage().deleteItem();
    }

    @Then("^I should be able to verify that the basket is empty message \"([^\"]*)\"$")
    public void iShouldBeAbleToVerifyThatTheBasketIsEmptyMessage(String eMessage)  {
      new ShoppingCartSummaryPage().verifyShoppingCartIsEmpty(eMessage);
    }
}
