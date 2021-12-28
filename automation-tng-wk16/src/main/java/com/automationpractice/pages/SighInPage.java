package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class SighInPage extends Utility {
    public SighInPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement emailTab;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Create an account']")
    WebElement createAccountTab;

    public void enterEmail(String email){
        pmSendTextToElement(emailTab,email);
    }
    public void clickOnCreateAccount(){
        pmClickOnElement(createAccountTab);
        pmWaitWithThreadSleep(20);
        Reporter.log("Click on create account : "+ createAccountTab.toString()+"<br>");
    }
}
