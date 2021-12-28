package com.automationpractice.cucumber.steps;

import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.OurStorePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ScrollMapANdTakeSS {
    @When("^I click on our store tab$")
    public void iClickOnOurStoreTab() {
        new HomePage().clickOnOurStoreTab();
    }

    @And("^I scroll down the map till West Palm Beach appear$")
    public void iScrollDownTheMapTillWestPalmBeachAppear() {
        new OurStorePage().scrollThroughMap();
    }

    @And("^I scroll down the page$")
    public void iScrollDownThePage() {
        new OurStorePage().sliderDown();
    }

    @Then("^I take screenshot \"([^\"]*)\"$")
    public void iTakeScreenshot(String ssName) {
new OurStorePage().takeScreenshot(ssName);
    }
}
