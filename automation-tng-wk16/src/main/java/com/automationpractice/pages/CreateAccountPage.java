package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.Reporter;

public class CreateAccountPage extends Utility {
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


  public void enterFirstName(String firstName){
      pmSendTextToElement(firstNameTab,firstName);
      Reporter.log("Enter first name : "+ firstName.toString()+"<br>");
  }
    public void enterLastName(String lastName){
        pmSendTextToElement(lastNameTab,lastName);
        Reporter.log("Enter last name : "+ lastName.toString()+"<br>");
    }
    public void enterPassword(String password){
      pmSendTextToElement(passwordTab,password);
        Reporter.log("Enter password : "+ password.toString()+"<br>");
    }
    public void enterAddressLine1(String addressLine1){
      pmSendTextToElement(addressLine1Tab,addressLine1);
        Reporter.log("Enter address line 1 : "+ addressLine1.toString()+"<br>");
    }
    public void enterCity(String city){
      pmSendTextToElement(cityTab,city);
        Reporter.log("Enter city : "+ city.toString()+"<br>");
    }
    public void selectState(String state){
      pmSendTextToElement(stateTab,state);
        Reporter.log("Select state : "+ state.toString()+"<br>");
    }
    public void enterPostCode(String postCode){
      pmSendTextToElement(postCodeTab,postCode);
        Reporter.log("Enter postcode : "+ postCode.toString()+"<br>");
    }
    public void enterMobileNumber(String mobileNum){
      pmSendTextToElement(phoneNumberTab,mobileNum);
        Reporter.log("Enter mobile number : "+ mobileNum.toString()+"<br>");
    }
    public void clickOnRegister(){
      pmClickOnElement(registerTab);
        Reporter.log("Click on register : "+ registerTab.toString()+"<br>");
    }
    public void verifyFirstNameError(String status){
      String actualMessage= fNameFormStatus.getAttribute("class");
        Assert.assertTrue(actualMessage.contains(status));
        Reporter.log("Verify first name error : "+ status.toString()+"<br>");
    }
    public void verifyLastNameError(String status ){
        String actualMessage= lNameFormStatus.getAttribute("class");
        Assert.assertTrue(actualMessage.contains(status));
        Reporter.log("Verify last name error : "+ status.toString()+"<br>");
    }
    public void verifyErrorMessage(String expectedMessage){
      String actualMessage= errorMessage.getText();
      Assert.assertTrue(actualMessage.contains(expectedMessage));
        Reporter.log("Verify error message : "+ errorMessage.toString()+"<br>");
    }

}
