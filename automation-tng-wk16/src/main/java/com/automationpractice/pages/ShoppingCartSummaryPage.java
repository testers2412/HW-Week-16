package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.Reporter;

public class ShoppingCartSummaryPage extends Utility {
    public ShoppingCartSummaryPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//p[@class='alert alert-warning']")
    WebElement alertText;
    public void verifyShoppingCartIsEmpty(String expectedMessage){
        String actualMessage= alertText.getText();
        pmWaitWithThreadSleep(20);
        Assert.assertEquals(actualMessage,expectedMessage,"Cart is not empty");
        Reporter.log("Verify the cart is empty"+expectedMessage+"<br>");
    }
}
