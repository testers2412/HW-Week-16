package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class SummerOptionPage extends Utility {
    public SummerOptionPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//span[@class='cat-name']")
    WebElement summerDressText;
    @CacheLookup
    @FindBy(xpath = "//div[@id='left_column']//a[2]")
    WebElement priceSliderRight;
    @CacheLookup
    @FindBy(xpath = "//div[@id='layered_price_slider']//div")
    WebElement priceSlider;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='product_list grid row']//h5")
    WebElement itemListBefore;

    public void verifySummerDressPage(String expectedMessage) {
        pmVerifyElements(summerDressText, expectedMessage, "Wrong page displayed");
        Reporter.log("Verify summer dress page : "+ expectedMessage.toString()+"<br>");
    }

    public void changeThePriceRange(int x) {
        Actions slider = new Actions(driver);
        slider.dragAndDropBy(priceSliderRight, x, 0).build().perform();
        pmWaitWithThreadSleep(40);
        Reporter.log("Change the price range : "+ priceSliderRight.toString()+"<br>");
    }
}
