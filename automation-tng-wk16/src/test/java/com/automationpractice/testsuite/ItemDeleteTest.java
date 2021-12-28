package com.automationpractice.testsuite;

import com.automationpractice.pages.*;
import com.automationpractice.testbase.TestBase;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class ItemDeleteTest extends TestBase {
   HomePage homePage;
   ShoppingCartPage shoppingCartPage;
   ShoppingCartSummaryPage shoppingCartSummaryPage;
   ProductsPage productsPage;
   WomanPage womanPage;
   @BeforeMethod (alwaysRun = true)
   public void inIt(){
       homePage= new HomePage();
       shoppingCartPage= new ShoppingCartPage();
       shoppingCartSummaryPage= new ShoppingCartSummaryPage();
       productsPage = new ProductsPage();
       womanPage= new WomanPage();
   }
@Test (groups = {"regression"})
    public void userShouldDeleteTheItemFromCart(){
       homePage.clickOnWomanCategory();
       womanPage.clickOnProduct();
      productsPage.clickOnItemAddTOBasket();
       productsPage.clickOnProcessToCheckout();
       shoppingCartPage.verifyDeleteButtonIsDisplayed();
       shoppingCartPage.deleteItem();
       shoppingCartSummaryPage.verifyShoppingCartIsEmpty("Your shopping cart is empty.");
}


}
