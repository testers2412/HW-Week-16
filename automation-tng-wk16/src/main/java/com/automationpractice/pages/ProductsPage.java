package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class ProductsPage extends Utility {
    public ProductsPage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//button[@name='Submit']//span")
    WebElement addToCart;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Proceed to checkout']//span")
    WebElement processToCheckout;

    public void clickOnItemAddTOBasket() {
        pmClickOnElement(addToCart);
        Reporter.log("Click on item to add in to basket : " + addToCart.toString() + "<br>");
    }

    public void clickOnProcessToCheckout() {
        pmClickOnElement(processToCheckout);
        Reporter.log("Click on process to check out button :  " + processToCheckout.toString() + "<br>");
    }
}
