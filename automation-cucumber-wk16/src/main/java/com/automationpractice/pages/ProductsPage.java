package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class ProductsPage extends Utility {
    private static  final Logger log = LogManager.getLogger(ProductsPage.class.getName());
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
        log.info("Click on item to add in to basket : " + addToCart.toString());
    }

    public void clickOnProcessToCheckout() {
        pmClickOnElement(processToCheckout);
        log.info("Click on process to check out button :  " + processToCheckout.toString());
    }
}
