package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;





public class ShoppingCartPage extends Utility {
    private static final Logger log = LogManager.getLogger(ShoppingCartPage.class.getName());
    public ShoppingCartPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//i[@class='icon-trash']")
    WebElement trashIcon;


    public void verifyDeleteButtonIsDisplayed(){
        String actualText= trashIcon.getAttribute("class");
        String expectedText= "icon-trash";
        Assert.assertEquals("The delete button is not displayed",expectedText,actualText);
      log.info("Verify the delete button is displayed :"+trashIcon.toString());
    }
    public void deleteItem(){
        pmClickOnElement(trashIcon);
        pmWaitWithThreadSleep(60);
        log.info("Click on Delete button : "+ trashIcon.toString());
    }

}
