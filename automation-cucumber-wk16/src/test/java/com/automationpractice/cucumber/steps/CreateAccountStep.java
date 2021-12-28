package com.automationpractice.cucumber.steps;

import com.automationpractice.pages.CreateAccountPage;
import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.MyAccountPage;
import com.automationpractice.pages.SignInPage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

public class CreateAccountStep {
    @And("^click on a signIn tab$")
    public void clickOnASignInTab() {
        new HomePage().clickOnSighInTab();
    }

    @And("^enter email address \"([^\"]*)\"$")
    public void enterEmailAddress(String email)  {
       new SignInPage().enterEmail(email);
    }

    @And("^click on create account$")
    public void clickOnCreateAccount() {
        new SignInPage().clickOnCreateAccount();
    }

    @When("^I enter invalid first name \"([^\"]*)\"$")
    public void iEnterInvalidFirstName(String fName)  {
        new CreateAccountPage().enterFirstName(fName);

    }

    @And("^I enter invalid last name \"([^\"]*)\"$")
    public void iEnterInvalidLastName(String lName)  {
       new CreateAccountPage().enterLastName(lName);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
       new CreateAccountPage().enterPassword(password);
    }

    @Then("^I can verify first name error message \"([^\"]*)\"$")
    public void iCanVerifyFirstNameErrorMessage(String eMessage)  {
       new CreateAccountPage().verifyFirstNameError(eMessage);
    }

    @And("^I can verify last name error message \"([^\"]*)\"$")
    public void iCanVerifyLastNameErrorMessage(String eMessage)  {
       new CreateAccountPage().verifyLastNameError(eMessage);
    }

    @And("^click on register button$")
    public void clickOnRegisterButton() {
        new CreateAccountPage().clickOnRegister();
    }

    @Then("^I can verify error message \"([^\"]*)\"$")
    public void iCanVerifyErrorMessage(String eMessage)  {
        new CreateAccountPage().verifyErrorMessage(eMessage);
    }

    @When("^I enter all mandatory information$")
    public void iEnterAllMandatoryInformation(DataTable dataTable) {
        List<String> data = dataTable.asList(String.class);
        new CreateAccountPage().enterAllMandatoryData(data.get(0),data.get(1),data.get(2),data.get(3),data.get(4),data.get(5),data.get(6),data.get(7));
    }

    @Then("^I can verify my account page \"([^\"]*)\"$")
    public void iCanVerifyMyAccountPage(String eMessage) {
        new MyAccountPage().verifyPageTitle(eMessage);
    }

    @And("^I can verify account name displayed \"([^\"]*)\"$")
    public void iCanVerifyAccountNameDisplayed(String name) {
        new MyAccountPage().verifyPageHasAccountName(name);
    }
}
