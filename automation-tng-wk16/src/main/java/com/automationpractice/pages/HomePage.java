package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class HomePage extends Utility {

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement womanTab;
    @CacheLookup
    @FindBy(xpath = "//a[@title='Our stores']")
    WebElement ourStoresTab;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='submenu-container clearfix first-in-line-xs']//ul//li//a[@title='Summer Dresses'][normalize-space()='Summer Dresses']")
    WebElement summerOption;
    @CacheLookup
    @FindBy(xpath = "//a[@title='Log in to your customer account']")
    WebElement signInTab;

    public void clickOnWomanCategory() {
        pmClickOnElement(womanTab);
        pmWaitWithThreadSleep(20);
        Reporter.log("Click on women category : "+ womanTab.toString()+"<br>");
    }

    public void clickOnSummerOption() {
        doMouseHoverNoClick(womanTab);
        pmClickOnElement(summerOption);
        pmWaitWithThreadSleep(20);
        Reporter.log("Click on summer option : "+ summerOption.toString()+"<br>");
    }

    public void clickOnSighInTab() {
        pmClickOnElement(signInTab);
        pmWaitWithThreadSleep(20);
        Reporter.log("Click on sign In tab : "+ signInTab.toString()+"<br>");
    }
    public void clickOnOurStoreTab(){
        pmClickOnElement(ourStoresTab);
        Reporter.log("Click on our store tab :"+ ourStoresTab.toString()+"<br>");
    }



}
