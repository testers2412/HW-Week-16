package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShoppingCartSummaryPage extends Utility {
    private static final Logger log= LogManager.getLogger(ShoppingCartSummaryPage.class.getName());
    public ShoppingCartSummaryPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//p[@class='alert alert-warning']")
    WebElement alertText;
    public void verifyShoppingCartIsEmpty(String expectedMessage){
        String actualMessage= alertText.getText();
        pmWaitWithThreadSleep(20);
        Assert.assertEquals("Cart is not empty",expectedMessage,actualMessage);
        log.info("Verify the cart is empty"+expectedMessage);
    }
}
