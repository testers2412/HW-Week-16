package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class CreateAccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());

    public CreateAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement firstNameTab;
    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_lastname']")
    WebElement lastNameTab;
    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordTab;
    @CacheLookup
    @FindBy(xpath = "//p[4]//input[1]")
    WebElement addressLine1Tab;
    @CacheLookup
    @FindBy(xpath = "//p[6]//input[1]")
    WebElement cityTab;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement stateTab;
    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement phoneNumberTab;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Register']")
    WebElement registerTab;
    @CacheLookup
    @FindBy(xpath = "//input[@id='postcode']")
    WebElement postCodeTab;
    @CacheLookup
    @FindBy(xpath = "//div[@class='alert alert-danger']//p")
    WebElement errorMessage;
    @CacheLookup
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[1]/div[2]")
    WebElement fNameFormStatus;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div/div[@id='columns']/div/div[@id='center_column']/div[@id='noSlide']/form[@id='account-creation_form']/div/div[3]")
    WebElement lNameFormStatus;


    public void enterFirstName(String firstName) {
        pmSendTextToElement(firstNameTab, firstName);
        log.info("Enter first name : " + firstName.toString());
    }

    public void enterLastName(String lastName) {
        pmSendTextToElement(lastNameTab, lastName);
        log.info("Enter last name : " + lastName.toString());
    }

    public void enterPassword(String password) {
        pmSendTextToElement(passwordTab, password);
        log.info("Enter password : " + password.toString());
    }

    public void enterAddressLine1(String addressLine1) {
        pmSendTextToElement(addressLine1Tab, addressLine1);
        log.info("Enter address line 1 : " + addressLine1.toString());
    }

    public void enterCity(String city) {
        pmSendTextToElement(cityTab, city);
        log.info("Enter city : " + city.toString());
    }

    public void selectState(String state) {
        pmSendTextToElement(stateTab, state);
        log.info("Select state : " + state.toString());
    }

    public void enterPostCode(String postCode) {
        pmSendTextToElement(postCodeTab, postCode);
        log.info("Enter postcode : " + postCode.toString());
    }

    public void enterMobileNumber(String mobileNum) {
        pmSendTextToElement(phoneNumberTab, mobileNum);
        log.info("Enter mobile number : " + mobileNum.toString());
    }

    public void clickOnRegister() {
        pmClickOnElement(registerTab);
        log.info("Click on register : " + registerTab.toString());
    }

    public void verifyFirstNameError(String status) {
        String actualMessage = fNameFormStatus.getAttribute("class");
        Assert.assertTrue(actualMessage.contains(status));
        log.info("Verify first name error : " + status.toString());
    }

    public void verifyLastNameError(String status) {
        String actualMessage = lNameFormStatus.getAttribute("class");
        Assert.assertTrue(actualMessage.contains(status));
        log.info("Verify last name error : " + status.toString());
    }

    public void verifyErrorMessage(String expectedMessage) {
        String actualMessage = errorMessage.getText();
        Assert.assertTrue(actualMessage.contains(expectedMessage));
        log.info("Verify error message : " + errorMessage.toString());
    }

    public void enterAllMandatoryData(String fName, String lName, String password, String addressLine1, String city, String state, String postCode, String phNumber) {
        pmSendTextToElement(firstNameTab, fName);
        log.info("Enter first name : " + fName.toString());
        pmSendTextToElement(lastNameTab, lName);
        log.info("Enter last name : " + lName.toString());
        pmSendTextToElement(passwordTab, password);
        log.info("Enter password : " + password.toString());
        pmSendTextToElement(addressLine1Tab, addressLine1);
        log.info("Enter address line 1 : " + addressLine1.toString());
        pmSendTextToElement(cityTab, city);
        log.info("Enter city : " + city.toString());
        pmSendTextToElement(stateTab, state);
        log.info("Select state : " + state.toString());
        pmSendTextToElement(postCodeTab, postCode);
        log.info("Enter postcode : " + postCode.toString());
        pmSendTextToElement(phoneNumberTab, phNumber);
        log.info("Enter mobile number : " + phNumber.toString());

    }

}
