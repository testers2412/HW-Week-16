package com.automationpractice.cucumber.steps;

import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.SummerOptionPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class viewItemStep {
    @Given("^I am on a home page$")
    public void iAmOnAHomePage() {

    }

    @When("^I mouse hover on Woman button$")
    public void iMouseHoverOnWomanButton() {

    }

    @And("^I select summer dresses option$")
    public void iSelectSummerDressesOption() {
        new HomePage().clickOnSummerOption();
    }

    @Then("^verify summer items only display inside search result \"([^\"]*)\"$")
    public void verifySummerItemsOnlyDisplayInsideSearchResult(String eMessage) {
        new SummerOptionPage().verifySummerDressPage(eMessage);
    }

    @And("^I change the price range$")
    public void iChangeThePriceRange() {
        new SummerOptionPage().changeThePriceRange(25);
    }

    @Then("^verify items displayed are wth in the the selected price range$")
    public void verifyItemsDisplayedAreWthInTheTheSelectedPriceRange() {

    }
}
