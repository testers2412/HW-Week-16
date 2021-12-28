package com.automationpractice.testsuite;

import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.OurStorePage;
import com.automationpractice.testbase.TestBase;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class ScrollMapAndScreenShotTest extends TestBase {
    HomePage homePage;
    OurStorePage ourStorePage;
    @BeforeMethod (alwaysRun = true)
    public void inIt(){
        homePage= new HomePage();
        ourStorePage= new OurStorePage();
    }
    @Test (groups = {"sanity","regression"})
    public void scrollThroughMap(){
        homePage.clickOnOurStoreTab();
        ourStorePage.scrollThroughMap();
        ourStorePage.sliderDown();
        ourStorePage.takeScreenshot("WestPalmBeach");
    }
}
