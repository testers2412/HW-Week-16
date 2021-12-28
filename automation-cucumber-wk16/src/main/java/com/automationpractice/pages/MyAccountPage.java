package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class MyAccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(MyAccountPage.class.getName());
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
        log.info("Verify page title : "+ pageTitleText.toString());
    }

    public void verifyPageHasAccountName(String expMessage) {
        String actMessage = customerNameText.getText();
        Assert.assertTrue(actMessage.contains(expMessage));
        log.info("Verify page has account name : "+ expMessage.toString());
    }
}
