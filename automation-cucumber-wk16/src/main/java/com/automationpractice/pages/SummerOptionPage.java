package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SummerOptionPage extends Utility {
    private static final Logger log = LogManager.getLogger(SummerOptionPage.class.getName());
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
        pmVerifyElements("Wrong page displayed", expectedMessage,summerDressText );
        log.info("Verify summer dress page : "+ expectedMessage.toString());
    }

    public void changeThePriceRange(int x) {
        Actions slider = new Actions(driver);
        slider.dragAndDropBy(priceSliderRight, x, 0).build().perform();
        pmWaitWithThreadSleep(40);
        log.info("Change the price range : "+ priceSliderRight.toString());
    }
}
