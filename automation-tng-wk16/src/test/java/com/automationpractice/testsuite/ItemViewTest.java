package com.automationpractice.testsuite;

import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.SummerOptionPage;
import com.automationpractice.testbase.TestBase;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class ItemViewTest extends TestBase {
    HomePage homePage;

    SummerOptionPage summerOptionPage;

    @BeforeMethod(alwaysRun = true)
    public void inIt() {
        homePage = new HomePage();
        summerOptionPage = new SummerOptionPage();
    }

    @Test (groups = {"sanity","regression"})
    public void summerItemDisplayedInWomanCategory() {
        homePage.clickOnSummerOption();
        summerOptionPage.verifySummerDressPage("SUMMER DRESSES ");
    }

    @Test (groups = {"regression"})
    public void searchResultChangeByPriceRange() {
        homePage.clickOnSummerOption();

        summerOptionPage.changeThePriceRange(25);

    }

}

