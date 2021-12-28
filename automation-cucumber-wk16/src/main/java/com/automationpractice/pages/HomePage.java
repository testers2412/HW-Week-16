package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage extends Utility {
private static final Logger log = LogManager.getLogger(HomePage.class.getName());
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
        log.info("Click on women category : "+ womanTab.toString());
    }

    public void clickOnSummerOption() {
        pmMouseHoverNoClick(womanTab);
        pmClickOnElement(summerOption);
        pmWaitWithThreadSleep(20);
        log.info("Click on summer option : "+ summerOption.toString());
    }

    public void clickOnSighInTab() {
        pmClickOnElement(signInTab);
        pmWaitWithThreadSleep(20);
        log.info("Click on sign In tab : "+ signInTab.toString());
    }
    public void clickOnOurStoreTab(){
        pmClickOnElement(ourStoresTab);
       log.info("Click on our store tab :"+ ourStoresTab.toString());
    }



}
