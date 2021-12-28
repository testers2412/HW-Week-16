package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WomanPage extends Utility {
    private static final Logger log = LogManager.getLogger(WomanPage.class.getName());
    public WomanPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h5[@itemprop='name']//a[@title='Faded Short Sleeve T-shirts']")
    WebElement productTab;

    public void clickOnProduct() {
        pmClickOnElement(productTab);
        log.info("Click on product : "+ productTab.toString());
    }

}
