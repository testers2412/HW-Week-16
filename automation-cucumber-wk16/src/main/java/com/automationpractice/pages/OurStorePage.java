package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class OurStorePage extends Utility {
    public OurStorePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@id='map']")
    WebElement maps;
    @CacheLookup
    @FindBy(xpath = "//button[@class='dismissButton']")
    WebElement dismissButton;
    public void sliderDown(){
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("scroll(0,200)");
    }

    public void scrollThroughMap() {
        pmClickOnElement(dismissButton);
        Actions builder = new Actions(driver);
        pmWaitWithThreadSleep(50);
        Action scroll = builder.moveToElement(maps)
                .clickAndHold()
                .moveToElement(maps, 0, 0)
                .moveByOffset(0, -500).release(maps).build();

        scroll.perform();
        log.info("Scroll through the map : " + maps.toString() );
    }
    public void takeScreenshot(String ssName){
        pmWaitWithThreadSleep(20);
        pmTakeScreenShot(ssName);
        log.info("Take screenshot : " + ssName );
    }
}
