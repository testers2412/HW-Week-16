package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class WomanPage extends Utility {
    public WomanPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h5[@itemprop='name']//a[@title='Faded Short Sleeve T-shirts']")
    WebElement productTab;

    public void clickOnProduct() {
        pmClickOnElement(productTab);
        Reporter.log("Click on product : "+ productTab.toString()+"<br>");
    }

}
