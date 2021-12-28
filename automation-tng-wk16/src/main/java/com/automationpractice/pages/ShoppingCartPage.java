package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.Reporter;

public class ShoppingCartPage extends Utility {
    public ShoppingCartPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//i[@class='icon-trash']")
    WebElement trashIcon;


    public void verifyDeleteButtonIsDisplayed(){
        String actualText= trashIcon.getAttribute("class");
        String expectedText= "icon-trash";
        Assert.assertEquals(actualText,expectedText,"The delete button is not displayed");
      Reporter.log("Verify the delete button is displayed :"+trashIcon.toString()+"<br>");
    }
    public void deleteItem(){
        pmClickOnElement(trashIcon);
        pmWaitWithThreadSleep(40);
        Reporter.log("Click on Delete button : "+ trashIcon.toString()+"<br>");
    }

}
