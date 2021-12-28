package com.automationpractice.testsuite;

import com.automationpractice.pages.CreateAccountPage;
import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.MyAccountPage;
import com.automationpractice.pages.SighInPage;
import com.automationpractice.testbase.TestBase;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class CreateAccountTest extends TestBase {
    HomePage homePage;
    SighInPage sighInPage;
    CreateAccountPage createAccountPage;
    MyAccountPage myAccountPage;
    @BeforeMethod(alwaysRun = true)
    public void inIt(){
      homePage =new HomePage();
      sighInPage= new SighInPage();
      createAccountPage= new CreateAccountPage();
      myAccountPage= new MyAccountPage();
    }
   /* @BeforeTest(alwaysRun = true)
    public void goToSignPage(){
        homePage.clickOnSighInTab();
        sighInPage.enterEmail("abc@prime.com");
        sighInPage.clickOnCreateAccount();
    }*/
    @Test (groups = {"sanity","regression"})
    public void verifyFormOnlyAcceptValidData(){
        homePage.clickOnSighInTab();
        sighInPage.enterEmail("abc@prime.com");
        sighInPage.clickOnCreateAccount();
        createAccountPage.enterFirstName("123");
        createAccountPage.enterLastName("kumar12");
        createAccountPage.enterPassword("123@abc");
        createAccountPage.verifyFirstNameError("error");
        createAccountPage.verifyLastNameError("error");
    }
    @Test (groups = {"smoke","regression"})
    public void verifyInvalidInformationGivesErrorMessage(){
        homePage.clickOnSighInTab();
        sighInPage.enterEmail("abc@prime.com");
        sighInPage.clickOnCreateAccount();
        createAccountPage.enterFirstName("123");
        createAccountPage.enterLastName("kumar12");
        createAccountPage.enterPassword("123@abc");
        createAccountPage.clickOnRegister();
        createAccountPage.verifyErrorMessage("error");
    }
    @Test (groups = {"regression"})
    public void completeRegistrationAndVerify(){
        homePage.clickOnSighInTab();
        sighInPage.enterEmail(emailString()+"@prime.com");
        sighInPage.clickOnCreateAccount();
        createAccountPage.enterFirstName("Ram");
        createAccountPage.enterLastName("Kumar");
        createAccountPage.enterPassword("123@abc");
        createAccountPage.enterAddressLine1("9 Greens Court");
        createAccountPage.enterCity("Florida");
        createAccountPage.selectState("Alabama");
        createAccountPage.enterPostCode("01000");
        createAccountPage.enterMobileNumber("01234567891");
        createAccountPage.clickOnRegister();
        myAccountPage.verifyPageTitle("MY ACCOUNT");
        myAccountPage.verifyPageHasAccountName("Ram Kumar");

    }

}
