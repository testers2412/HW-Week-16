package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.Reporter;

public class MyAccountPage extends Utility {
    public MyAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement pageTitleText;
    @CacheLookup
    @FindBy(xpath = "//a[@title='View my customer account']//span")
    WebElement customerNameText;

    public void verifyPageTitle(String expMessage) {
        String actualMessage = pageTitleText.getText();
        Assert.assertTrue(actualMessage.contains(expMessage));
        Reporter.log("Verify page title : "+ pageTitleText.toString()+"<br>");
    }

    public void verifyPageHasAccountName(String expMessage) {
        String actMessage = customerNameText.getText();
        Assert.assertTrue(actMessage.contains(expMessage));
        Reporter.log("Verify page has account name : "+ expMessage.toString()+"<br>");
    }
}
